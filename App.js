import express from 'express';
import mongoose from "mongoose";
import Hello from "./Hello.js"
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import UserRoutes from "./Kanbas/users/routes.js";
import session from "express-session";
import "dotenv/config";

// mongoose.connect("mongodb+srv://Cluster89442:aXF2Zm56TlRE@cluster89442.0fq4prg.mongodb.net/kanbas");
mongoose.connect("mongodb+srv://Cluster89442:aXF2Zm56TlRE@cluster89442.0fq4prg.mongodb.net/kanbas");



const app = express()
// app.use(cors());
app.use(
    cors({
      credentials: true,
      // origin: "http://localhost:3000",
      origin: process.env.FRONTEND_URL
    })
   );
   

// const sessionOptions = {
//     secret: "any string",
//     resave: false,
//     saveUninitialized: false,
//   };
//   app.use(
//     session(sessionOptions)
//   );

app.use(express.json());

// app.use(
//   cors({
//       credentials: true,
//       origin: "http://localhost:3000"
//   })
// );
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(
  session(sessionOptions)
);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app)
UserRoutes(app);
app.listen(process.env.PORT || 4000);


