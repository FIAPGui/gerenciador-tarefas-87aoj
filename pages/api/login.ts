import type {NextApiRequest, NextApiResponse} from 'next';

export default(req : NextApiRequest, res : NextApiResponse) => {
    if(req.method === 'POST'){
        const{login, password} = req.body;
        if(login === 'rm345048@fiap.com.br' && password === 'senha000'){
            return res.status(200).json({msg: 'Login Autenticado!'});
        }
        return res.status(400).json({error: 'Usuário não encontrado!'});
    }
    return res.status(405).json({error: 'Método informado não é permitido!'});
}