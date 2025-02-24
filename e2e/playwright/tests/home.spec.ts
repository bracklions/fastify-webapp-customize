import { test, expect } from '@playwright/test';
import exp from 'constants';

test('example.comにアクセスする', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
});

test('ページの表示テスト', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page).toHaveTitle(/商品一覧/);
  // await expect(page.locator('body')).toContainText(//);
});
