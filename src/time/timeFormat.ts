type FormatProps = "short" | "medium" | "long" | "full";

/** Mapping of full timezone names to their abbreviations */
export const timeZoneAbbreviations: Record<string, string> = {
  "Eastern Standard Time": "EST",
  "Eastern Daylight Time": "EDT",
  "Central Standard Time": "CST",
  "Central Daylight Time": "CDT",
  "Mountain Standard Time": "MST",
  "Mountain Daylight Time": "MDT",
  "Pacific Standard Time": "PST",
  "Pacific Daylight Time": "PDT",
  // Add more time zones as needed
};

/**
 * Formats a given date into a specified time format.
 *
 * @param {Date} date - The date to format.
 * @param {FormatProps} format - The desired format ("short", "medium", "long", "full").
 * @param {string} [locale='default'] - The locale to use for formatting.
 * @returns {string} - The formatted time string.
 */
export const timeFormat = (date: Date, format: FormatProps, locale = 'default'): string => {
  if (isNaN(date?.getTime())) {
    return "Invalid Date";
  }

  const options: Record<FormatProps, Intl.DateTimeFormatOptions> = {
    short: { timeStyle: "short" },
    medium: { timeStyle: "medium" },
    long: { timeStyle: "long" },
    full: { timeStyle: "full" }
  };

  const formatter = new Intl.DateTimeFormat(locale, options[format]);
  let time = formatter.format(date);

  switch (format) {
    case "short":
      return formatShortTime(time);
    case "medium":
      return formatMediumTime(time);
    case "long":
      return formatLongTime(time);
    case "full":
      return formatFullTime(time);
    default:
      return time;
  }
};

/**
 * Formats short time string by removing extra spaces and converting to lowercase.
 *
 * @param {string} time - The formatted time string.
 * @returns {string} - The cleaned-up short time string.
 */
const formatShortTime = (time: string): string => {
  const [numbers, period] = time.split(" ");
  return `${numbers.split(":")[0]}${(period || "").toLowerCase()}`.trim();
};

/**
 * Formats medium time string by converting period to lowercase.
 *
 * @param {string} time - The formatted time string.
 * @returns {string} - The cleaned-up medium time string.
 */
const formatMediumTime = (time: string): string => {
  const [numbers, period] = time.split(" ");
  return `${numbers.split(":")[0]}:${numbers.split(":")[1]}${(period || "").toLowerCase()}`.trim();
};

/**
 * Formats long time string.
 *
 * @param {string} time - The formatted time string.
 * @returns {string} - The cleaned-up long time string.
 */
const formatLongTime = (time: string): string => {
  const [numbers, period] = time.split(" ");
  return `${numbers.split(":")[0]}:${numbers.split(":")[1]} ${(period || "")}`.trim();
};

/**
 * Formats full time string by replacing full timezone names with abbreviations.
 *
 * @param {string} time - The formatted time string.
 * @returns {string} - The cleaned-up full time string with timezone abbreviation.
 */
const formatFullTime = (time: string): string => {
  for (const [fullName, abbreviation] of Object.entries(timeZoneAbbreviations)) {
    if (time.includes(fullName)) {
      return time.replace(fullName, abbreviation);
    }
  }
  return time;
};
