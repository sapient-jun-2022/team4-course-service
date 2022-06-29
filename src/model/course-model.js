import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CourseSchema = new Schema({

    courseName: {
        type: String,
        require: ""
    },

    categoryName: {
        type: String,
    },

    courseVideo:{
        type: Array,
        require: ""
    },

    price:{
        type: Number,
    },

    instructorName:{
        type: String,
        require: ""
    },

    courseStage:{
        type: String
    },

    totalRating:{
        type: Number
    },

    numberOfTimeRated:{
        type: Number
    },


    rating:{
        type: Number
    },

    comments:{
        type: JSON
    }

}, {timestamps : true});