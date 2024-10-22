
import {prisma} from '../prisma.js'


class imovelController {
    async getAll(req, res, next) {   
        try{
            const imovels = await prisma.imovel.findMany({
                include: {
                    imagem: true
                }
            })
            res.status(200).json(imovels)
        }catch(error){
            res.status(500).json({error: 'erro ao buscar imoveis'})
            console.log(error)
        }
    }

    async getId(req, res, next){
        const{id} = req.params;

        try{
            const imovels = await prisma.imovel.findUnique({
                where: {
                    id: +id,
                    
                },
                include:{imagem: true}
            })
            res.status(200).json(imovels)
        }catch(e){
            console.log(e)
            res.status(500).json({error: 'erro ao buscar imovel'})
        }
    }

    async cadastro(req, res, next) {
        try{

            const {bairro, quartos, texto, valor, rua, cidade, estado, nome, cep, lat, long} = req.body
            const quartosNumber = parseInt(quartos)
            const valorNumber = parseFloat(valor)
            const cepNumber = parseInt(cep)
            const latNumber = parseFloat(lat)
            const longNumber = parseFloat(long)
            const imagens = req.files.map(file => ({ imagem: file.filename }));

            const createImovel = await prisma.imovel.create({data:{
                bairro,
                quartos: quartosNumber,
                texto,
                valor : valorNumber,
                imagem: {
                    create: imagens
                },
                rua,
                cidade,
                estado,
                nome,
                cep: cepNumber,
                lat: latNumber,
                long: longNumber
            }})
            console.log(valor)
            res.status(200).json({succes: 'imovel criado com sucesso', createImovel})
        }catch(error){
            res.status(500).json({error: 'erro ao criar imoveis'})
            console.log(error)
        }
    }

    async deletar(req, res, next) {
        try{
            const {id} = req.params
            const deleteImovel = await prisma.imovel.delete({where: {id: +id}})
            res.status(200).json({succes: 'imovel deletado com sucesso', deleteImovel})
        }catch(error){
            console.log(error)
            res.status(500).json({error: 'erro ao deletar imoveis'})
        }
    }
}

export {imovelController}