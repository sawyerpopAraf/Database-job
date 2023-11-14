1. This is a project that using Mysql database, before doing anything, download the Mysql workbench and create the database,you can call it whatever name you want , just to include it in your local .env file. 

2.When starting the app , some initial data records will be added automatically to the database , then be showen at the front-end.

3. There are 3 predefined users, one of them is "admin" with password "admin1234", only admin can complete tasks such as deleting an adoption , adding species, adding temerament and so on. 

4. All functions have been tested. On the Animals page, after clicking one of the buttons at the top (e.g., 'All Adoption Details', 'Animals by Age', etc.), you can simply click the "ALL ANIMALS" button to return to the original view.



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







