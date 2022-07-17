# Nationalities & Citizens

### Document lists suggestions and enhancements that could enhance the project:


The random user API does not return the same data in case of country filtering, and it returns endless data with the pagination option. I prefer an API that supports filtering and pagination with consistent data.

To ensure that I keep the task within its scope I did the implementation with the random user API completely, but I did reduce the amount of transmitted data between
front-end and back-end applications because we have to take scalability in mind always.

- Make the project based on the database.
- Make additional endpoint`/api/citizen/{id}` to fetch the citizen information, and make the `api/nat/{code}/citizens` endpoint return brief information only.
- Add authentication service, and use citizens data as users, they can log in and vote after the login.
- Use E2E and integration tests.
- Use a more efficient search method for a more scalable solution.
