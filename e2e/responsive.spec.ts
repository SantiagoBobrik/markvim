import { test, expect } from "@playwright/test";

test.describe("Responsive layout", () => {
  test("mobile viewport uses column layout", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await page.waitForSelector(".editor");

    const splitDir = await page.$eval(".split", (el) =>
      getComputedStyle(el).flexDirection
    );
    expect(splitDir).toBe("column");
  });

  test("desktop viewport uses row layout", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page.waitForSelector(".editor");

    const splitDir = await page.$eval(".split", (el) =>
      getComputedStyle(el).flexDirection
    );
    expect(splitDir).toBe("row");
  });
});
