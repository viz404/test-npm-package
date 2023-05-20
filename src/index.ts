import Meta from "./Meta";
import { sdkConfig } from "./types/common";

export default class QuestSDK {
  meta: Meta;

  constructor(config: sdkConfig) {
    this.meta = new Meta(config);
  }
}
