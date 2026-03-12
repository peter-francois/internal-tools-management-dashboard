import { gradient } from "../gradients";

describe("gradient", () => {
  it("génère un gradient vers br par défaut", () => {
    const result = gradient("from-indigo-500", "via-purple-500", "to-pink-500");
    expect(result).toBe(
      "bg-linear-to-br from-indigo-500 from-5% via-purple-500 via-30% to-pink-500",
    );
  });

  it("génère un gradient vers r quand direction = 'r'", () => {
    const result = gradient("from-indigo-500", "via-purple-500", "to-pink-500", "r");
    expect(result).toBe(
      "bg-linear-to-r from-indigo-500 from-5% via-purple-500 via-30% to-pink-500",
    );
  });

  it("génère un gradient vers br quand direction = 'br'", () => {
    const result = gradient("from-indigo-500", "via-purple-500", "to-pink-500", "br");
    expect(result).toBe(
      "bg-linear-to-br from-indigo-500 from-5% via-purple-500 via-30% to-pink-500",
    );
  });
});
