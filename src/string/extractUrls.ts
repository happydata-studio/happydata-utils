export const extractURLS = (str:string):string[] => {
  const urlRegex = /((?:https?|http?|ftp):\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&//=]*))/g;

  // Match all urls in the string
  const matches: RegExpMatchArray | null = str.match(urlRegex);

  // Extract and return the urls as an array
  return matches ? matches.map((url) => url) : [];
}