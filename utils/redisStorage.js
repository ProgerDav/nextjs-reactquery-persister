import Redis from "ioredis";

class RedisStorage {
  static getInstance() {
    const instance = new Redis({
      password: process.env.REDIS_PASSWORD,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    });

    return new RedisStorage(instance);
  }

  constructor(redis) {
    this.redis = redis;
  }

  async setItem(key, value) {
    await this.redis.set(key, value);
  }

  async getItem(key) {
    return await this.redis.get(key);
  }

  async removeItem(key) {
    await this.redis.del(key);
  }
}

export default RedisStorage;
