import mongoose from "mongoose";
import Moduleschema from "./schema.js";
const Modulesmodel = mongoose.model("ModuleModel", Moduleschema);
export default Modulesmodel;