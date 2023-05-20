import { sdkConfig } from "../types/common";

export default class User {
  private apiKey: string;
  private apiSecret: string;
  private userId?: string;

  constructor(config: sdkConfig) {
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret;
    this.userId = config.userId;
  }

  getInfo() {
    const apiKey = this.apiKey;
    const apiSecret = this.apiSecret;
    const userId = this.userId;

    return { apiKey, apiSecret, userId };
  }
}
