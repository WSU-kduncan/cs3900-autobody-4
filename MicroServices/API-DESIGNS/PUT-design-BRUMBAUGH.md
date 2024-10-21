# Planned PUT mapping

1. The /Mechanics/{MechanicID} is the base endpoint where mechanics will be updated.

2. When a mechanic is being updated, the things needed are the first name, lastname, and mechanicID. When a successful PUT request goes through, the response comes back as a 200.

3. The /serviceOrder/{SERVICE_ORDER_ID} is where new service orders will be updated. Using the vin, date recieved and completed, mechanicID, serviceID, etc.., and when it is successfully updated the response will be 200.
