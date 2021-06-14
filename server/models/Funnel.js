const mongoose = require('mongoose');
const { Schema } = mongoose;

const funnelSchema = new Schema ({
       name: { 
                type: String,
                unique: true,
                required: true
              },
        qty: { 
                type: Number,
                required: true
            }
});


mongoose.model('funnel', funnelSchema);