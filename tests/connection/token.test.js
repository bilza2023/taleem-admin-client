import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";

describe("Connection token()", () => {

	let connection;

	beforeEach(() => {

		localStorage.clear();

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

	});

	it("should return null before login", () => {

		expect(
			connection.token()
		).toBeNull();

	});

	it("should return JWT after login", async () => {

		const response = await connection.login(
			"admin@example.com",
			"12345678"
		);

		expect(
			connection.token()
		).toBe(
			response.token
		);

	});

	it("should return null after logout", async () => {

		await connection.login(
			"admin@example.com",
			"12345678"
		);

		connection.logout();

		expect(
			connection.token()
		).toBeNull();

	});

});