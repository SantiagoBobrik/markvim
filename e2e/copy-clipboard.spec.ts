import { test, expect } from "@playwright/test";
import { setContent } from "./helpers";

test.describe("Copy to clipboard", () => {
  test("shows Copied! label and reverts after timeout", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await setContent(page, "clipboard test");

    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    const copyBtn = page.locator('[aria-label="Copy to clipboard"]');
    await copyBtn.click();
    await page.waitForTimeout(200);

    await expect(copyBtn.locator("span")).toHaveText("Copied!");

    await page.waitForTimeout(1200);

    await expect(copyBtn.locator("span")).toHaveText("Copy to clipboard");
  });
});
