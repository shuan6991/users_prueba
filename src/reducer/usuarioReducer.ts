import type { usuario } from "../types"



export type UserActions = 
{type:'validar-sesion', payload:{usuario: usuario}}


export type UserState = {
    usuario: usuario[]
}


export const initialState: UserState = {
    usuario: []
}


export const usuarioReducer = (    
    state : UserState = initialState,
    action: UserActions

)=>{

    if(action.type === 'validar-sesion'){
        return{
            usuario: [action.payload.usuario]
        }
    }


    return state
}