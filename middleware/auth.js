import jwt from 'jsonwebtoken';

export default function auth(request, response, next){
    try{
    
        if(!request.headers.authorization){
            return response.status(403).json({message: 'token nao encontrado'})
        }

        const token = request.headers.authorization.split(' ')[1]
        jwt.verify(token, 'teste', (err, decoded) =>{

            if(err){

                return response.status(401).json({message: 'USUARIO NAO AUTORIZADO'})
            }
            request['payload'] = decoded
            next()
            
        })

    }catch(err){
        console.log(err)
        return response.status(500).json({message: 'Falha ao verificar token'})
    }
}


