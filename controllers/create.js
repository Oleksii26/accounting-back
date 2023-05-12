import DocModel from "../model/doc.js"

export const create = async (req, res) => {
    try {
        const doc = new DocModel({
            number: req.body.number,
            datum: req.body.datum,
            doc: req.body.doc,
            name: req.body.name
        })
        const docs = await doc.save()
        res.json(docs)
    } catch (e) {
        console.log(e, 'create');
    }
} 