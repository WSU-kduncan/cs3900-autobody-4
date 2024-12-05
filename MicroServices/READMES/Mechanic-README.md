# Mechanic Endpoints

## GET Endpoint

### Frontend and Return
- The frontend can pass optional parameters such as `search`, `page`, `rpp` (results per page), `sortField`, and `sortOrder` to retrieve a list of mechanics.
- If successful, this endpoint returns a `ServiceResponseDTO` containing a list of mechanics, pagination details, and a success message "Successfully retrieved mechanics."
- If the request is unsuccessful, it returns an error message explaining why the retrieval failed.

### Database Query Needs
- The query selects data from the `Mechanic` table, filtered by the search term if provided, and ordered by the specified `sortField` and `sortOrder`. It retrieves mechanics based on the pagination values.

---

## POST Endpoint

### Frontend and Return
- The frontend sends a `MechanicDTO` within the request body to create a new mechanic. This DTO includes details about the mechanic.
- A successful POST request returns a `ServiceResponseDTO` containing the newly created mechanic and a success message, "Successfully added mechanic."
- If the request fails, such as if a required field is missing, it returns an error message specifying the issue.

### Database Query Needs
- The query inserts a new row in the `Mechanic` table with the details provided in the `MechanicDTO`.

---

## PUT Endpoint

### Frontend and Return
- The frontend provides a `mechanicId` in the path and a `MechanicDTO` with updated mechanic details in the request body.
- On a successful update, this endpoint returns a `ServiceResponseDTO` with the updated mechanic and a success message, "Mechanic updated successfully."
- If the update fails (e.g., the `mechanicId` is invalid), an error message indicating the problem is returned.

### Database Query Needs
- The query updates an existing row in the `Mechanic` table with the data provided in the `MechanicDTO`, selecting by the given `mechanicId`.

---

## DELETE Endpoint

### Frontend and Return
- The frontend provides a `mechanicId` to delete a specific mechanic.
- A successful deletion returns a `ServiceResponseDTO` with a success message, "Mechanic deleted successfully."
- If the deletion is unsuccessful (e.g., the mechanic does not exist), it returns an error message explaining why.

### Database Query Needs
- The query deletes a row from the `Mechanic` table where the `mechanicId` matches the provided ID.
