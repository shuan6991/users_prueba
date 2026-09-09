import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

export const useUser = ()=>{


    const context = useContext(UsuarioContext)

    if(!context){
        throw new Error('Falta el context')        
    }


    return context
}