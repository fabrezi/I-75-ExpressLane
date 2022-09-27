const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: console.log
  });

try{
    await sequelize.authenticate();
    console.log('connection is made successfully');
} catch(err){
    console.log('connection is not made', err);
}

