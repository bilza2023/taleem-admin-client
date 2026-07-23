// --------------------------------------------------
// Taleem Admin Client
// --------------------------------------------------

import {Connection} from "./Connection.js";
import {LibraryService} from "./LibraryService.js";
import {CourseService} from "./CourseService.js";
import {CommunicationService} from "./CommunicationService.js";
import {SubscriptionService} from "./SubscriptionService.js";
export class TaleemAdminClient {

    constructor(serverUrl) {

        this.connection = new Connection(serverUrl);
        this.library = new LibraryService(
                    this.connection
                );
        this.course = new CourseService(
                    this.connection
                );
        this.communication = new CommunicationService(
                    this.connection
                );
        this.subscription = new SubscriptionService(
                    this.connection
                );

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