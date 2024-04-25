import { expect, test } from '@playwright/test';

test('Toggles Dark Theme', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('html')).toHaveClass('light');
  await page.locator('form').getByRole('button').click();
  await expect(page.locator('html')).toHaveClass('dark');
});
