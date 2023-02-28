const { PM } = require("../models/proma.model");

module.exports.createPM = async (request, response) => {
    try {
        const { Product, Description, Price } = request.body;
        proma = await PM.create({
            Product,
            Description,
            Price
        });
        response.json(proma)
    } catch (error) {
        response.status(400)
        response.json(error)
    }
}

module.exports.getAllProduct = async (request, response) => {
    try {
        const product = await PM.find({})
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
module.exports.getProduct = async (request, response) => {
    try {
        const product = await PM.findOne({_id:request.params.id})
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateProduct =async (req,res) =>{
    try {
        const product = await PM.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        res.json(product);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
module.exports.deleteProduct =async (req,res) =>{
    try {
        const product = await PM.deleteOne({_id: req.params.id})
        res.json(product);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
