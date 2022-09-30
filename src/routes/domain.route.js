module.exports = src => {
    const dom = require("../controller/domain.controller.js");
    var router = require("express").Router();

    router.get("/", dom.findAll);

    router.post("/", dom.create);

    router.put("/:id", dom.update);

    router.delete("/:id" , dom.delete);

    src.use("/src/domain" , router);
}