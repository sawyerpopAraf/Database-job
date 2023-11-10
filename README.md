
# Application Installation and Usage Instructions
Run `node service/populateDatabase` to populate the data into the database table. Before doing this, please delete the `createdAt` and `updatedAt` columns from the `AnimalTemperament` table or remove the 'NN' option.

All functions have been tested. On the Animals page, after clicking one of the buttons at the top (e.g., 'All Adoption Details', 'Animals by Age', etc.), you can simply click the "ALL ANIMALS" button to return to the original view.


# Environment Variables 1
ADMIN_USERNAME = "ProjectAdmin"
ADMIN_PASSWORD = "YourPassword"
DATABASE_NAME = "adoptiondb"
DIALECT = "mysql"
DIALECTMODEL = "mysql2"
PORT = "3000"
HOST = "localhost"

# Additional Libraries/Packages
Nodemon, sequelize, mysql,mysql2, dotenv. passport, passport-local,express-session,sqlite3, connect-sqlite3

# NodeJS Version Used
v18.16.0

# DATABASE
CREATE SCHEMA adoptiondb

# DATAINSERTS
Run node service/populateDatabase to populate data into the database table. Before doing so, delete the createdAt and updatedAt columns from the AnimalTemperament table(or take out the NN option).

# DATABASEACCESS
CREATE ROLE 'database owner';
GRANT ALL PRIVILEGES ON adoptiondb.* TO 'database owner';
CREATE USER 'dabcaowner'@'%' IDENTIFIED BY 'dabca1234';
GRANT 'database owner' TO 'dabcaowner'@'%';


