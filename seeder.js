const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connnectDb= require('./config/config');
const itemModel= require('./models/itemModel');
const items = require('./utils/data');

// config
dotenv.config()
connnectDb()

// function seeder

const importData = async()=>{
    try{
        await itemModel.deleteMany();
        const itemsData = await itemModel.insertMany(items);
        console.log('All items added');
        process.exit();
    }
    catch(error){
        console.error(`${error}`.bgRed.inverse);
        process.exit(1);
    }
};

importData();