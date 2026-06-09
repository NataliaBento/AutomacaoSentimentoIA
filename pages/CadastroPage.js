class CadastroPage {

    constructor(page) {

        this.page = page;

        this.nome =
            page.getByPlaceholder('Ana Silva');

        this.email =
            page.getByPlaceholder('seu@email.com');

        this.telefone =
            page.getByPlaceholder('(11) 99999-9999');

        this.senha =
            page.locator('input[type="password"]').nth(0);

        this.confirmarSenha =
            page.locator('input[type="password"]').nth(1);

        this.botaoCadastrar =
            page.getByRole('button', {
                name: 'Criar conta'
            });
    }

    async acessar() {

        await this.page.goto('/register');

    }

    async cadastrar(nome, email, senha) {

        await this.nome.fill(nome);

        await this.email.fill(email);

        await this.telefone.fill('81999999999');

        await this.senha.fill(senha);

        await this.confirmarSenha.fill(senha);

        await this.botaoCadastrar.click();

    }

}

module.exports = CadastroPage;