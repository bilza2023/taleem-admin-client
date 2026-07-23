import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";

describe("Connection fetch()", () => {

	let connection;

	beforeEach(async () => {

		localStorage.clear();

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

		await connection.login(
			"admin@example.com",
			"12345678"
		);

	});

	it("should return parsed JSON", async () => {

		const data = await connection.fetch(
			"/api/user/verify"
		);

		expect(data).toBeDefined();

	});

	it("should use the stored bearer token", async () => {

		const token = connection.token();

		expect(token).toBeDefined();

		const data = await connection.fetch(
			"/api/user/verify"
		);

		expect(data).toBeDefined();

		expect(connection.token()).toBe(token);

	});

});