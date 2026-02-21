import { test, expect } from "@playwright/test";
import { setContent } from "./helpers";

test.describe("Reset editor", () => {
  test("dismissing confirm keeps the content", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await setContent(page, "custom content");

    page.once("dialog", async (dialog) => {
      expect(dialog.type()).toBe("confirm");
      await dialog.dismiss();
    });

    await page.click(".dropdown__button");
    await page.waitForTimeout(200);
    await page.click('[aria-label="Reset editor"]');
    await page.waitForTimeout(500);

    const stored = await page.evaluate(() =>
      localStorage.getItem("markdown")
    );
    expect(stored).toBe("custom content");
  });

  test("accepting confirm restores default content", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await setContent(page, "custom content");

    page.once("dialog", async (dialog) => {
      await dialog.accept();
    });

    await page.click(".dropdown__button");
    await page.waitForTimeout(200);
    await page.click('[aria-label="Reset editor"]');
    await page.waitForTimeout(800);

    const stored = await page.evaluate(() =>
      localStorage.getItem("markdown")
    );
    expect(stored).not.toBe("custom content");
    expect((stored || "").length).toBeGreaterThan(0);
  });
});
