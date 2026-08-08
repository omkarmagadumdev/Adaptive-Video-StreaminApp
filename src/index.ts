import express,{ Express,Request,  Response} from 'express'

const app: Express = express();

app.get('/ping',(_ : Request,res : Response)=>{
        return res.json({
        message:'pong'
        });
});

app.listen(3000,()=>{
    console.log("Server is running on the port 3000");
    
});
