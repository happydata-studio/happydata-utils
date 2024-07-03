type FormatProps = "short" | "medium" | "long" | "full";

/** Mapping of full timezone names to their abbreviations */
export const timeZoneAbbreviations: Record<string, string> = {
  // North American time zones
  "Eastern Standard Time": "EST",
  "Eastern Daylight Time": "EDT",
  "Central Standard Time": "CST",
  "Central Daylight Time": "CDT",
  "Mountain Standard Time": "MST",
  "Mountain Daylight Time": "MDT",
  "Pacific Standard Time": "PST",
  "Pacific Daylight Time": "PDT",
  "Alaska Standard Time": "AKST",
  "Alaska Daylight Time": "AKDT",
  "Hawaii-Aleutian Standard Time": "HST",
  "Hawaii-Aleutian Daylight Time": "HDT",
  "Atlantic Standard Time": "AST",
  "Atlantic Daylight Time": "ADT",
  "Newfoundland Standard Time": "NST",
  "Newfoundland Daylight Time": "NDT",

  // European time zones
  "Greenwich Mean Time": "GMT",
  "British Summer Time": "BST",
  "Central European Time": "CET",
  "Central European Summer Time": "CEST",
  "Eastern European Time": "EET",
  "Eastern European Summer Time": "EEST",
  "Western European Time": "WET",
  "Western European Summer Time": "WEST",

  // Australian time zones
  "Australian Eastern Standard Time": "AEST",
  "Australian Eastern Daylight Time": "AEDT",
  "Australian Central Standard Time": "ACST",
  "Australian Central Daylight Time": "ACDT",
  "Australian Western Standard Time": "AWST",

  // Asian time zones
  "Japan Standard Time": "JST",
  "Korea Standard Time": "KST",
  "China Standard Time": "CST",
  "India Standard Time": "IST",
  "Indochina Time": "ICT",

  // Other time zones
  "Coordinated Universal Time": "UTC",
  "Central Africa Time": "CAT",
  "East Africa Time": "EAT",
  "South Africa Standard Time": "SAST",
  "West Africa Time": "WAT",
  "Arabian Standard Time": "AST",
  "Arabian Daylight Time": "ADT",
  "Iran Standard Time": "IRST",
  "Iran Daylight Time": "IRDT",
  "Israel Standard Time": "IST",
  "Israel Daylight Time": "IDT",
  "Brasilia Time": "BRT",
  "Brasilia Summer Time": "BRST",
  "Argentina Time": "ART",
  "Chile Standard Time": "CLT",
  "Chile Summer Time": "CLST",
  "New Zealand Standard Time": "NZST",
  "New Zealand Daylight Time": "NZDT",
  "Samoa Standard Time": "SST",
  "Samoa Daylight Time": "SDT",

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
export const formatShortTime = (time: string): string => {
  const [numbers, period] = time.split(" ");
  return `${numbers.split(":")[0]}${(period).toLowerCase()}`.trim();
};


export const formatMediumTime = (time: string): string => {
  const [numbers, period] = time.split(" ");
  return `${numbers.split(":")[0]}:${numbers.split(":")[1]}${(period).toLowerCase()}`.trim();
};


export const formatLongTime = (time: string): string => {
  const [numbers, period] = time.split(" ");
  return `${numbers.split(":")[0]}:${numbers.split(":")[1]} ${(period)}`.trim();
};


export const formatFullTime = (time: string): string => {
  let final = time;
  for (const [fullName, abbreviation] of Object.entries(timeZoneAbbreviations)) {
    if (final.includes(fullName)) {
      final = final.replace(fullName, abbreviation);
      break; // Ensure only one replacement
    }
  }
  return final;
};
