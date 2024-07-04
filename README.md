# [Happy Data Studio](https://happydata.studio) Utils

Welcome to Happy Data Studio Utils! This package is designed to make your development process smoother by sharing my set of utilities that save you from repeatedly copying and pasting the same code.

Happy Data Studio Utils offers a wide range of functions to streamline your workflow. Whether you need to manipulate strings, interacting with OpenAI, redacting PII, handle numbers, format dates and times, or interact with local storage, this library has you covered.

---

# OpenAI Utils

Tools and functions helpful while interacting with an Large Language Model like OpenAI compatable APIs


## Prompt

The `Prompt` class provides a straightforward and flexible way to define prompt messages for interaction with OpenAI. This class, along with its derivatives `SystemPrompt`, `AssistantPrompt`, and `UserPrompt`, allows you to construct a variety of prompts, from simple messages to complex multi-line instructions. With built-in support for variables, you can dynamically tailor prompts to fit specific contexts. Whether you're crafting a basic query or a detailed, rule-based prompt, the `Prompt` class streamlines the process, making it easy to send structured messages to OpenAI for chat completions.

```typescript

import { SystemPrompt, UserPrompt } from "happydata-utils";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "sk-4442•••"
})

let systemPrompt = new SystemPrompt("You're a good joke teller");
let userPrompt = new UserPrompt("Tell me a joke about {topic}");
let messages = [systemPrompt, userPrompt.variables({topic: "Coder and the Rabbit"})]

// OpenAI example
let res = await openai.chat.completions.create({
  messages: messages,
  model: "gpt-4o"
})

console.log(res.choices[0].message.content);

```
```typescript
// Basic Example
let systemPrompt = new SystemPrompt("You're a joke teller");
let userPrompt = new UserPrompt("Tell me a joke about dogs and cats");
let messages = [systemPrompt, userPrompt] // pass to chat completion

// Multiple line Prompts (using array of string)
let systemPrompt = new SystemPrompt([
  `You're a joke teller.`,
  `Rules:`,
  `- You always talk like an mid-century Englishman`,
  `- You are a fan of the Ghostbusters franchise`,
])

```

## Redactor
Redact PII with Mock PII, tries to avoid sending sensitive data to a Large Language Model (LLM). Once the data has been processed, you can then rehydrate the PII when the response comes back from the LLM.

Redactor will user Regular Expressions to TRY and find the following: Phone number, email, address, social security number, license, credit card, passport, International Bank Account Number, international phone number.

**Note: PII redaction is NOT guaranteed. USE AT YOUR OWN RISK**

```typescript
import { redactor } from "happydata-utils";
const redactor = new Redactor();
const piiString = "Hi there my email is frank@frank.com and my phone is 324-324-4456";

// Swap PII for Mock PII
const redactedString = redactor.redact(piiString)
console.log(redactedString); // Hi there my email is axvontx37@idljxyf.com and my phone is 905-003-6053

const rehydrated = redactor.refill(redactedString);
console.log(rehydrated); // Hi there my email is frank@frank.com and my phone is 324-324-4456
```

# Numbers

## Ordinal (th, rd, nd)
The `ordinal` function provides a simple way to convert numbers into their ordinal form, such as "1st", "2nd", "3rd", and so on. This utility function ensures that numbers are correctly formatted with their appropriate suffix.

```js
import { ordinal } from "happydata-utils";

console.log(ordinal(32)); // 32nd
console.log(ordinal(59)); // 59th
```

## Parse Number

Convert a string into a number/float depending on the number.

```js
import { parseNumber } from "happydata-utils";
console.log(parseNumber('-123')) //-123;
console.log(parseNumber('-123.45')) //-123.45;
```

## Dollar Format

Turn a number in to localized dollar format

```js
import { dollarFormat } from "happydata-utils"
// Default USD
console.log(dollarFormat(1000)) // $1,000 USD
// Specific Local and Currency
console.log(dollarFormat(-1234.56, 'de-DE', 'EUR')) // '-1.234,56 €'
```

# String

## Slugify

Takes a string and generates a url slug

```js
import { slugify } from "happydata-utils";
console.log(slugify('---Hello World---')); // hello-world
```

## String to Color

Generate a consistent hex color for a string.

```typescript
import { stringToColor } from "happydata-utils";

console.log(stringToColor("sameUserName")) // #7d66a1
console.log(stringToColor("sameUserName")) // #7d66a1
console.log(stringToColor("sally")) // #cb5a81
console.log(stringToColor("frank")) // #8d9db9
console.log(stringToColor("bob")) // #a57e27
```

## Extract JSON

Extracting JSON from text that includes additional intro and outro content can be challenging. The `extractJSON` function simplifies this process, reliably extracting JSON objects or arrays from a string, ensuring you can work with clean data.

```typescript
import { extractJSON } from "happydata-utils";

const testString = `Here's some JSON: { "name": "Bob" } \n Do you like it?`;
console.log(extractJSON(testString)); // Output: { "name": "Bob" }

const arrayTest = `Here's some JSON: [{ "name": "Bob" }, { "name": "Sally" }] \n Do you like it?`;
console.log(extractJSON(arrayTest, "array")); // Output: [{ "name": "Bob" }, { "name": "Sally" }]
```

## Extract URLs

Easily extract all URLs from a given string and return them as an array using the `extractUrls` function. This utility simplifies the process of identifying and isolating web addresses embedded within text.

```typescript
import { extractUrls } from "happydata-utils";

const testString = `Want some links? https://google.com http://home.com`;

console.log(extractUrls(testString)); // Output: [ "https://google.com", "http://home.com" ]
```

## toCase

Change the casing of a string

```js
import { toCase } from 'happydata-utils';

const titleCase = toCase.title("example_string");
const snakeCase = toCase.snake("Example String");
const lowerCase = toCase.lower("Example String");
const upperCase = toCase.upper("Example String");
const screamingSnakeCase = toCase.screamingSnake("Example String");
const trainCase = toCase.train("example string");
const dotCase = toCase.dot("Example String");
const pascalCase = toCase.pascal("example string");
const camelCase = toCase.camel("example string");

console.log(titleCase);         // Output: "Example String"
console.log(snakeCase);         // Output: "example_string"
console.log(lowerCase);         // Output: "example string"
console.log(upperCase);         // Output: "EXAMPLE STRING"
console.log(screamingSnakeCase);// Output: "EXAMPLE_STRING"
console.log(trainCase);         // Output: "Example-String"
console.log(dotCase);           // Output: "example.string"
console.log(pascalCase);        // Output: "ExampleString"
console.log(camelCase);         // Output: "exampleString"
```

# Random Generation

Generate a random number or a random string

## Random Number

```js
  import { random } from "happydata-utils";
  console.log(random()); // 982267822400
```

## Random String

```js
  import { randomString } from "happydata-utils";
  console.log(randomString()); // meiPKkNCly
```

## Random Range

```js
  import { randomRange } from "happydata-utils";
  console.log(randomRange(1,1000)); // 435
```



# Wait

Creates a promise that resolves after a specified number of milliseconds. This function can be used to introduce delays in asynchronous operations.

```js
import { wait } from "happydata-utils"
await wait(100) // waits 100ms
```

# Date / Time

## Date Format
Generates a localized version of a date.

```typescript
import { dateFormat } from "happydata-utils";

// Using default user Local
console.log(dateFormat(new Date(), 'tiny'));   // "06/28";
console.log(dateFormat(new Date(), 'small'));  // "06/28/2024";
console.log(dateFormat(new Date(), 'base'));   // "Jun 28, 2024";
console.log(dateFormat(new Date(), 'large'));  // "Friday, June 28, 2024";

// Specifying a Local
console.log(dateFormat(date, 'tiny', "en-GB")); // "28/06"
console.log(dateFormat(date, 'small', "en-GB")); // "28/06/2024"
console.log(dateFormat(date, 'base', "en-GB")); // "28 Jun 2024"
console.log(dateFormat(date, 'large', "en-GB")); // "Friday 28 June 2024"
```

## Time Format

Generates a localized version of the time

```typescript
import { timeFormat } from "happydata-utils";

console.log(timeFormat(new Date(), "short")) // 6pm
console.log(timeFormat(new Date(), "medium")) // 6:37pm
console.log(timeFormat(new Date(), "long")) // 6:37 PM
console.log(timeFormat(new Date(), "full")) // 6:37:16 PM EDT
```

## Seconds to String

Convert a number of seconds into a string of h m s

```typescript
import { secondsToString } from "happydata-utils";

console.log(secondsToString(12332));    // 3h 25m 32s
console.log(secondsToString(105));      // 1m 45s
console.log(secondsToString(2030560));  // 564h 2m 40s
console.log(secondsToString(400));      // 6m 40s
```

# Hyperstore

The `Hyperstore` class provides a simple interface to interact with IndexedDB for storing and retrieving key-value pairs. It encapsulates the database initialization and transaction management, allowing easy use of IndexedDB without dealing with its complexities directly.

Same methods as localStorage but requires promises for setting and getting values. Why use this over localStorage? It's just more secure, faster, and does not block the web like localStorage does, as well as no storage restrictions like LocalStorage.

```typescript
const store = new Hyperstore('myDatabase');

await store.setItem("myKey", { data: "Hi there!" });
const data = await store.getItem("myKey); // { data: "Hi there!" }
```

# Debounce

Debounce a function to reduce the number of times it gets called.

```typescript
import { debounce } from "happydata-utils"
const handleResize = debounce(() => {
    console.log('Window resized');
}, 200);

window.addEventListener('resize', handleResize);

```

# Is...?

Quickly verify the type of a variable with the `is` utility. This comprehensive set of functions allows you to quickly check if a variable is of a specific type, ensuring your code handles data correctly and efficiently.

```typescript
console.log(is.array([])); // true
console.log(is.date(new Date())); // true
console.log(is.error(new Error())); // true
console.log(is.function(() => {})); // true
console.log(is.nan(NaN)); // true
console.log(is.null(null)); // true
console.log(is.number(123)); // true
console.log(is.object({})); // true
console.log(is.json('{"valid": "json"}')); // true
console.log(is.regexp(/abc/)); // true
console.log(is.string('string')); // true
console.log(is.char('a')); // true
console.log(is.undefined(undefined)); // true
console.log(is.existy('value')); // true
console.log(is.truthy(true)); // true
console.log(is.url('http://example.com')); // true
console.log(is.email('bob.stuff@bobbob.com')); // true
console.log(is.creditCard('4111111111111111')); // true
console.log(is.alphaNumeric('abc123')); // true
console.log(is.timeString('23:59')); // true
console.log(is.usZipCode('12345')); // true
console.log(is.caPostalCode('K1A 0B1')); // true
console.log(is.ukPostCode('EC1A 1BB')); // true
console.log(is.nanpPhone('1234567890')); // true
console.log(is.eppPhone('+1.1234567890')); // true
console.log(is.socialSecurityNumber('123-45-6789')); // true
console.log(is.hexColor('#FFFFFF')); // true
console.log(is.ip('127.0.0.1')); // true
console.log(is.ipv4('127.0.0.1')); // true
console.log(is.ipv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')); // true
console.log(is.even(2)); // true
console.log(is.odd(3)); // true
console.log(is.positive(1)); // true
console.log(is.negative(-1)); // true
console.log(is.above(10, 5)); // true
console.log(is.under(5, 10)); // true
console.log(is.within(5, 1, 10)); // true
console.log(is.decimal(1.5)); // true
console.log(is.integer(2)); // true
console.log(is.finite(100)); // true
console.log(is.infinite(Infinity)); // true
console.log(is.Time(new Date())); // true

```

# Browser Only

## Open Email

The `openEmail` function allows you to effortlessly open a new email in the user's default email client. By simply providing the recipient's email address, the subject, and the body of the email, this function streamlines the process of composing and sending emails directly from your application.

```js
import { openEmail } from "./index";

openEmail({
  to: "bob@bob.com",
  subject: "Open this email!",
  body: "My friend! How are you?"
});
```

## Copy to Clipboard

Easily copy text to the user's clipboard using the `copyToClipboard` function. This function takes a string as input and attempts to copy it to the clipboard, returning a boolean value indicating success or failure.

```typescript
import { copyToClipboard } from "happydata-utils";

const str = `I've been copied! ${new Date().toJSON()}`;
const copied = copyToClipboard(str); // Returns true if successful, false otherwise
```

# Additional External Resources for LLM Interactions

### Zod
Zod and ZodToJSONSchema provide a powerful combination for defining the exact JSON structure you want to receive from a Language Learning Model (LLM). By describing your desired results as a Zod schema and converting it to a JSON Schema, you can effectively communicate the required format to the LLM, ensuring accurate and structured responses.

- [Zod](https://www.npmjs.com/package/zod) - TypeScript-first schema validation with static type inference.
- [ZodToJSONSchema](https://www.npmjs.com/package/zod-to-json-schema) - Convert Zod schemas to JSON Schema.
- [OpenAI](https://www.npmjs.com/package/openai) - OpenAI Rest wrapper

Using these tools together streamlines the process of defining and validating JSON structures, enhancing the reliability and precision of your LLM interactions.

```typescript
import { extractJSON, SystemPrompt, UserPrompt } from "happydata-utils";
import z from "zod";
import OpenAI from "openai";
import zodToJsonSchema from "zod-to-json-schema";

const openai = new OpenAI({
  apiKey: "sk-444..."
})

// Create the OutputSchema
const OutputSchema = z.object({
  title: z.string().max(50).describe("The Title of the Book"),
  summary: z.string().max(600).describe("Summary of the book"),
  chapters: z.array(z.object({
      title: z.string().describe("Title of the chapter"),
      summary: z.string().max(100).describe("Short summary of the chapter")
  })).describe("Chapters of the Book").max(5)
})

// Extract a type from the Output Schema
type TOutput = z.infer<typeof OutputSchema>;

// Extract a stringified JSONSchema from the output
const OutputJSONSchema = JSON.stringify(zodToJsonSchema(OutputSchema));

const messages = [
  new SystemPrompt([
    `You are a Book Idea Generator`,
    `You are creative, whity and helpful`,
    `You generate brilliant and creative title, summary and chapter summaries.`,
    `You will be given a topic, and you will use the provided schema to understand the data required, and output format.`,
    `JSON Schema for the output: ${OutputJSONSchema}`
  ]),
  new UserPrompt("Topic: Teaching the world to skip, feel like a kid again")
]
const answer = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages,
  response_format: { "type": "json_object" }
})

const bookStructure:TOutput = extractJSON(answer.choices[0].message.content || "") as TOutput;
console.log(bookStructure);

```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

