import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";
import { LibraryService } from "../../src/LibraryService.js";

describe("LibraryService read()", () => {

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

	it("should read a library item", async () => {

		const slug = `sdk-${Date.now()}`;

		await library.create({

			slug,

			title: "Read Test",

			description: "Created for read test",

			type: "HTML",

			body: "<h1>Hello</h1>",

			thumbnail: null,

			courseId: "course-public"

		});

		const item = await library.read(slug);

		expect(item.slug).toBe(slug);
		expect(item.title).toBe("Read Test");
		expect(item.courseId).toBe("course-public");

	});

});