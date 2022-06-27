import mongoose, { Schema } from 'mongoose';
import { CourseSchema } from '../model/course-model';

const Course = mongoose.model("Course", CourseSchema);

export const home = (req, res) => {
    res.json({ "message": "Welcome to E-courses" });
}

export const getCourseById = (req, res) => {
    Course.findById({_id : req.params.courseId} , (err, course) => {
        if(err){
            res.send(err);
        }
        res.json(course);
    })
}


export const addCourse = (req, res) => {
    let newCourse = new Course(req.body);
    newCourse.save((err, course) => {
        console.log(err+"   "+course);
        if (err) {
            res.send(err);
        }
        res.json(course);
    })
}

export const getAllCourses = (req, res) => {
    Course.find((err, course) => {
        if (err) {
            res.send(err);
        }
        res.json(course);
    })
}

export const getCourseByInstructorId = (req, res) => {
    Course.find({ 'instructorId': req.params.instructorId }, (err, course) => {
        if (err) {
            res.send(err);
        }
        res.json(course);
    })
}

export const deleteCourseById = (req, res) => {
    Course.findByIdAndDelete({_id : req.params.courseId}, (err, course) => {
        if(err){
            res.send(err);
        }
        res.json(course);
    })
}

export const deletCourseByInstructorId = (req, res) => {
    Course.deleteMany({instructorId : req.params.instructorId}, (err, course) => {
        if(err){
            res.send(err);
        }
        res.json(course);
    })
}

export const getCourseByCourseStage = (req, res) => {
    Course.find({'courseStage' : req.params.courseStage}, (err, course) => {
        if(err){
            res.send(err);
        }
        res.json(course);
    })
}

export const getCourseByCategory = (req, res) => {
    Course.find({'categoryName' : req.params.category}, (err, course) => {
        if(err){
            res.send(err);
        }
        res.json(course);
    })
}



export const addComment = (req, res) => {
    let tempCourse;
    Course.findById({_id : req.params.courseId}, (err, course)=>{
        if(err){
            res.send(err);
        }
        tempCourse = course;
        tempCourse.comments.push({
            "userId" : req.body.userId,
            "comment" : req.body.comment
        });  
        Course.findOneAndUpdate({_id : req.params.courseId}, {$set : {"comments" : tempCourse.comments}}, (err, course) => {
            if(err){
                res.send(err);
            }
            res.json(course);
        })
    })
}

export const rateCourse = (req, res) => {
    let tempCourse;
    Course.findById({_id : req.params.courseId}, (err, course)=>{
        if(err){
            res.send(err);
        }
        tempCourse = course;
        let rating = tempCourse.rating;
        let numberOfTimeRated = tempCourse.numberOfTimeRated;
        rating = rating + parseInt(req.body.rating);
        numberOfTimeRated+=1;

        Course.findByIdAndUpdate({_id : req.params.courseId}, {$set : {"rating" : rating, "numberOfTimeRated" : numberOfTimeRated}}, (err, course) => {
            if(err){
                res.send(err);
            }
            res.json(course);
        })
    })
}

export const getRatingByCourseId = (req, res) => {
    Course.findById({_id : req.params.courseId}, (err, course) => {
        if(err){
            res.send(err);
        }
        res.json(course.rating/course.numberOfTimeRated);
    })
}