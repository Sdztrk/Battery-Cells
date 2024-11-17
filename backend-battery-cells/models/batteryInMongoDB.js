"use strict"


const { Schema,model } = require('mongoose');



const energySchema = new Schema({
    totalEnergy: {
        type:Number,
        trim:true,
        required:true
    },
    date:{
        type:String,
        trim:true,
        required:true
    
    }
  });


const BatteryInMongoSchema = new Schema({
    name: {
        type: String,
        trim:true,
        required: true,
    },
    voltage: {
        type: Number,
        trim:true,
        required: true,
    },
    maxCapacity: {
        type: Number,
        trim:true,
        required: true,
    },
    resistance: {
        type: Number,
        trim:true,
        required: true,
    },
    energy: [energySchema],
    timestamp: { type: Date, default: Date.now }
    
});

module.exports = model('Battery', BatteryInMongoSchema)