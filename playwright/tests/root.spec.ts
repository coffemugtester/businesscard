import { test, expect } from '@playwright/test';

test('root path displays hello template', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Expect the title to be "Hello"
  await expect(page).toHaveTitle('Hello');

  // Expect the profile card container to be visible
  await expect(page.locator('.container')).toBeVisible();
});

test('root path displays profile information', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Verify name is displayed
  await expect(page.locator('.name')).toHaveText('Daniel Alfaro');

  // Verify title is displayed
  await expect(page.locator('.title')).toHaveText('Full Stack Developer');

  // Verify location is displayed
  await expect(page.locator('.location')).toHaveText('Germany');
});

test('root path has avatar', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // Verify avatar is present
  await expect(page.locator('.avatar')).toBeVisible();

  // Verify avatar contains an image
  await expect(page.locator('.avatar img')).toBeVisible();
});
