const { test, expect } =
require('@playwright/test');

const CadastroPage =
require('../pages/CadastroPage');

test(
'Cadastro com sucesso',
async ({ page }) => {

    const cadastro =
    new CadastroPage(page);

    await cadastro.acessar();

    const email =
    `teste${Date.now()}@email.com`;

    await cadastro.cadastrar(
        'Natalia',
        email,
        'Teste@123'
    );

    await page.pause();

});