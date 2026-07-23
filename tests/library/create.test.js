import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";
import { LibraryService } from "../../src/LibraryService.js";

describe("LibraryService create()", () => {

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

	it("should create a library item", async () => {

		const slug = `sdk-${Date.now()}`;

		const item = await library.create({

			slug,

			title: "SDK Create Test",

			description: "Created by LibraryService.create()",

			type: "HTML",

			body: "<h1>Hello</h1>",

			thumbnail: null,

			courseId: "course-public"

		});

		expect(item).toBeDefined();

		expect(item.slug).toBe(slug);
		expect(item.title).toBe("SDK Create Test");
		expect(item.description).toBe("Created by LibraryService.create()");
		expect(item.type).toBe("HTML");
		expect(item.courseId).toBe("course-public");

	});

});