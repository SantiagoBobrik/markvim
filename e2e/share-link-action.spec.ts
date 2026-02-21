import { test, expect } from "@playwright/test";
import { setContent } from "./helpers";

test.describe("Share link action", () => {
  test("copies a valid share URL to clipboard", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await setContent(page, "share me");

    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    await page.click('[aria-label="Copy share link"]');
    await page.waitForTimeout(300);

    const clipboardContent = await page.evaluate(() =>
      navigator.clipboard.readText()
    );
    expect(clipboardContent).toContain("?markdown=");

    const encoded = clipboardContent.split("?markdown=")[1];
    const decoded = Buffer.from(encoded, "base64").toString();
    expect(decoded).toBe("share me");
  });

  test("shows alert when document is too large for URL", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");

    await setContent(page, "x".repeat(3000));

    let alertMsg = "";
    page.on("dialog", async (dialog) => {
      alertMsg = dialog.message();
      await dialog.accept();
    });

    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    await page.click('[aria-label="Copy share link"]');
    await page.waitForTimeout(500);

    expect(alertMsg).toContain("too large");
  });
});
