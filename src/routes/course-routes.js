import { get } from 'express/lib/response';
import {
    home, 
    getCourseById,
    getAllCourses, 
    addCourse, 
    getCourseByInstructorId, 
    deleteCourseById, 
    getCourseByCourseStage,
    deletCourseByInstructorId,
    getCourseByCategory,
    addComment,
    rateCourse,
    getRatingByCourseId} from '../controllers/course-controller';

const routes = (app) =>{
    app.route("/")
        .get(home);

    app.route("/course")
        .post(addCourse);

    app.route("/course/:courseId")
        .get(getCourseById);

    app.route("/getAllCourses")
        .get(getAllCourses);

    app.route("/getCourseByInstructorId/:instructorId")
        .get(getCourseByInstructorId);

    app.route("/course/:courseId")
        .delete(deleteCourseById)
        .put(addComment);

    app.route("/getCourseByCourseStage/:courseStage")
        .get(getCourseByCourseStage);

    app.route("/deleteCourseByInstructorId/:instructorId")
        .delete(deletCourseByInstructorId);

    app.route("/getCourseByCategory/:category")
        .get(getCourseByCategory);

    app.route("/course/rate/:courseId")
        .post(rateCourse)
        .get(getRatingByCourseId);    
}

export default routes;