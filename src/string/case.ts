/**
 * The `toCase` object provides various methods for converting strings into different casing formats.
 *
 * Available methods:
 * - `title`: Converts a string to Title Case (e.g., "hello_world" -> "Hello World").
 * - `snake`: Converts a string to snake_case or kebab-case (e.g., "Hello World" -> "hello_world" or "hello-world").
 * - `lower`: Converts a string to lowercase (e.g., "Hello World" -> "hello world").
 * - `upper`: Converts a string to uppercase (e.g., "Hello World" -> "HELLO WORLD").
 * - `screamingSnake`: Converts a string to SCREAMING_SNAKE_CASE (e.g., "Hello World" -> "HELLO_WORLD").
 * - `train`: Converts a string to Train-Case (e.g., "hello world" -> "Hello-World").
 * - `dot`: Converts a string to dot.case (e.g., "Hello World" -> "hello.world").
 * - `pascal`: Converts a string to PascalCase (e.g., "hello world" -> "HelloWorld").
 * - `camel`: Converts a string to camelCase (e.g., "hello world" -> "helloWorld").
 */
export const toCase = {
  title: (str: string): string => {
    return str
      .split("_")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
  snake: (str: string, spacer: "_" | "-" = "_"): string => {
    const safeName = str.replace(/[^a-zA-Z0-9]/g, spacer);
    if (!/[a-zA-Z]/.test(safeName[0])) {
      return `${safeName}`;
    }
    return safeName;
  },
  lower: (str: string): string => {
    return str.toLowerCase();
  },
  upper: (str: string): string => {
    return str.toUpperCase();
  },
  screamingSnake: (str: string): string => {
    return str.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase();
  },
  train: (str: string): string => {
    return str
      .split(/[^a-zA-Z0-9]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("-");
  },
  dot: (str: string): string => {
    return str.replace(/[^a-zA-Z0-9]/g, ".").toLowerCase();
  },
  pascal: (str: string): string => {
    return str
      .split(/[^a-zA-Z0-9]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  },
  camel: (str: string): string => {
    const words = str.split(/[^a-zA-Z0-9]/);
    return words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }
};
