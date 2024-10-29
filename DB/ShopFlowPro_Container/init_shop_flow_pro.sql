CREATE DATABASE IF NOT EXISTS shop_flow_pro;
USE shop_flow_pro;

-- shop_flow_status
DROP TABLE IF EXISTS shop_flow_pro.Mechanic;
-- Create Mechanic table
CREATE TABLE Mechanic (
    MID INT AUTO_INCREMENT NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    PRIMARY KEY (MID)
);
INSERT INTO shop_flow_pro.Mechanic (FirstName, LastName) VALUES ('Alex', 'Smith');
INSERT INTO shop_flow_pro.Mechanic (FirstName, LastName) VALUES ('Jamie', 'Johnson');
INSERT INTO shop_flow_pro.Mechanic (FirstName, LastName) VALUES ('Taylor', 'Brown');
INSERT INTO shop_flow_pro.Mechanic (FirstName, LastName) VALUES ('Morgan', 'Davis');
INSERT INTO shop_flow_pro.Mechanic (FirstName, LastName) VALUES ('Casey', 'Wilson');


DROP TABLE IF EXISTS shop_flow_pro.Make;
-- Create Make table
CREATE TABLE Make (
    MakeID INT PRIMARY KEY AUTO_INCREMENT,
    MakeName VARCHAR(25) NOT NULL
);
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Toyota');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Ford');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Chevy');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Honda');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Dodge');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Audi');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('BMW');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('KIA');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Nissan');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Buick');
INSERT INTO shop_flow_pro.Make (MakeName) VALUES ('Hyundai');

-- Create Mechanic-to-Make table (junction table)
DROP TABLE IF EXISTS shop_flow_pro.MechanicToMake;
CREATE TABLE MechanicToMake (
    MID INT,
    MakeID INT,
    PRIMARY KEY (MID, MakeID),
-- Add foreign Keys MID and MakeID
    FOREIGN KEY (MID) REFERENCES Mechanic(MID),
    FOREIGN KEY (MakeID) REFERENCES Make(MakeID)
);
DROP TABLE IF EXISTS shop_flow_pro.Vehicle;
-- Create Vehicle table
CREATE TABLE Vehicle (
    VIN DECIMAL(17,0) PRIMARY KEY,
    MakeID INT,
    Model VARCHAR(25) NOT NULL,
    Year INT NOT NULL,
    Description VARCHAR(250) NULL,
-- add FOREIGN KEY MakeID
FOREIGN KEY (MakeID) REFERENCES Make(MakeID)
);
DROP TABLE IF EXISTS shop_flow_pro.Service;
-- Create Service table
CREATE TABLE Service (
    ServiceID INT PRIMARY KEY AUTO_INCREMENT,
    ServiceName VARCHAR(100) NOT NULL
);
INSERT INTO Service (ServiceName) VALUES ('Tire Change');
INSERT INTO Service (ServiceName) VALUES ('Oil Change');
INSERT INTO Service (ServiceName) VALUES ('Tire Rotation');
INSERT INTO Service (ServiceName) VALUES ('Replace Battery');
INSERT INTO Service (ServiceName) VALUES ('Break Change');
INSERT INTO Service (ServiceName) VALUES ('Alignment');
INSERT INTO Service (ServiceName) VALUES ('Air Filter Replacement');
INSERT INTO Service (ServiceName) VALUES ('Transmission Fluid');
INSERT INTO Service (ServiceName) VALUES ('Timing Belt Replacement');

DROP TABLE IF EXISTS shop_flow_pro.ServiceOrder;
-- Create ServiceOrder table
CREATE TABLE ServiceOrder (
    ServiceOrderID INT PRIMARY KEY AUTO_INCREMENT,
    VIN VARCHAR(17),
    MID INT,
    ServiceID INT,
    DateRecieved DATETIME NOT NULL,
    DateCompleted DATETIME NULL,
    CustomerFirstName VARCHAR(50),
    CustomerLasrName VARCHAR(50),
    ServiceCost DECIMAL(10, 2) NOT NULL,
-- Create the foreign keys VIN, MID, and Service ID
    FOREIGN KEY (VIN) REFERENCES Vehicle(VIN),
    FOREIGN KEY (MID) REFERENCES Mechanic(MID),
    FOREIGN KEY (ServiceID) REFERENCES Service(ServiceID)
);
