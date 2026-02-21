import { test, expect } from "@playwright/test";

test.describe("Share link (URL params)", () => {
  test("accepts confirm and restores content from URL", async ({ page }) => {
    const encoded = Buffer.from("# Shared Content").toString("base64");

    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("confirm");
      await dialog.accept();
    });

    await page.goto(`/?markdown=${encoded}`);
    await page.waitForSelector(".editor");
    await page.waitForTimeout(500);

    const stored = await page.evaluate(() =>
      localStorage.getItem("markdown")
    );
    expect(stored).toBe("# Shared Content");
  });

  test("cleans query param from URL after action", async ({ page }) => {
    const encoded = Buffer.from("# Content").toString("base64");

    page.on("dialog", async (dialog) => {
      await dialog.accept();
    });

    await page.goto(`/?markdown=${encoded}`);
    await page.waitForSelector(".editor");
    await page.waitForTimeout(500);

    expect(page.url()).not.toContain("markdown=");
  });

  test("dismissing confirm does not replace content", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() =>
      localStorage.setItem("markdown", "original")
    );

    const encoded = Buffer.from("# Rejected").toString("base64");
    page.on("dialog", async (dialog) => {
      await dialog.dismiss();
    });

    await page.goto(`/?markdown=${encoded}`);
    await page.waitForSelector(".editor");
    await page.waitForTimeout(500);

    const stored = await page.evaluate(() =>
      localStorage.getItem("markdown")
    );
    expect(stored).toBe("original");
  });
});
