import { Prompt, SystemPrompt } from "./prompt.class"

describe("LLM Utils", ()=>{
  
  test("test prompt variables", ()=>{
    const system = new SystemPrompt([
      `You are a blog post generator.`,
      `Blog Post about: {subject}`
    ])
    const p = system.render({ subject: "Dogs and Cats"});
    expect(p.content).toContain("Blog Post about: Dogs and Cats");
    expect(p.role).toBe("system");
    expect(JSON.stringify(system.getVariables())).toBe(JSON.stringify(["subject"]))
  });
  
})