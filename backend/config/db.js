const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Database connected')) //si se cumple la promesa
  .catch((error) => console.log(error)); //caso contrario
