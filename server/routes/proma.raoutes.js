const ProMaController = require('../controllers/proma.controllers');
module.exports = function(app){
    app.post('/api/newpm', ProMaController.createPM);
    app.get('/api/pmlist', ProMaController.getAllProduct);
    app.get('/api/pmlist/:id', ProMaController.getProduct);
    app.put('/api/pmlist/:id', ProMaController.updateProduct);
    app.delete('/api/pmlist/:id',ProMaController.deleteProduct);
}
