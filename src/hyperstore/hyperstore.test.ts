import 'fake-indexeddb/auto';

// hyperstore.test.ts

import { Hyperstore } from './hyperstore.class';

describe('Hyperstore', () => {
  const dbName = 'test-db';
  let store: Hyperstore;

  beforeEach(() => {
    store = new Hyperstore(dbName);
    indexedDB.deleteDatabase(dbName); // Clean up the database before each test
  });

  test('should initialize the database', async () => {
    const db = await (store as any).init();
    expect(db).toBeDefined();
    expect(db.name).toBe(dbName);
  });

  test('should store an item in the database', async () => {
    const key = 'testKey';
    const value = { data: 'testValue' };

    await store.setItem(key, value);
    const result = await store.getItem(key);

    expect(result).toEqual(value);
  });

  test('should retrieve an item from the database', async () => {
    const key = 'testKey';
    const value = { data: 'testValue' };

    await store.setItem(key, value);
    const result = await store.getItem(key);

    expect(result).toEqual(value);
  });

  test('should handle errors during storing an item', async () => {
    const key = 'testKey';
    const value = { data: 'testValue' };

    jest.spyOn((store as any), 'init').mockRejectedValue(new Error('Database error'));

    await expect(store.setItem(key, value)).rejects.toThrow('Database error');
  });

  test('should handle errors during retrieving an item', async () => {
    const key = 'testKey';

    jest.spyOn((store as any), 'init').mockRejectedValue(new Error('Database error'));

    await expect(store.getItem(key)).rejects.toThrow('Database error');
  });
});
