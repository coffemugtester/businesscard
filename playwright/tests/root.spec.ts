import { test, expect } from '@playwright/test';

test('root path displays hello template', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Expect the title to be "Hello"
  await expect(page).toHaveTitle('Hello');

  // Expect the message to be displayed
  await expect(page.locator('.message')).toHaveText('hello world!');
});

test('root path has gray box', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Verify gray box is present
  await expect(page.locator('.gray-box')).toBeVisible();
});
