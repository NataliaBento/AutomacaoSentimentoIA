import { test, expect} from '@playwright/test';

test('abrir tela de login', async ({ page }) => {

    await page.goto('/login');

    await page.getByPlaceholder('seu@email.com')
        .fill('ana@email.com');

    await page.getByPlaceholder('Sua Senha')
        .fill('12345678');
    
    await page.getByRole('button', {
        name: 'Entrar'
    }).click();


    await expect(page).toHaveTitle(/Sentimento/i);

    await page.pause();
});