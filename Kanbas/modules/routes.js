
// import db from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules",  async (req, res) => {
    const { cid } = req.params;
    try{
    const modules = await dao.findModulesByCourseId(cid);
    res.send(modules);
    } catch (error) {
       
      res.status(500).send("Error: Internal Server Error");
    }
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    console.log(mid,module)
    try{
    const status = await dao.updateModule(mid, module);
    res.sendStatus(204);
    }
    catch (error) {
       
      res.status(500).send("Error: Internal Server Error");
    }
  });


  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    try{
    const module_new = await dao.createModule(newModule);
    res.send(module_new);
    }
    catch (error) {
       
      res.status(500).send("Error: Internal Server Error");
    }
  });

  app.delete("/api/modules/:mid",  async (req, res) => {
    const { mid } = req.params;
    try{
    const status = await dao.deleteModule(mid);
    res.sendStatus(200);
    }
    catch (error) {
       
      res.status(500).send("Error: Internal Server Error");
    }
  });

}
export default ModuleRoutes;