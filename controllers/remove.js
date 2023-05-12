import DocModel from "../model/doc.js"

export const remove = async (req, res) => {
    try {
        const docId = req.params.id
        const doc = await DocModel.findByIdAndDelete(docId)
        res.json({ doc })
    } catch (e) {
        console.log(e, 'remove')
    }
}