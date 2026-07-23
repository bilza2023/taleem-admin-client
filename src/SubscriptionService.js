// --------------------------------------------------
// Subscription Service
// --------------------------------------------------

export class SubscriptionService {

	constructor(connection) {

		this.connection = connection;

	}

	// --------------------------------------------------
	// List
	// --------------------------------------------------

	async list() {

		return await this.connection.fetch(
			"/api/admin/subscription"
		);

	}

	// --------------------------------------------------
	// Read
	// --------------------------------------------------

	async read(id) {

		return await this.connection.fetch(
			`/api/admin/subscription/${id}`
		);

	}

	// --------------------------------------------------
	// Create
	// --------------------------------------------------

	async create(data) {

		return await this.connection.fetch(
			"/api/admin/subscription",
			{
				method: "POST",
				body: JSON.stringify(data)
			}
		);

	}

	// --------------------------------------------------
	// Update
	// --------------------------------------------------

	async update(id, data) {

		return await this.connection.fetch(
			`/api/admin/subscription/${id}`,
			{
				method: "PUT",
				body: JSON.stringify(data)
			}
		);

	}

	// --------------------------------------------------
	// Remove
	// --------------------------------------------------

	async remove(id) {

		return await this.connection.fetch(
			`/api/admin/subscription/${id}`,
			{
				method: "DELETE"
			}
		);

	}

}