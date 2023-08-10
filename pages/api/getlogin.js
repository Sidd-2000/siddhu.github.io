import login from "@/models/login"
import connectdb from "@/middleware/mongoose"

const handler = async (req, res) =>{
    let Login = await login.findOne() 
    res.status(200).json({Login})
}
export default connectdb(handler);