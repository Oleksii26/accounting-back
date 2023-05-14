import DocModel from "../model/doc.js";

export const getAll = async (req, res) => {
    try {
        const docs = await DocModel.find().sort(({datum: 1}))
        res.json(docs)
    } catch (e) {
        console.log(e.message, 'getAll');
    }
}