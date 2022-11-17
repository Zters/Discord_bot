import { Worker, isMainThread, parentPort }  from 'worker_threads';
import nodemailer from "nodemailer";
export default client => {
    const prefix = process.env.PREFIX
    client.on("messageCreate", message => {
        if(message.content.startsWith(prefix) == false) return
        const args = message.content.slice(1).trim().split(/ +/)
        client.on("messageCreate", message => {
        if(args[0] === "control"){
            console.log(args[1],args[2]);
            get_mail(args[1],args[2]);
            message.reply("GONDERILDI");

        }
    })
    })
  
}

function get_mail(mail,content){
    var transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xxx@gmail.com',
            pass: '****'
        }
    })
    
    var mailOptions = {
        from: 'xxxxx@gmail.com',
        to: mail,
        subject: content,
        html: '<h1>TEST MAILI</h1>'
    }
    transpoter.sendMail(mailOptions,(err,data)=>{
        if(err) console.log(err)
        else console.log("mail gonderildi")
    })
    }
    