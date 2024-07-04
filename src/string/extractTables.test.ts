import { DataTable, extractTables } from './extractTables'; // Adjust the import path as necessary

describe('extractTables', () => {
    it('should extract tables from markdown', () => {
        const markdown = `
# Sample Markdown

Here is a sample table:

| Name      | Age | Occupation   |
|-----------|-----|--------------|
| Alice     | 30  | Engineer     |
| Bob       | 25  | Designer     |
| Charlie   | 35  | Teacher      |

This is some other content.

Another table:

| Product   | Price | Quantity |
|-----------|-------|----------|
| Apples    | $1.00 | 10       |
| Oranges   | $0.75 | 5        |
| Bananas   | $0.50 |

Another row?`;

        const expectedOutput = [
            {
                headers: ['Name', 'Age', 'Occupation'],
                rows: [
                    ['Alice', '30', 'Engineer'],
                    ['Bob', '25', 'Designer'],
                    ['Charlie', '35', 'Teacher']
                ]
            },
            {
                headers: ['Product', 'Price', 'Quantity'],
                rows: [
                    ['Apples', '$1.00', '10'],
                    ['Oranges', '$0.75', '5'],
                    ['Bananas', '$0.50', '']
                ]
            }
        ];

        const result = extractTables(markdown);
        expect(result).toEqual(expectedOutput);
    });

    it('should handle empty markdown string', () => {
        const markdown = ``;
        const expectedOutput: DataTable[] = [];
        const result = extractTables(markdown);
        expect(result).toEqual(expectedOutput);
    });

    it('should handle markdown with no tables', () => {
        const markdown = `
# Sample Markdown

This is just some text without any tables.
        `;
        const expectedOutput: DataTable[] = [];
        const result = extractTables(markdown);
        expect(result).toEqual(expectedOutput);
    });

    it('should handle tables with varying column counts', () => {
        const markdown = `
# Sample Markdown

| Name      | Age |
|-----------|-----|
| Alice     | 30  |
| Bob       | 25  |
| Charlie   | 35  |

| Product   | Price | Quantity | In Stock |
|-----------|-------|----------|----------|
| Apples    | $1.00 | 10       | Yes      |
| Oranges   | $0.75 | 5        | No       |
| Bananas   | $0.50 | 20       | Yes      |
        `;

        const expectedOutput = [
            {
                headers: ['Name', 'Age'],
                rows: [
                    ['Alice', '30'],
                    ['Bob', '25'],
                    ['Charlie', '35']
                ]
            },
            {
                headers: ['Product', 'Price', 'Quantity', 'In Stock'],
                rows: [
                    ['Apples', '$1.00', '10', 'Yes'],
                    ['Oranges', '$0.75', '5', 'No'],
                    ['Bananas', '$0.50', '20', 'Yes']
                ]
            }
        ];

        const result = extractTables(markdown);
        expect(result).toEqual(expectedOutput);
    });

    it('should handle tables with missing cells', () => {
        const markdown = `
# Sample Markdown

| Name      | Age | Occupation   |
|-----------|-----|--------------|
| Alice     | 30  | Engineer     |
| Bob       |     | Designer     |
| Charlie   | 35  |
        `;

        const expectedOutput = [
            {
                headers: ['Name', 'Age', 'Occupation'],
                rows: [
                    ['Alice', '30', 'Engineer'],
                    ['Bob', '', 'Designer'],
                    ['Charlie', '35', '']
                ]
            }
        ];

        const result = extractTables(markdown);
        expect(result).toEqual(expectedOutput);
    });
});
