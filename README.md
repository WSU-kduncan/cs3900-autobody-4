# ShopFlow Pro Project Documentation
### Table of Contents
- [Business Case & Agile Requirements](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/README.md#business-case--agile-requirements)
- [How to Build the major components of the project](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/README.md#how-to-build-the-major-components-of-the-project)
- [What works Checklist](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/README.md#what-works-checklist)
## Business Case & Agile Requirements
### Summary:
#### Vision: 
Streamline operations for mechanics and technicians by offering a simple, effective tool for organizing vehicle service orders.
#### Objectives:
* Reduce manual management time by 30%
* Ensure 95% of users can operate the software without formal training.
* Decrease work order errors by 25%

[BusinessNeedsAnalysis.md](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/2ddb28048d1399b465861fdf7982460bad209c4f/AgileFiles/Agile-MVP-BusinessNeedsAnalysis.md) - for more information about business needs.

#### Key Features

- Service Orders (Create, Update, Delete, View)
- Mechanic Assignment (Assign mechanics by their ID)
- Mechanic Services (Mechanics can view the work they are assigned.)
- Customer and Vehicle Information (can be stored and linked to each other via name and vin)

[Agile-MVP-CoreFeature](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/2ddb28048d1399b465861fdf7982460bad209c4f/AgileFiles/Agile-MVP-BusinessNeedsAnalysis.md) - for more information regaurding Core features, User Stories and Risks and Mitigations, and User Flow.

[BR-ProjectRequirementsDocument.md](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/d9074f0349f0b193b94b8ebc5662cd38dc173b28/BusinessFiles/BR-ProjectRequirementsDocument.md) - More information about project requirements.

## How to Build the major components of the project.
### Building the Database
- To Build the database you must ensure that no other docker containers are not running
- then you must download theShopFlowPro_Container folder onto your desktop 
- Make it available to your terminal use the proper commands to change your directory to the container so you are in the folder and can see the init and .yml files.
- Once in the directory run the `docker compose up` to successfully start the container.
### Connecting to the Database
- After starting the container open the Dbeaver application on your desktop
- Once open, double-click the dark gray space on the left of the application.
- Select Create --> Connection --> MariaDB.
- Within the username field fill in with username, and the password is password.
- Test your connection is good in the bottom left hand corner if the screen
- Once its verified you can then click the finish button on the bottom of the screen to connect

[DB-ReadMe](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/d9074f0349f0b193b94b8ebc5662cd38dc173b28/DB/README.md) - For more information about launching our database
### Building the backend
- open the shopflowproservice file in a docker environment
- run the file the Spring boot picture should show up in the terminal

### Building the frontend
- Install Node.js Download
- npm install -g @angular/cli
- ng version To verify install
- cd into the ShopFlowPro-frontend folder
- Run npm install to install all project dependencies.
- ng serve
- Navigate to http://localhost:4200/.

[Frontend-README.md](https://github.com/WSU-kduncan/cs3900-autobody-4/tree/20d794411573adff947bb0f6fdae83cbff8ce1e4/ShopFlowPro-frontend/READMES) - For more information about building the frontend
# What Works
The shop owner has the ability to create a service order. The following bullets will be included on that service order.

- Customer name
- Date Received
- Cost
- Customer's vehicles vin
- Service information
- Assign a mechanic to the service orders work (no implemented yet)

The user will be able include the following in a service order.

- Add customer first and last name
- Include service id
- Date Recieved
- Cost of service
- The vehciles vin number

# Future Work

- In Future updates, we plan to add login options and give every user their own account. This will create a change log and allow the users to know who made changes and when. We would also like to allow our program to link with popular invoicing software. This will allow the user to directly send information from the service order to an invoicing service to bill the customer.

- Some features that are currently unfulfilled per out Business Requirments include the ability to relate a mechanic to a specific service (their specialty). This would involve creatting some endpoints for that table per our database. Some bugs/partially implemented pieces include Updating a mechanic, upon doing so you get a 400 and message that the mechanic was unable to be updated. Some others include Getting service orders as there is only a GET for specific service orders per their Id rather than a get all service orders endpoint, alongside updating and deleting a service order. The search page and service detail pages are partially implemented as we were unable to get that fully working.
