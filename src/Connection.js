// --------------------------------------------------
// Connection
// --------------------------------------------------

export class Connection {

    constructor(serverUrl) {

        this.serverUrl = serverUrl;
        this.tokenKey = "taleem.token";

    }

    // --------------------------------------------------
    // Login
    // --------------------------------------------------

    async login(email, password) {

        const response = await fetch(
            `${this.serverUrl}/api/user/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        if (!response.ok) {
            throw new Error("Login failed.");
        }

        const data = await response.json();

        localStorage.setItem(
            this.tokenKey,
            data.token
        );

        return data;

    }

    // --------------------------------------------------
    // Logout
    // --------------------------------------------------

    logout() {

        localStorage.removeItem(
            this.tokenKey
        );

    }

    // --------------------------------------------------
    // Token
    // --------------------------------------------------

    token() {

        return localStorage.getItem(
            this.tokenKey
        );

    }

    // --------------------------------------------------
    // Status
    // --------------------------------------------------

    isLoggedIn() {

        return this.token() !== null;

    }

    // --------------------------------------------------
    // Verify
    // --------------------------------------------------

    async verify() {

        const response = await fetch(
            `${this.serverUrl}/api/user/verify`,
            {
                headers: {
                    Authorization:
                        `Bearer ${this.token()}`
                }
            }
        );

        return response.ok;

    }

}