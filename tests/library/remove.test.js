import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";
import { LibraryService } from "../../src/LibraryService.js";

describe("LibraryService remove()", () => {

	let connection;
	let library;

	beforeEach(async () => {

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

		await connection.login(
			"library-admin@example.com",
			"12345678"
		);

		library = new LibraryService(connection);

	});

	it("should remove a library item", async () => {

		const slug = `sdk-${Date.now()}`;

		await library.create({

			slug,

			title: "SDK Remove Test",

			description: "Created for remove test",

			type: "HTML",

			body: "<h1>Hello</h1>",

			thumbnail: null,

			courseId: "course-public"

		});

		const result = await library.remove(slug);

		expect(result).toBeDefined();
		expect(result.message).toBe("Deleted.");

	});

});