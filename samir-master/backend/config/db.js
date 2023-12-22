 /* const mongoose = require('mongoose')
 const colors = require('colors/safe');


 
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDb */


const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    import('chalk').then((chalk) => {
      console.log(
        chalk.default.cyan.underline.bold(`MongoDB Connected: ${conn.connection.host}`)
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb;
