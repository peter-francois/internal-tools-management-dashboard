export type GradientDirection = "br" | "r";

const directionMap: Record<GradientDirection, string> = {
  br: "bg-linear-to-br",
  r: "bg-linear-to-r",
};

export function gradient(
  from: string,
  via: string,
  to: string,
  direction: GradientDirection = "br",
) {
  return `${directionMap[direction]} ${from} from-5% ${via} via-30% ${to}`;
}
