// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a);
// a.splice(3, 1);
// console.log(a);

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.orderingList = [];
  }

  get(key) {
    if (this.cache.has(key)) {
      // if the key exists, update its position in the following list (recently used)
      this.updateOrderingList(key);

      return this.cache.get(key);
    }

    return -1; // key not found
  }

  put(key, value) {
    if (this.cache.size >= this.capacity) {
      // if the cache is full, evict the leaset recently used item
      const lruKey = this.orderingList.shift();
      this.cache.delete(lruKey);
    }

    // add the new key-value pair to the cache and update its position in the orderList
    this.cache.set(key, value);
    this.updateOrderingList(key);
    console.log(11);
  }

  updateOrderingList(key) {
    // Remove the key from its current position in the ordering list (if it exists)
    const index = this.orderingList.indexOf(key);
    if (index !== -1) {
      this.orderingList.splice(index, 1);
    }

    // Add the key to the end of the ordering list (recently used)
    this.orderingList.push(key);
  }
}

// Example usage:
const lruCache = new LRUCache(3);

lruCache.put(1, 1);
lruCache.put(2, 2);
lruCache.put(3, 3);

console.log(lruCache.get(2));
console.log(lruCache.get(1));

lruCache.put(4, 4); // Evicts key 3 (leaset recently used)
console.log(lruCache.get(3)); // Output: -1 (key 3 is not in the cache)

console.log(lruCache.get(1)); // Output: 1 (move key 1 to the end)
console.log(lruCache.get(4)); // Output: 4 (move key 4 to the end)
