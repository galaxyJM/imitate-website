module.exports = app =>{
     const mongoose = require('mongoose')
     
     mongoose.connect('mongodb://localhost:27017/vue-admin',
     {useNewUrlParser: true,
          useUnifiedTopology: true})
     
}