import { ProductModel } from "../module/product.js";

export async function ProductController(req, res){
    try{
        const data = await ProductModel.find({}, '-_id').lean();

        if(!data || !data.length){
            res.status(200).json({
                error:null,
                message: "Product not found",
                data: [],
            });
            return;
        }
        res.status(200).json({
            error:null,
            message:"product fetches successfully",
            data,
        })

    }
    catch (error){
        console.error(error);
        res.send(500).json({
            error: error.message,
            message: "failed to fetches product",
            data:null,
        });
    }
}