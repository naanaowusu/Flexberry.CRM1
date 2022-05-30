﻿




CREATE TABLE Activity (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 ActivityType VARCHAR(10) NULL,
 Product_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Contact (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 Surname VARCHAR(255) NULL,
 Telephone VARCHAR(255) NULL,
 Adress VARCHAR(255) NULL,
 Gender VARCHAR(6) NULL,
 Email VARCHAR(255) NULL,
 Company_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Product (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 TypeOfProduct VARCHAR(18) NULL,
 Company_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Adminstrator (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Company (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NULL,
 Employer VARCHAR(255) NULL,
 Role VARCHAR(255) NULL,
 Adminstrator_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ContactInActivity (
 primaryKey UUID NOT NULL,
 DateOfActivity TIMESTAMP(3) NULL,
 Result VARCHAR(255) NULL,
 Contact_m0 UUID NOT NULL,
 Activity_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Activity ADD CONSTRAINT FK1ebd35b1239c8d3b08f43609ee5fb9f739ee623c FOREIGN KEY (Product_m0) REFERENCES Product; 
CREATE INDEX Index1ebd35b1239c8d3b08f43609ee5fb9f739ee623c on Activity (Product_m0); 

 ALTER TABLE Contact ADD CONSTRAINT FKa5d70aefaa93c2965f9ed0b72c410b44bdd08e72 FOREIGN KEY (Company_m0) REFERENCES Company; 
CREATE INDEX Indexa5d70aefaa93c2965f9ed0b72c410b44bdd08e72 on Contact (Company_m0); 

 ALTER TABLE Product ADD CONSTRAINT FKb8963312e512159bd5641b380f1b32a2f7d9a942 FOREIGN KEY (Company_m0) REFERENCES Company; 
CREATE INDEX Indexb8963312e512159bd5641b380f1b32a2f7d9a942 on Product (Company_m0); 

 ALTER TABLE Company ADD CONSTRAINT FKa540395e0b9a0dbdb1d9a115dbe02f35295b3710 FOREIGN KEY (Adminstrator_m0) REFERENCES Adminstrator; 
CREATE INDEX Indexa540395e0b9a0dbdb1d9a115dbe02f35295b3710 on Company (Adminstrator_m0); 

 ALTER TABLE ContactInActivity ADD CONSTRAINT FK85b91b32540bdb628da3949e57603bbec07fbc4d FOREIGN KEY (Contact_m0) REFERENCES Contact; 
CREATE INDEX Index85b91b32540bdb628da3949e57603bbec07fbc4d on ContactInActivity (Contact_m0); 

 ALTER TABLE ContactInActivity ADD CONSTRAINT FK2eddb374600906d86449cd1c7bdebf812ffaf8b2 FOREIGN KEY (Activity_m0) REFERENCES Activity; 
CREATE INDEX Index2eddb374600906d86449cd1c7bdebf812ffaf8b2 on ContactInActivity (Activity_m0); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

