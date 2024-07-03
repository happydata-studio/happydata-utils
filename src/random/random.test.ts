import { random, randomString } from "./random";

describe('String JSON Utils', () => {

  test('extract Object JSON from a string', () => {
    
    const r = random();
    const s = randomString();
    console.log(r,s);
    expect(r).toBeTruthy();
    expect(s).toBeTruthy();

  });
  
});