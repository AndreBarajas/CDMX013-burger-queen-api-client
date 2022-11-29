import ConfirmOrder from "./ConfirmOrder";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";

export default function Orders() {
    const activeUser = localStorage.getItem("email");
    console.log(activeUser)
    const navigate = useNavigate()
    if (!activeUser){
        navigate('/')
    }else{
        navigate('/orders')
    }
    return(
    <div className="container">
    <Navbar/>
    <ConfirmOrder/>
    </div>
    )
}
