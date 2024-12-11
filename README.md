# ShopFlow Pro Project Documentation
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

# How to Build The Major Components of the Project.
## Building the Database
- To Build the database you must ensure that no other docker containers are not running
- then you must download theShopFlowPro_Container folder onto your desktop 
- Make it available to your terminal use the proper commands to change your directory to the container so you are in the folder and can see the init and .yml files.
- Once in the directory run the `docker compose up` to successfully start the container.
## Connecting to the Database
- After starting the container open the Dbeaver application on your desktop
- Once open, double-click the dark gray space on the left of the application.
- Select Create --> Connection --> MariaDB.
- Within the username field fill in with username, and the password is password.
- Test your connection is good in the bottom left hand corner if the screen
- Once its verified you can then click the finish button on the bottom of the screen to connect

[DB-ReadMe](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/d9074f0349f0b193b94b8ebc5662cd38dc173b28/DB/README.md) - For more information about launching our database

## Building the Backend 
TODO
## Building the Front-end Application 
- Install Node.js Download
- npm install -g @angular/cli
- ng version To verify install
- cd into the ShopFlowPro-frontend folder
- Run npm install to install all project dependencies.
- ng serve
- Navigate to http://localhost:4200/.

[Front-end-README.md](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/ShopFlowPro-frontend%2FREADMES%2FREADME.md)
# What Works Checklist
TODO
[ ]