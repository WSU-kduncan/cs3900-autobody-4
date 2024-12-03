CREATE DATABASE IF NOT EXISTS shop_flow_pro;
USE shop_flow_pro;


-- shop_flow_status
DROP TABLE IF EXISTS shop_flow_pro.mechanic;
-- Create Mechanic table
CREATE TABLE mechanic (
    mechanic_id INT AUTO_INCREMENT NOT NULL,
    mechanic_first_name VARCHAR(50) NOT NULL,
    mechanic_last_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (mechanic_id)
);
INSERT INTO shop_flow_pro.mechanic (mechanic_first_name,  mechanic_last_name) VALUES ('Alex', 'Smith');
INSERT INTO shop_flow_pro.mechanic (mechanic_first_name,  mechanic_last_name) VALUES ('Jamie', 'Johnson');
INSERT INTO shop_flow_pro.mechanic (mechanic_first_name,  mechanic_last_name) VALUES ('Taylor', 'Brown');
INSERT INTO shop_flow_pro.mechanic (mechanic_first_name,  mechanic_last_name) VALUES ('Morgan', 'Davis');
INSERT INTO shop_flow_pro.mechanic (mechanic_first_name,  mechanic_last_name) VALUES ('Casey', 'Wilson');


DROP TABLE IF EXISTS shop_flow_pro.make;
-- Create Make table
CREATE TABLE make (
    make_id INT PRIMARY KEY AUTO_INCREMENT,
    make_name VARCHAR(25) NOT NULL
);
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Toyota');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Ford');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Chevy');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Honda');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Dodge');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Audi');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('BMW');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('KIA');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Nissan');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Buick');
INSERT INTO shop_flow_pro.make (make_name) VALUES ('Hyundai');

-- Create Mechanic-to-Make table (junction table)
DROP TABLE IF EXISTS shop_flow_pro.mechanic_to_make;
CREATE TABLE mechanic_to_make (
    mechanic_id INT,
    make_id INT,
    PRIMARY KEY (mechanic_id, make_id),
-- Add foreign Keys MID and MakeID
    FOREIGN KEY (mechanic_id) REFERENCES mechanic(mechanic_id),
    FOREIGN KEY (make_id) REFERENCES make(make_id)
);
DROP TABLE IF EXISTS shop_flow_pro.vehicle;
-- Create Vehicle table
CREATE TABLE vehicle (
    vin VARCHAR(17) PRIMARY KEY,
    make_id INT,
    model VARCHAR(25) NOT NULL,
    year INT NOT NULL,
    description VARCHAR(250) NULL,
-- add FOREIGN KEY MakeID
FOREIGN KEY (make_id) REFERENCES make(make_id)
);
DROP TABLE IF EXISTS shop_flow_pro.service;
-- Create Service table
CREATE TABLE service (
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    service_name VARCHAR(100) NOT NULL
);
INSERT INTO service (service_name) VALUES ('Tire Change');
INSERT INTO service (service_name) VALUES ('Oil Change');
INSERT INTO service (service_name) VALUES ('Tire Rotation');
INSERT INTO service (service_name) VALUES ('Replace Battery');
INSERT INTO service (service_name) VALUES ('Break Change');
INSERT INTO service (service_name) VALUES ('Alignment');
INSERT INTO service (service_name) VALUES ('Air Filter Replacement');
INSERT INTO service (service_name) VALUES ('Transmission Fluid');
INSERT INTO service (service_name) VALUES ('Timing Belt Replacement');

DROP TABLE IF EXISTS shop_flow_pro.service_order;
-- Create ServiceOrder table
CREATE TABLE service_order (
    service_order_id INT PRIMARY KEY AUTO_INCREMENT,
    vin VARCHAR(17),
    mechanic_id INT,
    service_id INT,
    date_recieved DATETIME NOT NULL,
    date_completed DATETIME NULL,
    customer_first_name VARCHAR(50),
    customer_last_name VARCHAR(50),
    service_cost DECIMAL(10, 2) NOT NULL,
-- Create the foreign keys VIN, MID, and Service ID
    FOREIGN KEY (vin) REFERENCES vehicle(vin),
    FOREIGN KEY (mechanic_id) REFERENCES mechanic(mechanic_id),
    FOREIGN KEY (service_id) REFERENCES service(service_id)
);

-- Create serviceOrderLineItem
DROP TABLE IF EXISTS shop_flow_pro.service_order_line_item;

CREATE TABLE service_order_line_item (
        service_order_id INT,
        service_id INT,
	-- Create Primary Key
	PRIMARY KEY(service_order_id, service_id)
);
