export interface ErrorPageProps {
  code: string | number;
  title: string;
  description: string;
  action?: {
    label: string;
    path: string;
  };
}
