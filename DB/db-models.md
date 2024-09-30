# Conceptual Model

![Conceptual Model](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/b5fbb48e9736d8618a6fb2784a841abfac68e254/DB/Images/Conceptual.png)

> The following conceptual model is represented of 4 entities; Service Order, Vehicle, Service, and Mechanic. Each entity is then made up of attributes, the Service order includes the date received and completed, customer, order number, and cost. These are essential things related to creating a successful service order. Next, The vehicle entity is made up of a make, vin, model, year and description. The service entity includes a description and parts, and lastly the mechanic has a mid, name and specialty. These entities also have relationships with one another, the service order is completed by the mechanics and the mechanic does the service. Furthermore, the vehicle entity gets a service and needs a service order. This model as a whole, serves as a way to simplify the representation of our solution, highlighting its key components and relationships for easier an understanding.

# Logical Model

![Logical Model](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/DB%2FImages%2FTeamLogicalModel%20%281%29.png)

> The provided logical database model is designed to manage vehicle services and maintenance, consisting of five main entities: Service, Service Order, Vehicle, Mechanic, and Specialty. Each entity has a unique primary key that ensures the uniqueness of its records. The Service entity, identified by the ServiceCode primary key. The Service Order entity, with Order Number as its primary key. It has foreign keys linking it to other entities, specifically Vin from Vehicle, MID from Mechanic, and ServiceCode from Service, establishing relationships with these entities. The Vehicle entity, is identified by the Vin primary key and references a MakeID from the Specialty entity to indicate the vehicle's specialty type. The Mechanic entity is defined by the MID primary key and it references the MakeID from the Specialty entity to indicate the mechanic’s area of specialization. The Specialty entity, identified by MakeID, serves as a lookup table to define the specialties associated with both vehicles and mechanics, forming a bridge between the two.








# Physical Model

![Physical Model](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/DB%2FImages%2FTeamPhysicalModel.png)

> The provided physical database model is used to represent how the data will be stored within the database. More importantly the physical model shows the data type of each entity and whether or not the entity will be null to start out. The entities are not null values are MakeID, FirstName, LastName, MID, Make, Model, Year, Vin, OrderNumber, DateReceived, Cost, Customer, Description (Service table) and ServiceCode. The entities that can be null are, DateCompleted, Parts, and Description (Vehicle table). The physical model also shows the relationships between the tables. This model shows a one to many relationship from Mechanic to Vehicle, MechanicMake to Vehicle, and Service to ServiceOrder. There is also a one to one relationship which is one vehicle for each one of the ServiceOrder.
