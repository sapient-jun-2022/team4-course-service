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

    instructorId:{
        type: Number,
        require: ""
    },

    courseStage:{
        type: String
    },

    rating:{
        type: Number
    },

    numberOfTimeRated:{
        type: Number
    },

    comments:{
        type: JSON
    }

}, {timestamps : true});