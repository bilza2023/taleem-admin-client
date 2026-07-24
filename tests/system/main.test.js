// --------------------------------------------------
// System Test
// --------------------------------------------------

import { describe, it, expect } from "vitest";

import { TaleemAdminClient } from "../../src/main.js";

describe("TaleemAdminClient (Public API)", () => {

	it("should export the public client", () => {

		expect(TaleemAdminClient).toBeDefined();

		const taleem = new TaleemAdminClient(

			"http://127.0.0.1:9000"

		);

		expect(taleem).toBeDefined();

		expect(taleem.connection).toBeDefined();

		expect(taleem.library).toBeDefined();

		expect(taleem.course).toBeDefined();

		expect(taleem.communication).toBeDefined();

		expect(taleem.subscription).toBeDefined();

	});

});