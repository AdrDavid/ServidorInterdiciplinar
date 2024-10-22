
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'batdavid70@gmail.com',
        pass: 'awpf epxa qvun xbbc'
    }
})


const enviarEmail = async (remetente, assunto, texto) => {
    try {
        await transporter.sendMail({
            from: remetente,
            to: 'batdavid70@gmail.com',
            subject: assunto,
            text: texto,
            replyTo: remetente
        })
    } catch (error) {
        console.log(error)
    }
}

export {enviarEmail}


