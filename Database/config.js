const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dosti1166:ZQVKE6RJ4MommQeq@cluster0.huk0pb3.mongodb.net/?retryWrites=true&w=majority', {
    family: 4,
}).then((res) => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err, "not connnected")
})