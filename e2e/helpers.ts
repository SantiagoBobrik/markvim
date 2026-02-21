import { Page } from "@playwright/test";

/**
 * Clear CodeMirror content using Vim commands and enter insert mode.
 * Escape → gg (go to top) → dG (delete to end) → i (insert mode)
 */
export async function vimClearAndInsert(page: Page) {
  const cm = page.locator(".cm-content");
  await cm.click();
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);
  await page.keyboard.type("ggdG", { delay: 50 });
  await page.waitForTimeout(100);
  await page.keyboard.press("i");
  await page.waitForTimeout(100);
}

/**
 * Set editor content programmatically via localStorage + reload.
 */
export async function setContent(page: Page, content: string) {
  await page.evaluate((c) => localStorage.setItem("markdown", c), content);
  await page.reload();
  await page.waitForSelector(".editor");
  await page.waitForTimeout(300);
}
