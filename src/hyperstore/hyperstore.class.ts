export class Hyperstore {
  // Private member to store the database name
  private _dbName: string;
  // Private member to store the IDBDatabase instance, initially null
  private _db: IDBDatabase | null = null;

  // Constructor to initialize the database name
  constructor(dbName: string) {
    this._dbName = dbName;
  }

  // Private method to initialize the IndexedDB database
  private async init(): Promise<IDBDatabase> {
    // Return the existing database instance if already initialized
    if (this._db) return this._db;

    // Create a new promise to handle the database opening process
    return new Promise((resolve, reject) => {
      // Open the IndexedDB database with the specified name and version
      const openRequest = indexedDB.open(this._dbName, 1);

      // Event handler for database upgrade needed
      openRequest.onupgradeneeded = (event) => {
        const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
        // Create an object store if it doesn't already exist
        if (!db.objectStoreNames.contains(this._dbName)) {
          db.createObjectStore(this._dbName);
        }
      };

      // Event handler for successful database opening
      openRequest.onsuccess = () => {
        this._db = openRequest.result;
        resolve(this._db);
      };

      // Event handler for database opening error
      openRequest.onerror = () => reject(openRequest.error);
    });
  }

  // Public method to set an item in the database
  public async setItem(key: string, value: any): Promise<void> {
    // Initialize the database and get the instance
    const db = await this.init();
    // Create a new promise to handle the transaction process
    return new Promise((resolve, reject) => {
      // Create a readwrite transaction on the object store
      const transaction = db.transaction(this._dbName, "readwrite");
      const store = transaction.objectStore(this._dbName);
      // Put the value in the object store with the specified key
      const request = store.put(value, key);

      // Event handler for successful put operation
      request.onsuccess = () => resolve();
      // Event handler for put operation error
      request.onerror = () => reject(request.error);
    });
  }

  // Public method to get an item from the database
  public async getItem(key: string): Promise<any> {
    // Initialize the database and get the instance
    const db = await this.init();
    // Create a new promise to handle the transaction process
    return new Promise((resolve, reject) => {
      // Create a readonly transaction on the object store
      const transaction = db.transaction(this._dbName, "readonly");
      const store = transaction.objectStore(this._dbName);
      // Get the value from the object store with the specified key
      const request = store.get(key);

      // Event handler for successful get operation
      request.onsuccess = () => resolve(request.result);
      // Event handler for get operation error
      request.onerror = () => reject(request.error);
    });
  }
}
