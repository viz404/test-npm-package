import { QuestSDK } from "..";

const config = {
    apiKey: "alsklaksa",
    apiSecret: "asalksla",
    userId: "akalks",
}

const sdk = new QuestSDK(config);

describe("Test User module", () => {
    test("get user info", () => {
        const data = sdk.meta.user.getInfo();
        expect(typeof data.apiKey).toBe("string");
        expect(data.apiKey.length).toBeGreaterThan(100);
    })
})