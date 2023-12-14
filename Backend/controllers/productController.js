const ProductModel=  require("../models/products");
exports.createProduct = async (req,res) => {
    try {
    const {title, description, price, imgUrl} = req.body;
    } catch (e) {
        res.status(500).json({error: e.message});
exports.products = async(req,res) => {
    try {
        const products = await ProductModel.find({title:"Mobile"});
        res.status(200).json(products);
    } catch (e) {
      res.status(500).json({error: e.message});
};
let newProduct = newProductModel ({
    title, description, price, imgUrl,
})}}};