import model from "./model.js";
export const findModulesByCourseId = (courseId) => model.find({ course: courseId });
export const deleteModule = (moduleId) => {
    return model.deleteOne({ _id: moduleId });
    };
export const createModule = (module) => {
    console.log("Modle",module)
    delete module._id;
    return model.create(module);
}
export const updateModule = (moduleId, module) => {
    return  model.updateOne({ _id: moduleId }, { $set: module });
}