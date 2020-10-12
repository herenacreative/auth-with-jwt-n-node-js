const { response } = require('../helpers/index');
const { hashPassword } = require('../helpers/security')
const {
    modelGetAllProduct,
    modelGetIdProduct,
    modelPostProduct,
    modelPatchProduct,
    modelDeleteProduct
} = require('../models/product');


module.exports = {
    getAllProduct: async (req, res) => {
        try {
            const result = await modelGetAllProduct();
            return response(res, result, 'success', 200, 'Success Get All Product');
        } catch (error) {
            console.log(error)
            return response(res, null, 'failed', 500, 'Internal Server Error');
        }
    },

    getIdProduct: async (req, res) => {
        const id = req.params.id
        try {
            const result = await modelGetIdProduct(id);
            return response(res, result, 'success', 200, 'Success Get All Product');
        } catch (error) {
            console.log(error)
            return response(res, null, 'failed', 500, 'Internal Server Error');
        }
    },

    postProduct: async (req, res) => {
        const setData = req.body
        try {
            const result = await modelPostProduct(setData);
            return response(res, result, 'success', 201, 'Success Get All Product');
        } catch (error) {
            console.log(error)
            return response(res, null, 'failed', 500, 'Internal Server Error');
        }
    },

    patchProduct: async (req, res) => {
        const id = req.params.id
        const setData = req.body
        try {
            const checkProduct = await modelGetIdProduct(id)
            if (checkProduct.length > 0) {
                setData.password = hashPassword(setData.password);
                const result = await modelPatchProduct(setData, id)
                return response(res, result, 'success', 201, `Success Update Product ID ${id}`)
            }
            return response(res, null, 'failed', 404, 'Data Not Fpund');
        } catch (error) {
            console.log(error)
            return response(res, null, 'failed', 500, 'Internal Server Error');
        }
    },

    deleteProduct: async (req, res) => {
        const id = req.params.id
        try {
            const result = await modelDeleteProduct(id);
            return response(res, result, 'success', 200, 'Success Get All Product');
        } catch (error) {
            console.log(error)
            return response(res, null, 'failed', 500, 'Internal Server Error');
        }
    },

}