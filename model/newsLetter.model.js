import mongoose from "mongoose"

const newsLetterSchmea = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    }
});

const News = mongoose.model("News", newsLetterSchmea);

export default News