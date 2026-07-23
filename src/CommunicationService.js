// --------------------------------------------------
// Communication Service
// --------------------------------------------------

export class CommunicationService {

	constructor(connection) {

		this.connection = connection;

	}

	// --------------------------------------------------
	// List
	// --------------------------------------------------

	async list() {

		return await this.connection.fetch(
			"/api/admin/communication"
		);

	}

	// --------------------------------------------------
	// Read
	// --------------------------------------------------

	async read(id) {

		return await this.connection.fetch(
			`/api/admin/communication/${id}`
		);

	}

	// --------------------------------------------------
	// Create
	// --------------------------------------------------

	async create(data) {

		return await this.connection.fetch(
			"/api/admin/communication",
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
			`/api/admin/communication/${id}`,
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
			`/api/admin/communication/${id}`,
			{
				method: "DELETE"
			}
		);

	}

}