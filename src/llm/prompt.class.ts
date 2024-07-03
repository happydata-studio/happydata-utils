
type TBaseMessageRole = "system" | "assistant" | "user";

export class Prompt {
  role: TBaseMessageRole;
  content: string;
  meta?: Record<string,any>;

  constructor(content:string | string[], role: TBaseMessageRole, meta?:Record<string,any>) {
    if (Array.isArray(content)) {
      this.content = content.join("\n");
    } else {
      this.content = content;
    }
    this.role = role;
    this.meta = {};
    this.meta = {...this.meta, ...meta||{}}
  }

  public getVariables(): string[] {
    const variablePattern = /\{(\w+)\}/g;
    const variables: string[] = [];
    let match: RegExpExecArray | null;

    while ((match = variablePattern.exec(this.content)) !== null) {
      variables.push(match[1]);
    }

    return variables;
  }

  public render(variables: Record<string, string>): Prompt {
    let renderedContent = this.content;
    for (const [key, value] of Object.entries(variables)) {
      const placeholder = `{${key}}`;
      renderedContent = renderedContent.replace(new RegExp(placeholder, 'g'), value);
    }
    return new Prompt(renderedContent, this.role, this.meta);
  }
}

export class SystemPrompt extends Prompt {
  constructor(content:string | string[], meta?: Record<string,any>) {
    super(content, "system", meta);
  }
}

export class UserPrompt extends Prompt {
  constructor(content:string | string[], meta?: Record<string,any>) {
    super(content, "user", meta);
  }
}

export class AssistantPrompt extends Prompt {
  constructor(content:string | string[], meta?: Record<string,any>) {
    super(content, "assistant", meta);
  }
}