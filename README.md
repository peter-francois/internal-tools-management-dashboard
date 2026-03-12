# Internal Tools Management Dashboard

> Dashboard SaaS React/TypeScript pour gérer les outils internes, les budgets et l'utilisation par équipe.

---

## 🚀 Quick Start

```bash
# Installer les dépendances
npm install

# Copier et configurer les variables d'environnement
cp .env.example .env

# Démarrer le serveur de développement
npm run dev
```

---

## 🏗️ Architecture

```
src/
├── api/                  # Appels Axios (un fichier par ressource)
├── components/
│   ├── dashboard/        # Composants spécifiques au Dashboard
│   ├── tools/            # Composants de la page Tools
│   ├── analytics/        # Composants de la page Analytics
│   └── ui/               # Composants partagés (StatCard, Badge, ErrorPage…)
├── hooks/                # Hooks React Query (useTools, useAnalytics…)
├── layouts/              # AppLayout
├── pages/                # Composants de niveau route
│   ├── Analytics/
│   ├── Dashboard/
│   ├── NotFound/
│   ├── Settings/
│   └── Tools/
├── stores/               # useDarkMode Store
├── styles/               # index.css
├── types/
│   ├── constants/        # NAV_ITEMS, ERROR_PAGES, TOOL_STATUS…
│   └── interfaces/       # Interfaces TypeScript (Tool, User, Analytics…)
├── utils/                # Fonctions pures + axiosClient, queryClient
├── .env.example
└── README.md
```

**Conventions clés :**

- Un fichier API par ressource (`tool.api.ts`, `analytics.api.ts`…)
- Un hook par requête (`useTools`, `useActiveToolsCount`…)
- Fonctions de mapping dans `utils/` pour transformer les données API en props de composants (DTO → ViewModel)

---

## 🎨 Design System Evolution

Construit progressivement :

- **Jour 1** | Base : couleurs (accent indigo, gris neutres) et échelle typographique.
- **Jour 2** | Dark mode via `darkMode: 'class'` Tailwind et bibliothèque de composants : `StatCard`, `Badge`, `ErrorPage`, `HamburgerMenu`.
- **Jour 3** | Classe CSS `.nav-link`, `.nav-link-active` et `.nav-link-mobile` cohérente et composants pilotés par les données remplaçant les mocks, fond en grille, animations au hover

**Décisions de design :**

- Fond en grille dark mode (lignes `rgba(255,255,255,0.04)`, espacement 50px)
- Système de dégradés pour les badges de statut et les icônes de stat cards
- `@layer base` pour les styles globaux `h1`, `h2`, `p`, `button`, `input` — source unique de vérité

---

## 🔗 Navigation & User Journey

```
Dashboard → Tools → Analytics → Settings
```

- **Dashboard** — Vue KPI (budget, outils actifs, départements, coût/utilisateur) + tableau des outils récents
- **Tools** — Reste à implémenter.
- **Analytics** — Reste à implémenter.
- **Settings** — Reste à implémenter.

La navigation est gérée par React Router avec un `AppLayout` partagé (header sticky + `<Outlet />`).
La route active est mise en évidence via `navLinkClass({ isActive })`.

---

## 📊 Data Integration Strategy

Les données transitent depuis un **JSON Server** via :

```
JSON Server → Axios (api/) → React Query (hooks/) → Composants
```

- **`api/`** — fonctions de fetch typées avec params (`ToolsQueryParams`)
- **`hooks/`** — wrappers React Query avec `staleTime` et `refetchInterval`
- **`utils/mapAnalyticsToStatCards`** — transforme la réponse API `Analytics` en `StatCardProps[]`

**Stratégie de cache :**
| Donnée | staleTime | refetchInterval |
|---|---|---|
| Analytics | 2 min | 1 min |
| Nombre d'outils actifs | 5 min | 2 min |
| Nombre de départements | 10 min | 5 min |
| Outils récents | 5 min | — |

Le cache est persisté dans `localStorage` via `@tanstack/query-async-storage-persister`.

---

## 📱 Progressive Responsive Design

Approche mobile-first avec les breakpoints Tailwind :

- **Mobile (`< lg`)** — Menu hamburger, stat cards en colonne unique, liens de navigation pleine largeur avec tap targets `min-h-11`
- **Tablette (`sm`)** — Grille stat cards en 2 colonnes
- **Desktop (`lg+`)** — Navigation horizontale et grille 4 colonnes

Les tap targets sont appliqués globalement via `.nav-link` et les styles de base `button` (`min-h-11 lg:min-h-0`).

---

## 🧪 Testing Strategy

La sécurité des types est la couche QA principale :

- **TypeScript** — interfaces strictes pour toutes les réponses API et props de composants
- **`npm run build`** — vérification complète `tsc` avant tout déploiement
- **`npm run lint`** — ESLint pour la qualité du code

Deux tests unitaires ont été ajoutés pour le moment :

- `gradient.spec.ts` — vérifie la génération des gradients pour les composants UI

- `navLinkClass.spec.ts` — vérifie la logique des classes CSS pour les liens de navigation

Pour lancer les tests unitaires :

```bash
npm run test
```

Les prochains tests couvriront les fonctions de mapping (ex. mapAnaliticsToStatCards) et la logique des hooks, avec Jest + Testing Library.

---

## ⚡ Performance Optimizations

- **Cache React Query** — évite les requêtes redondantes lors des navigations entre pages
- **Persistance `localStorage`** — le cache survit aux rechargements de page
- **`select` dans React Query** — `useActiveToolsCount` et `useDepartmentsCount` calculent les compteurs via `select: (data) => data.length` sans fetcher des tableaux complets
- **Code splitting** — lazy loading des pages avec React Router
- **Tailwind CSS** — purgé en production, bundle CSS minimal

---

## 🎯 Design Consistency Approach

Pour le dévelopement futur des autres pages sans maquettes, la cohérence a été assurée par :

- **CSS `@layer base`** — styles globaux de typographie
- **`@layer components`** — `.nav-link`, `.nav-link-active`, `.nav-link-mobile`, `.link`
- **Constantes** — `STAT_CARDS_VISUAL`, `TOOL_STATUS`, `ERROR_PAGES`, `NAV_ITEMS` comme sources uniques de vérité
- **Utilitaire gradient** — `gradient(fromColor, viaColor, toColor)` réutilisé sur les badges et icônes

---

## 📈 Data Visualization Philosophy

La bibliothèque de charts n'est pas encore intégrée — les visualisations actuelles sont :

- Stat cards avec badges de tendance (dégradé + pourcentage)
- Tableau de données triable avec badges de statut

Prochaine étape : **Recharts** — choisi pour son API React-native, sa composabilité et son intégration facile avec Tailwind.

---

##  🐳 Docker Setup

Cette application peut être déployée facilement avec Docker et Docker Compose.

Dockerfile : build multi-stage (Node → Nginx) avec VITE_API_BASE_URL et routing client via try_files /index.html.

Docker Compose : service front exposé sur le port 80, réseau dédié app-network.

Commandes
```bash
# Builder l'image
docker build --build-arg VITE_API_BASE_URL=https://api.monsite.com -t internal-tools-management-dashboard .

# Avec Docker Compose
docker-compose up -d

```

Accessible ensuite sur http://localhost.

---

## 🔮 Next Steps / Complete App Vision

| Fonctionnalité                                | Priorité |
| --------------------------------------------- | -------- |
| CRUD tools (ajout, édition, suppression)      | Haute    |
| Page de gestion des tools avec filtres        | Haute    |
| Page analytics avec charts                    | Haute    |
| Tests unitaires avec Jest sur mappers & hooks | Moyenne  |
| Tests E2E avec Cypress                        | Moyenne  |
