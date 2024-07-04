import { extractURLS } from "./extractUrls";


describe("Tests for extracting urls from a string", ()=>{
  it("should find multiple urls if present", ()=>{
    const string = `I like https://google.com and used to read http://digg.com/home`;
    const urls = extractURLS(string);
    expect(urls[0]).toBe('https://google.com');
    expect(urls.length).toBe(2);
  })
  it('should return an empty array when given an empty string', () => {
    expect(extractURLS('')).toEqual([]);
  });

  it('should return an array of URLs when given a string with URLs', () => {
    const str = 'This is a string containing http://example.com and https://www.google.com';
    const expectedResult = ['http://example.com', 'https://www.google.com'];
    expect(extractURLS(str)).toEqual(expectedResult);
  });
})
