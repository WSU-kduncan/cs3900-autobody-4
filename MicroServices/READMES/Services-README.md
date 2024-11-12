# Services Endpoints
## GET Endpoint
### Frontend and Return
- The frontend is able to check if the service is an active service using `isActive`.
- If successful, this endpoint returns a `ServiceResponseDTO` with a list of active services offered and their ID numbers with a message that says "Services retrieved successfully.".
- If the request is unsuccessful, it will return an error message explaining the error.

### Database Query Needs
- The Query selects the data from the `Services` table.

## POST, PUT And DELETE Endpoint
### Frontend and Return
- The frontend does not have the abilty to Create, Update, or Delete the services. The only way to alter the services is by changing them in the database.
