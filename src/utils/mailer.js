const nodemailer = require('nodemailer');

require('dotenv').config();



    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    })

    const configSendMail = (email, confirmationCode, condition) =>{
        let mailOptions = {}

        if(condition == 'activate'){
            mailOptions={
                from: process.env.EMAIL,
                to: email,
                subject: "Activation Account",
                text: `Open this link for account verification : http://localhost:3000/verification/${confirmationCode} `
            }
        }


        transporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                console.log(error)
            }else{
                console.log('email sent', info.response)
            }
        })
    }

    module.exports = configSendMail
