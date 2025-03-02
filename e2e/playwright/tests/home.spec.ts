import { test, expect } from '@playwright/test';
// import exp from 'constants';

// test('example.comにアクセスする', async ({ page }) => {
//   await page.goto('https://example.com');
//   await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
//   await expect(page.locator('body')).toContainText(//);
// });

test('Webサイトを開きログインする', async ({ page }) => {
  // await page.goto('http://localhost:8080');
  await page.goto('/');
  await expect(page).toHaveTitle(/商品一覧/);
  await page.click('text=ログインする');
  await page.fill('input[name="username"]', 'user1');
  await page.fill('input[name="password"]', 'super-strong-passphrase');
  await page.click('input[value="ログイン"]');
  await expect(page.locator(`text=user1 さん`)).toBeVisible();
});

// test('Webサイトを開きログインする2', async ({ page }) => {
//   await page.goto('http://localhost:8080');
//   await expect(page).toHaveTitle(/商品一覧/);
//   await page.click('text=ログインする');
//   await page.fill('input[name="username"]', 'user1');
//   await page.fill('input[name="password"]', 'super-strong-passphrase');
//   await page.click('input[value="ログイン"]');
//   await expect(page.locator(`text=user1 さん`)).toBeVisible();
// });
