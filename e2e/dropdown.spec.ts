import { test, expect } from "@playwright/test";

test.describe("Dropdown menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".dropdown__button");
  });

  test("is closed initially with aria-expanded=false", async ({ page }) => {
    await expect(page.locator(".dropdown__button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  test("opens on click with aria-expanded=true", async ({ page }) => {
    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    await expect(page.locator(".dropdown__button")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  test("shows all 4 menu items", async ({ page }) => {
    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    const items = await page.$$eval('[role="menuitem"]', (els) =>
      els.map((e) => (e.textContent || "").trim())
    );
    expect(items).toHaveLength(4);
    expect(items).toContain("Download file");
    expect(items).toContain("Copy to clipboard");
    expect(items).toContain("Copy share link");
    expect(items).toContain("Reset editor");
  });

  test("closes with Escape key", async ({ page }) => {
    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    await page.keyboard.press("Escape");
    await page.waitForTimeout(200);

    await expect(page.locator(".dropdown__button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  test("closes when clicking outside", async ({ page }) => {
    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    await page.click(".logo-container");
    await page.waitForTimeout(200);

    await expect(page.locator(".dropdown__button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  test("has correct ARIA attributes", async ({ page }) => {
    await expect(page.locator("#dropdown-menu")).toHaveAttribute(
      "role",
      "menu"
    );
    await expect(page.locator(".dropdown__button")).toHaveAttribute(
      "aria-controls",
      "dropdown-menu"
    );
  });
});
