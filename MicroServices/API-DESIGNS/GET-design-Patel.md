# GET Endpoints

The API provides multiple end points for retrieving information about mechanics, vehicles, services, makes and service orders.

### Get All Mechanics
- **Endpoint**: `/mechanics`
- **Method**: `GET`
- **Description**: Retrieves a list of all mechanics.

### Get Mechanic by ID
- **Endpoint**: `/mechanics/{mid}`
- **Method**: `GET`
- **Description**: Retrieves details of a specific mechanic by `MID`.
- **Parameters**: 
  - `mid` (int) - Mechanic ID

### Get All Services
- **Endpoint**: `/services`
- **Method**: `GET`
- **Description**: Retrieves a list of all available services.

### Get Service by ID
- **Endpoint**: `/services/{serviceId}`
- **Method**: `GET`
- **Description**: Retrieves details of a specific service by `ServiceID`.
- **Parameters**: 
  - `serviceId` (int) - Service ID


### Get All Service Orders
- **Endpoint**: `/service-orders`
- **Method**: `GET`
- **Description**: Retrieves a list of all service orders.

### Get Service Order by ID
- **Endpoint**: `/service-orders/{serviceOrderId}`
- **Method**: `GET`
- **Description**: Retrieves details of a specific service order by `ServiceOrderID`.
- **Parameters**: 
  - `serviceOrderId` (int) - Service Order ID