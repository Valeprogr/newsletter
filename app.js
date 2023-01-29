import express,{json}  from "express";
import {} from "dotenv/config";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT= process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname +'/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/signup.html");
});
app.post("/", (req,res)=>{

    let firstName= req.body.fName;
    let lastName=  req.body.lName;
    let email = req.body.email;
    console.log(firstName, lastName, email )
})
app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}!`);
})