// --------------------------------------------------
// Library Service
// --------------------------------------------------

export class LibraryService {

	constructor(connection) {

		this.connection = connection;

	}

	// --------------------------------------------------
	// List
	// --------------------------------------------------

	async list() {

		return await this.connection.fetch(
			"/api/admin/library"
		);

	}

	// --------------------------------------------------
	// Read
	// --------------------------------------------------

	async read(slug) {

		return await this.connection.fetch(
			`/api/admin/library/${slug}`
		);

	}

	// --------------------------------------------------
	// Create
	// --------------------------------------------------

	async create(data) {

		return await this.connection.fetch(
			"/api/admin/library",
			{
				method: "POST",
				body: JSON.stringify(data)
			}
		);

	}

	// --------------------------------------------------
	// Update
	// --------------------------------------------------

	async update(slug, data) {

		return await this.connection.fetch(
			`/api/admin/library/${slug}`,
			{
				method: "PUT",
				body: JSON.stringify(data)
			}
		);

	}

	// --------------------------------------------------
	// Remove
	// --------------------------------------------------

	async remove(slug) {

		return await this.connection.fetch(
			`/api/admin/library/${slug}`,
			{
				method: "DELETE"
			}
		);

	}

}