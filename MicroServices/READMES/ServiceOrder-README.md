# ServiceOrder endpoints (Dylan Brumbaugh)

## GET ENDPOINT

### FrontEnd and Return
- the mapping ingests the `serviceOrderId` from the frontend to request certain things from the serviceOrder
- A successfull GET will retrieve data and Service Order retrieved successfully message, while a non successful GET will get unsuccessfully retrieved message.

### Database Query Needs
- The query should select from the ServiceOrder table then selects all the columns from the table.

## POST ENDPOINT

### FrontEnd and Return
- The frontend sends a `ServiceOrderDTO` within the request body, which contains details about the new serviceOrder. It also return a `ServiceOrderDTO` with a successfully added ServiceOrder with a successfull POST request, and a newly created serviceOrder. On the other hand, if an unsuccessfull request, an unsuccessfully added ServiceOrder messasge.

- The query should select from the ServiceOrder table and insert a new row with the ServiceOrderDTO data.

## PUT ENDPOINT

### FrontEnd and Return
- The frontend needs to provide a `serviceOrderId` alongside `ServiceOrderDTO` and new details about the serviceOrder. It returns either an unsuccessfully or successfully updated ServiceOrder alongside the updated service order.

- The query should select from the ServiceOrder table and the line items and update the row within the table with the provided serviceOrderId.

## DELETE ENDPOINT

### FrontEnd and Return
- The frontend must provide a `serviceOrderId`, and it returns with either an unsuccessfully or successfully deleted ServiceOrder message.

- The query should select from the ServiceOrde table then the serviceOrderId column, to select the row based on the Id to delete it.

### DELETE LOGIC
- In our case we have decided to have a DELETE endpoint for our ServiceOrders, however a business may not due to tracking purposes and the ability to view old ServiceOrders.
