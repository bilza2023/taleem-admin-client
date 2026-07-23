// --------------------------------------------------
// Taleem Admin Client
// --------------------------------------------------

import {Connection} from "./Connection.js";
export class TaleemAdminClient {

    constructor(serverUrl) {

        this.connection = new Connection(serverUrl);

    }

    // --------------------------------------------------
    // Connection
    // --------------------------------------------------

    async login(email, password) {

        return await this.connection.login(email, password);

    }

    logout() {

        this.connection.logout();

    }

    isLoggedIn() {

        return this.connection.isLoggedIn();

    }

    verify() {

        return this.connection.verify();

    }

    token() {

        return this.connection.token();

    }

}