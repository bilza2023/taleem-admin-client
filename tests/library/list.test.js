import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";
import { LibraryService } from "../../src/LibraryService.js";

describe("LibraryService list()", () => {

	let connection;
	let library;

	beforeEach(async () => {

		localStorage.clear();

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

		await connection.login(
			"library-admin@example.com",
			"12345678"
		);

		library = new LibraryService(
			connection
		);

	});

	it("should return library items", async () => {

		const items = await library.list();

		expect(items).toBeDefined();
		expect(Array.isArray(items)).toBe(true);

	});

});