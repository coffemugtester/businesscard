import { test, expect } from '@playwright/test';

test('root path displays hello template', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Expect the title to be "Hello"
  await expect(page).toHaveTitle('Hello');

  // Expect the message to be displayed
  await expect(page.locator('.message')).toHaveText('hello test world!');

  // Expect the second message to be displayed
  await expect(page.locator('.message-2')).toHaveText('Test World!');
});

test('root path has gray boxes', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Verify both gray boxes are present
  await expect(page.locator('.gray-box')).toBeVisible();
  await expect(page.locator('.gray-box-2')).toBeVisible();
});
