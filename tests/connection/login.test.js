import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";

describe("Connection login()", () => {

	let connection;

	beforeEach(() => {

		localStorage.clear();

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

	});

	it("should login as super admin", async () => {

		const response = await connection.login(
			"admin@example.com",
			"12345678"
		);

		expect(response).toBeDefined();
		expect(response.token).toBeDefined();

		expect(connection.isLoggedIn()).toBe(true);

		expect(connection.token()).toBe(
			response.token
		);

	});

});