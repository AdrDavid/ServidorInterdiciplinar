import {prisma} from '../prisma.js'
import { enviarEmail } from './email.js'
class emailController {
    async enviar(req, res, next) {
        
        const { remetente, assunto, texto } = req.body;
        await enviarEmail( remetente, assunto, texto);
        res.status(200).json({ success: "Email enviado com sucesso" });
        console.log('enviado')
    }
      
}

export { emailController }


