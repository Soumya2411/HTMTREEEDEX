const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/treedex', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const mySchema = new mongoose.Schema({
    location: String,
    tree_count: Number,
    tree_type: String,
    tree_height: String,

});

const AreaTreeData = mongoose.model('myModel', mySchema);

const myschema2 = new mongoose.Schema({
    Industry_name:String,
    Owner_name:String,
    location:String,
    trees_counted:Number,
    trees_replaced:Number,
    trees_planted_new:Number,
    images:Image
})
const Replaced=mongoose.model("Replaced",myschema2)
app.post('/saveDatar', async (req, res) => {
    console.log(req.body)
    const newData = new Replaced(req.body);
    const result = await newData.save();
    res.send(result);
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});