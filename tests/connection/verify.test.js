import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";

describe("Connection verify()", () => {

	let connection;

	beforeEach(() => {

		localStorage.clear();

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

	});

	it("should return false before login", async () => {

		const verified = await connection.verify();

		expect(verified).toBe(false);

	});

	it("should return true after login", async () => {

		await connection.login(
			"admin@example.com",
			"12345678"
		);

		const verified = await connection.verify();

		expect(verified).toBe(true);

	});

	it("should return false after logout", async () => {

		await connection.login(
			"admin@example.com",
			"12345678"
		);

		connection.logout();

		const verified = await connection.verify();

		expect(verified).toBe(false);

	});

});