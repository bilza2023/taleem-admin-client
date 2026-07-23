import { describe, it, expect, beforeEach } from "vitest";

import { Connection } from "../../src/Connection.js";
import { CommunicationService } from "../../src/CommunicationService.js";

describe("CommunicationService", () => {

	let connection;
	let communication;

	beforeEach(async () => {

		connection = new Connection(
			"http://127.0.0.1:9000"
		);

		await connection.login(
			"communication-admin@example.com",
			"12345678"
		);

		communication = new CommunicationService(
			connection
		);

	});

	it("should list communications", async () => {

		const items = await communication.list();

		expect(Array.isArray(items)).toBe(true);

	});

	it("should create a communication", async () => {

		const item = await communication.create({

			referenceId: "sdk-test",

			type: "QUESTION",

			meta: "",

			message: "Created by SDK",

			authorResponse: "",

			isPublic: true,

			userId: 1

		});

		expect(item.id).toBeDefined();
		expect(item.referenceId).toBe("sdk-test");
		expect(item.message).toBe("Created by SDK");

	});

	it("should read a communication", async () => {

		const created = await communication.create({

			referenceId: "sdk-test",

			type: "QUESTION",

			meta: "",

			message: "Read Test",

			authorResponse: "",

			isPublic: true,

			userId: 1

		});

		const item = await communication.read(
			created.id
		);

		expect(item.id).toBe(created.id);
		expect(item.message).toBe("Read Test");

	});

	it("should update a communication", async () => {

		const created = await communication.create({

			referenceId: "sdk-test",

			type: "QUESTION",

			meta: "",

			message: "Old Message",

			authorResponse: "",

			isPublic: true,

			userId: 1

		});

		const item = await communication.update(
			created.id,
			{
				message: "New Message"
			}
		);

		expect(item.message).toBe("New Message");

	});

	it("should remove a communication", async () => {

		const created = await communication.create({

			referenceId: "sdk-test",

			type: "QUESTION",

			meta: "",

			message: "Delete Test",

			authorResponse: "",

			isPublic: true,

			userId: 1

		});

		const result = await communication.remove(
			created.id
		);

		expect(result.message).toBe("Deleted.");

	});

});