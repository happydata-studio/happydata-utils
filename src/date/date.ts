export type TDateFormat = "tiny" | "small" | "base" | "large";

export const dateFormat = (date:Date, format:TDateFormat, locale = 'default') => {
  const options:Record<TDateFormat, any> = {
    tiny: { month: '2-digit', day: '2-digit' },
    small: { month: '2-digit', day: 'numeric', year: 'numeric' },
    base: { month: 'short', day: 'numeric', year: 'numeric' },
    large: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
  };

  const formatter = new Intl.DateTimeFormat(locale, options[format]);
  return formatter.format(date);
}


// Examples:
