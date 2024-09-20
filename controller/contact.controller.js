import Contact from "../model/contact.model.js"

export const contactUs = async (req, res) => {
    try {
        const { username, email, message } = req.body;
        const sendMessage = new Contact({
            username: username,
            email: email,
            message: message
        })
        await sendMessage.save()
        res.status(201).json({message: "Message Sent Successfully !", Contact : {
            username: sendMessage.username,
            email: sendMessage.email,
            message: sendMessage.message
        }})
    } catch (error) {
        console.log("Error :", error)
        res.status(500).json(error);
    }
}