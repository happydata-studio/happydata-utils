export type DataTable = {
  headers: string[];
  rows: string[][];
};

export function extractTables(markdown: string): DataTable[] {
  const tables: DataTable[] = [];
  const lines = markdown.split('\n');

  let currentTable: DataTable | null = null;
  let inTable = false;
  let headerCount = 0;

  for (const line of lines) {
    if (line.startsWith('|')) {
      const cells = line.split('|').map(cell => cell.trim());

      if (!inTable) {
        // Start of a new table
        inTable = true;
        headerCount = cells.length - 2;
        currentTable = {
          headers: cells.slice(1, -1),
          rows: []
        };
      } else {
        // Row of an existing table
        if (currentTable && line.includes('-')) {
          // Separator row, skip it
          continue;
        }

        if (currentTable) {
          const rowCells = cells.slice(1, -1);
          // Pad the row with empty cells if necessary
          const paddedCells = rowCells.concat(Array(headerCount - rowCells.length).fill(''));
          currentTable.rows.push(paddedCells);
        }
      }
    } else {
      // End of a table
      if (inTable && currentTable) {
        tables.push(currentTable);
        currentTable = null;
        inTable = false;
      }
    }
  }

  // Add the last table if it exists
  if (inTable && currentTable) {
    tables.push(currentTable);
  }

  return tables;
}