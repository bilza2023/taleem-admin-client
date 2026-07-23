import { describe, it, expect } from "vitest";

import { TaleemAdminClient } from "../../src/TaleemAdminClient.js";

describe("TaleemAdminClient", () => {

	it("should create a client instance", () => {

		const client = new TaleemAdminClient(
			"http://127.0.0.1:9000"
		);

		expect(client).toBeDefined();

	});

	it("should expose login()", () => {

		const client = new TaleemAdminClient(
			"http://127.0.0.1:9000"
		);

		expect(typeof client.login).toBe("function");

	});

	it("should expose logout()", () => {

		const client = new TaleemAdminClient(
			"http://127.0.0.1:9000"
		);

		expect(typeof client.logout).toBe("function");

	});

	it("should expose token()", () => {

		const client = new TaleemAdminClient(
			"http://127.0.0.1:9000"
		);

		expect(typeof client.token).toBe("function");

	});

	it("should expose isLoggedIn()", () => {

		const client = new TaleemAdminClient(
			"http://127.0.0.1:9000"
		);

		expect(typeof client.isLoggedIn).toBe("function");

	});

	it("should expose verify()", () => {

		const client = new TaleemAdminClient(
			"http://127.0.0.1:9000"
		);

		expect(typeof client.verify).toBe("function");

	});

});