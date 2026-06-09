class LoginPage {

    constructor(page) {
        this.page = page;

        this.email = '#email';
        this.senha = '#senha';
        this.btnLogin = '#btnLogin';
    }

    async acessar() {
        await this.page.goto('https://site.com/login');
    }

    async fazerLogin(email, senha) {

        await this.page.fill(this.email, email);
        await this.page.fill(this.senha, senha);

        await this.page.click(this.btnLogin);
    }
}

module.exports = LoginPage;