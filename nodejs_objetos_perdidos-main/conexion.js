const mongoose = require('mongoose')

mongoose.connect('mongodb://usuario1:1234@localhost:27017/objetosPerdidos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

module.exports=mongoose.connection