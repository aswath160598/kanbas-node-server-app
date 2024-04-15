import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
    lessons: [
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        module: {
          type: String,
        },
      },
    ],
  },
  { collection: "modules" }
);
export default modulesSchema;