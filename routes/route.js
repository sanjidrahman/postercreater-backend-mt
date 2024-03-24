const route = require('express')();
const tController = require('../controller/templateController')
const upload = require('../middleware/multer')

route.get('/', (req, res) => {
    res.send('Hi from Server..!')
})
route.post('/template', upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'template', maxCount: 1 }]), tController.addTemplate);
route.get('/template', tController.getTemplate);

module.exports = route;