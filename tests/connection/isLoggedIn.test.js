import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";

describe("Connection isLoggedIn()", () => {

	let connection;

	beforeEach(() => {

		localStorage.clear();

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

	});

	it("should return false before login", () => {

		expect(
			connection.isLoggedIn()
		).toBe(false);

	});

	it("should return true after login", async () => {

		await connection.login(
			"admin@example.com",
			"12345678"
		);

		expect(
			connection.isLoggedIn()
		).toBe(true);

	});

	it("should return false after logout", async () => {

		await connection.login(
			"admin@example.com",
			"12345678"
		);

		connection.logout();

		expect(
			connection.isLoggedIn()
		).toBe(false);

	});

});