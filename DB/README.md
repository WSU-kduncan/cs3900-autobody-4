# ShopFlowPro DB Documentation

> Dylan , Owen, Ashu 

## How to start container
- Start by opening up the docker desktop application, and ensure all previous containers are no longer running.
- After that, you can proceed in downloading the ShopFlowPro_Container folder onto your desktop, and making it available to your terminal.
- Next, direct your way to a terminal, to access the command line.
- Use the proper commands to change your directory to the ShopFlowPro_Conatiner so you are now in the folder and can see the init and .yml files.
- Once in the directroy, you can run the command `docker compose up` to successfully start the container.

## How to connect to Database
- Begin by referring to `How to start container` header, to start the container.
- After the container is running you can proceed to the Dbeaver application on your desktop.
- Once open, double click the dark gray space on the left had side of the application.
- Select Create --> Connection --> MariaDB.
- Within the username field fill in with `username`, and the password is `password`.
- Test your connection is good in the bottom left hand corner of the screen, and once its verified you can then click the finish button on the bottom side of the screen to connect. 

## SQL Scripts

1. Query to view all customers
    - [link view all customer query](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/DB/SQL-Toolbox/all_records.sql)
    - This query retrieves all of the customers first and last names from the ServiceOrder table.

2. Query to see how often we do a oil change
    - [link to query about oil change query](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/DB/SQL-Toolbox/oil_changes.sql)
    - This query gives the total count of oil changes done.

3. Query to count of total vehicles
    - [link to query about count of vehicles](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/DB/SQL-Toolbox/vehicle_count.sql)
    - This query is used to return the total number of vehicles from the vehicle table.

4. Query to show mechanics and the makes they work on
    - [link to query of the mechanics and their specialty](https://github.com/WSU-kduncan/cs3900-autobody-4/blob/main/DB/SQL-Toolbox/mechanic_to_make.sql)
    - This query displays all mechanics along with the makes they specialize in.
