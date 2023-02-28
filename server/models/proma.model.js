const mongoose = require('mongoose');
const ProdMaSchema = new mongoose.Schema({
    Product: { type: String,
                minlength:[4, 'Too short!.'],
                maxlength:[20, 'Too Long!.'],
                require:[true, 'Required']
            },
                
    Description: { type: String,
        minlength:[4, 'Too short!.'],
        maxlength:[30, 'Too Long!.'],
        require:[true, 'Required'] },
    Price: { type: Number,
    }

}, { timestamps: true });
module.exports.PM = mongoose.model('PM', ProdMaSchema);

