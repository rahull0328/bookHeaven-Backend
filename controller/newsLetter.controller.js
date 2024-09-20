import News from "../model/newsLetter.model.js"

export const newsLetter = async (req, res) => {
    try {
        const { email } = req.body;
        const emailUser = await News.findOne({ email });
        if(emailUser){
            res.status(400).json({message: "Already Subscribed To News Letter"})
        }
        const subsNewsLetter = new News({
            email: email
        })
        await subsNewsLetter.save()
        res.status(201).json({message: "Subscribed To News Letter !", News : {
            email: subsNewsLetter.email
        }})
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}