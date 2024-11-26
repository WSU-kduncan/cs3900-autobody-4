CREATE DATABASE IF NOT EXISTS shop_flow_pro;
USE shop_flow_pro;

-- shop_flow_status
DROP TABLE IF EXISTS shop_flow_pro.Mechanic;
-- Create Mechanic table
CREATE TABLE Mechanic (
    mid INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    PRIMARY KEY (MID)
);
INSERT INTO shop_flow_pro.Mechanic (firstName, lastName) VALUES ('Alex', 'Smith');
INSERT INTO shop_flow_pro.Mechanic (firstName, lastName) VALUES ('Jamie', 'Johnson');
INSERT INTO shop_flow_pro.Mechanic (firstName, lastName) VALUES ('Taylor', 'Brown');
INSERT INTO shop_flow_pro.Mechanic (firstName, lastName) VALUES ('Morgan', 'Davis');
INSERT INTO shop_flow_pro.Mechanic (firstName, lastName) VALUES ('Casey', 'Wilson');


DROP TABLE IF EXISTS shop_flow_pro.Make;
-- Create Make table
CREATE TABLE Make (
    makeId INT PRIMARY KEY AUTO_INCREMENT,
    makeName VARCHAR(25) NOT NULL
);
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Toyota');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Ford');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Chevy');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Honda');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Dodge');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Audi');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('BMW');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('KIA');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Nissan');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Buick');
INSERT INTO shop_flow_pro.Make (makeName) VALUES ('Hyundai');

-- Create Mechanic-to-Make table (junction table)
DROP TABLE IF EXISTS shop_flow_pro.MechanicToMake;
CREATE TABLE MechanicToMake (
    mid INT,
    makeId INT,
    PRIMARY KEY (mid, makeId),
-- Add foreign Keys MID and MakeID
    FOREIGN KEY (mid) REFERENCES Mechanic(mid),
    FOREIGN KEY (makeId) REFERENCES Make(makeId)
);
DROP TABLE IF EXISTS shop_flow_pro.Vehicle;
-- Create Vehicle table
CREATE TABLE Vehicle (
    vin VARCHAR(17) PRIMARY KEY,
    makeId INT,
    model VARCHAR(25) NOT NULL,
    year INT NOT NULL,
    description VARCHAR(250) NULL,
-- add FOREIGN KEY MakeID
FOREIGN KEY (makeId) REFERENCES make(MakeId)
);
DROP TABLE IF EXISTS shop_flow_pro.Service;
-- Create Service table
CREATE TABLE Service (
    serviceId INT PRIMARY KEY AUTO_INCREMENT,
    serviceName VARCHAR(100) NOT NULL
);
INSERT INTO Service (serviceName) VALUES ('Tire Change');
INSERT INTO Service (serviceName) VALUES ('Oil Change');
INSERT INTO Service (serviceName) VALUES ('Tire Rotation');
INSERT INTO Service (serviceName) VALUES ('Replace Battery');
INSERT INTO Service (serviceName) VALUES ('Break Change');
INSERT INTO Service (serviceName) VALUES ('Alignment');
INSERT INTO Service (serviceName) VALUES ('Air Filter Replacement');
INSERT INTO Service (serviceName) VALUES ('Transmission Fluid');
INSERT INTO Service (serviceName) VALUES ('Timing Belt Replacement');

DROP TABLE IF EXISTS shop_flow_pro.ServiceOrder;
-- Create ServiceOrder table
CREATE TABLE ServiceOrder (
    serviceOrderID INT PRIMARY KEY AUTO_INCREMENT,
    vin VARCHAR(17),
    mid INT,
    serviceId INT,
    dateRecieved DATETIME NOT NULL,
    dateCompleted DATETIME NULL,
    customerFirstName VARCHAR(50),
    customerLasrName VARCHAR(50),
    serviceCost DECIMAL(10, 2) NOT NULL,
-- Create the foreign keys VIN, MID, and Service ID
    FOREIGN KEY (vin) REFERENCES Vehicle(vin),
    FOREIGN KEY (mid) REFERENCES Mechanic(mid),
    FOREIGN KEY (serviceId) REFERENCES Service(serviceId)
);
