import type { Usuario } from "../types"



export type UserActions = 
{type:'validar-sesion', payload:{usuarioDB: Usuario}}


export type UserState = {
    usuario: Usuario[]
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
            usuario: [action.payload.usuarioDB]
        }
    }


    return state
}