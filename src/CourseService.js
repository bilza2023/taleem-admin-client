// --------------------------------------------------
// Course Service
// --------------------------------------------------

export class CourseService {

	constructor(connection) {

		this.connection = connection;

	}

	// --------------------------------------------------
	// List
	// --------------------------------------------------

	async list() {

		return await this.connection.fetch(
			"/api/admin/course"
		);

	}

	// --------------------------------------------------
	// Read
	// --------------------------------------------------

	async read(id) {

		return await this.connection.fetch(
			`/api/admin/course/${id}`
		);

	}

	// --------------------------------------------------
	// Create
	// --------------------------------------------------

	async create(data) {

		return await this.connection.fetch(
			"/api/admin/course",
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
			`/api/admin/course/${id}`,
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
			`/api/admin/course/${id}`,
			{
				method: "DELETE"
			}
		);

	}

}