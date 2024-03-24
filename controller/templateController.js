const Template = require('../models/tempateModel')

const addTemplate = async (req, res) => {
    try {
        const thumbnail = req.files.thumbnail[0].filename
        const template = req.files.template[0].filename
        const newTemp = new Template({
            template: template,
            thumbnail: thumbnail
        })
        await newTemp.save()
        res.status(201).json({ message: 'Created' })
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const getTemplate = async (req, res) => {
    try {
        const templates = await Template.find()
        res.status(200).json(templates)
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

module.exports = {
    addTemplate,
    getTemplate
}