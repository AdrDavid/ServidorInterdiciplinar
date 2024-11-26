import jwt from 'jsonwebtoken'
import {prisma} from '../prisma.js'

class userController{
    constructor(){
        this.login = this.login.bind(this)
    }

    async getAll(req, res, next){
        try{
            const users = await prisma.user.findMany()
            res.status(200).json(users)
        }catch(error){
            next(error)
        }
    }

    async cadastro(req,res, next){
        try {
            const createUser = await prisma.user.create({ data: req.body })
            res.status(200).json({success: 'Usuário criado com sucesso.'});
        } catch (e) {
            res.status(500).json({error: 'Erro criar usuários.'}); 
        }
    }

    async getPorEmail(email, pass){
        const user = prisma.user.findUnique({
            where: {
                email: email,
                password: pass
            },
        })

        return user
    }


    async perfil(req,res, next){
        try{
            const token = req.headers['authorization']
            const chavePrivada = "teste"

            console.log(token)

            jwt.verify(token, chavePrivada, (err, userInfo)=>{
                if(err){
                    res.status(403).end();
                    return
                }

                res.status(200).json(userInfo)
            })
        }catch(error){
            console.log(error)
            res.status(500).json({error: 'Erro ao verificar token.'})
        }
    }


    async login(req,res, next){
        const {
            email,
            password,
        } = req.body;

        try {
            const user = await this.getPorEmail(email, password)
            const chavePrivada = "teste"

            if(user){
                jwt.sign(user,chavePrivada, (err, token) => {
                    if(err){
                        res.status(500).json({mensagem: "Erro ao gerar o JWT"})
                        return
                    }
                    res.status(200).json({token})
                })
            }else{
                res.status(401).json({mensagem: "Email ou senha inválidos"})
            }
        }catch(e){
            res.status(500).json({error: 'Erro ao gerar token.'})
        }
    }

}

export {userController}