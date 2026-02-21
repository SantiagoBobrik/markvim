import { test, expect } from "@playwright/test";
import { vimClearAndInsert } from "./helpers";

test.describe("localStorage persistence", () => {
  test("saves content to localStorage after debounce", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await vimClearAndInsert(page);
    await page.keyboard.type("persist this content", { delay: 20 });
    await page.waitForTimeout(800);

    const stored = await page.evaluate(() =>
      localStorage.getItem("markdown")
    );
    expect(stored).toBe("persist this content");
  });

  test("content persists after reload", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await vimClearAndInsert(page);
    await page.keyboard.type("persist this content", { delay: 20 });
    await page.waitForTimeout(800);

    await page.reload();
    await page.waitForSelector(".editor");
    await page.waitForTimeout(600);

    const cmText = await page.$eval(
      ".cm-content",
      (el) => el.textContent || ""
    );
    expect(cmText).toContain("persist this content");
  });
});
