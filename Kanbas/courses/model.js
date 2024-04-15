import mongoose from "mongoose";
import Courseschema from "./schema.js";
const CourseModel = mongoose.model("CourseModel", Courseschema);
export default CourseModel;