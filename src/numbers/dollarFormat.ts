export function dollarFormat(amount: number, lang: string = "us-EN", currency: string = "USD"): string {
  const formatted = new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: currency,
  }).format(amount);

  // Normalize the output
  return formatted
    .replace(/\u00A0/g, ' ')  // Replace non-breaking spaces with regular spaces
    .replace(/\s+/g, ' ')     // Replace multiple spaces with a single space
    .trim()                   // Remove leading and trailing whitespace
    .replace(/^-\s*/, '-');   // Ensure minus sign is immediately before the currency symbol
}