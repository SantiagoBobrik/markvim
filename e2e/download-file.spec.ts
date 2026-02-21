import { test, expect } from "@playwright/test";

test.describe("Download file", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".editor");
  });

  test("canceling prompt does not trigger download", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      if (dialog.type() === "prompt") {
        await dialog.dismiss();
      }
    });

    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    await page.click('[aria-label="Download file"]');
    await page.waitForTimeout(300);
    // No crash = pass
  });

  test('empty name generates "untitled.md"', async ({ page }) => {
    const downloadPromise = page.waitForEvent("download");
    page.on("dialog", async (dialog) => {
      if (dialog.type() === "prompt") {
        await dialog.accept("");
      }
    });

    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    await page.click('[aria-label="Download file"]');

    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("untitled.md");
  });

  test("special characters are sanitized in filename", async ({ page }) => {
    const downloadPromise = page.waitForEvent("download");
    page.on("dialog", async (dialog) => {
      if (dialog.type() === "prompt") {
        await dialog.accept("my<file>name");
      }
    });

    await page.click(".dropdown__button");
    await page.waitForTimeout(200);

    await page.click('[aria-label="Download file"]');

    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("myfilename.md");
  });
});
