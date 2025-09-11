import { test, expect } from '@playwright/test';

test('Login works', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'user1');
  await page.fill('#password', 'Password123');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL('/dashboard');
});
