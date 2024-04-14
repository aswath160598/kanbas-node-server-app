import mongoose from "mongoose";
import UserSchema from "./schema.js";
const usermodel = mongoose.model("Users", UserSchema);
export default usermodel;