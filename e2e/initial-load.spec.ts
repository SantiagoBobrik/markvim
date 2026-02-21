import { test, expect } from "@playwright/test";

test.describe("Initial load", () => {
  test("renders editor, preview, logo, headers and split layout", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await expect(page.locator(".editor")).toBeVisible();
    await expect(page.locator(".markdown")).toBeVisible();
    await expect(page.locator(".logo-container")).toBeVisible();
    await expect(page.locator(".split")).toBeVisible();

    const headers = await page.$$eval(".split-header", (els) =>
      els.map((e) => e.textContent)
    );
    expect(headers).toContain("MARKDOWN");
    expect(headers).toContain("PREVIEW");
  });

  test("preview shows default content", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    const previewText = await page.$eval(
      ".markdown",
      (el) => el.textContent || ""
    );
    expect(previewText.length).toBeGreaterThan(0);
  });
});
