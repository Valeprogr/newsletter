import express,{json}  from "express";
import {} from "dotenv/config";


const app = express();
const PORT= process.env.PORT;

app.use(express.json({ extended: true}));

app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}!`);
})