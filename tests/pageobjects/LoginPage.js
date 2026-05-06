class LoginPage {

    constructor(page) {

        this.page = page;
        this.userName = page.locator('#userEmail');
        this.passWord = page.locator('#userPassword');
        this.signInButton = page.locator('#login');


    }

    async NavigateTO() {

        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    }

    async validLogin(email, password) {

        await this.userName.fill(email);
        await this.passWord.fill(password);
        await this.signInButton.click();


    }

















}

module.exports = { LoginPage };

