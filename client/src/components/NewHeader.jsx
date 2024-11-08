import react from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NewHeader () {
    const navigate = useNavigate();
    return <header className="flex flex-row justify-between bg-[#2d2d2d] py-4">
        <button onClick={()=>{navigate("/posthome")}}><h1 className="text-2xl ml-5 md:text-3xl md:ml-7">PostIt</h1></button>

        <button onClick={()=>{navigate("/logout")}}><h1 className="mr-5 md:mr-7 text-xl">Logout</h1></button>
    </header>
}

export default NewHeader;