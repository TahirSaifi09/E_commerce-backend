import { ProductModel } from "../module/product.js";

export async function ProductController(req, res) {
  try {
    const data = await ProductModel.find({}, "-_id").lean();

    if (!data || !data.length) {
      res.status(200).json({
        error: null,
        message: "Product not found",
        data: [],
      });
      return;
    }
    res.status(200).json({
      error: null,
      message: "product fetches successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    res.send(500).json({
      error: error.message,
      message: "failed to fetches product",
      data: null,
    });
  }
}

export async function AddProduct(req, res) {
  try {
    const { sku, title, price, mrp, description } = req.body;
    if (!title || !price || !mrp || !description) {
      return res.status(400).json({
        error: "Missing requried fields",
        message: "Please proved all required details",
        data: null,
      });
    }
    // const existingProduct = await ProductModel.findOne(
    //   { sku },
    //   {
    //     _id: true,
    //   }
    // );
    const existingProduct = await ProductModel.exists({ sku });
    if (existingProduct) {
      return res.status(409).json({
        error: "product already existing",
        message: "product already existing",
        data: null,
      });
    }

    const data = await ProductModel.create({
      sku,
      title,
      price,
      mrp,
      description,
    });

    res.status(200).json({
      error: null,
      message: "Product successfully Added",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "Faild to add product",
      data: null,
    });
  }
}
