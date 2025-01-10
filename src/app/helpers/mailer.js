import nodemailer from 'nodemailer'


export const sendMail = async ({ email, emailType, UserId }) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            auth: {
                user: "maddison53@ethereal.email",
                pass: "jn7jnAPss4f63QBp6D",
            },
        });


        const mailoption = {
            from: 'naeem@naeem.com', 
            to: email, 
            subject: emailType === 'VERIFY' ? 'Please verify Your Email' : 'Reset Your Password',
            html: "<b>Hello world?</b>", 
        }

        const mailresponse = await transporter.sendMail(mailoptions)
        return mailresponse
    }
    catch {
        throw new Error(Error.message)
    }
}