import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { initialState, usuarioReducer, type UserActions, type UserState } from "../reducer/usuarioReducer";

type UsuarioProviderProps = {
    children : ReactNode
}

type UsuarioContextProps ={
    state: UserState
    dispatch: Dispatch<UserActions>
}

export const UsuarioContext = createContext<UsuarioContextProps>(null!)


export const UsuarioProvider = ({children}: UsuarioProviderProps)=>{

    const[state, dispatch] = useReducer(usuarioReducer, initialState)


    return(
        <UsuarioContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}