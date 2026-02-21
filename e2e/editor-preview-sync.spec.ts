import { test, expect } from "@playwright/test";
import { vimClearAndInsert } from "./helpers";

test.describe("Editor → Preview sync", () => {
  test("heading renders as h1 in preview", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await vimClearAndInsert(page);
    await page.keyboard.type("# Test Heading", { delay: 20 });
    await page.waitForTimeout(800);

    const h1 = page.locator(".markdown h1");
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText("Test Heading");
  });

  test("bold text renders as strong in preview", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await vimClearAndInsert(page);
    await page.keyboard.type("**bold text**", { delay: 20 });
    await page.waitForTimeout(800);

    await expect(page.locator(".markdown strong")).toBeVisible();
  });
});
