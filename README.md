1.
This project utilizes a MySQL database. Before proceeding, please download MySQL Workbench and create a database. You can name it as you wish; just ensure to include this name in your local .env file.

2.
When starting the app, some initial data records will be automatically added to the database and then displayed on the front-end.
There are three predefined users. One of them is "admin" with the password "admin1234". Only the admin can complete tasks such as deleting an adoption, adding species, and adding temperament, among others.

3.
The other two users are: "User" with the password "user1234" and "User2" with the password "User1234". Passwords are hashed and stored in the database.



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







