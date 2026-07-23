import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";
import { CourseService } from "../../src/CourseService.js";

describe("CourseService", () => {

	let connection;
	let course;

	beforeEach(async () => {

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

		await connection.login(
			"course-admin@example.com",
			"12345678"
		);

		course = new CourseService(connection);

	});

	it("should list courses", async () => {

		const items = await course.list();

		expect(Array.isArray(items)).toBe(true);
		expect(items.length).toBeGreaterThan(0);

	});

	it("should create a course", async () => {

		const slug = `sdk-${Date.now()}`;

		const item = await course.create({

			id: slug,
			slug,

			title: "SDK Course",

			description: "Created by SDK",

			access: "PUBLIC"

		});

		expect(item.slug).toBe(slug);
		expect(item.title).toBe("SDK Course");
		expect(item.access).toBe("PUBLIC");

	});

	it("should read a course", async () => {

		const slug = `sdk-${Date.now()}`;

		await course.create({

			id: slug,
			slug,

			title: "Read Test",

			description: "Testing read",

			access: "PUBLIC"

		});

		const item = await course.read(slug);

		expect(item.slug).toBe(slug);
		expect(item.title).toBe("Read Test");

	});

	it("should update a course", async () => {

		const slug = `sdk-${Date.now()}`;

		await course.create({

			id: slug,
			slug,

			title: "Old Title",

			description: "Testing update",

			access: "PUBLIC"

		});

		const item = await course.update(slug, {

			title: "New Title"

		});

		expect(item.title).toBe("New Title");

	});

	it("should remove a course", async () => {

		const slug = `sdk-${Date.now()}`;

		await course.create({

			id: slug,
			slug,

			title: "Delete Test",

			description: "Testing remove",

			access: "PUBLIC"

		});

		const result = await course.remove(slug);

		expect(result.message).toBe("Deleted.");

	});

});