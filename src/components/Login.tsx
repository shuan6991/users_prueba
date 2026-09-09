import { useState } from "react"
import { useUser } from "../hooks/useUser"
import type { usuario } from "../types"
import Errores from "./Errores"


export default function Login() {

    const [usuario, setUsuario] = useState<usuario>({
        user: '',
        password: ''
    })

    const { dispatch } = useUser()

    const [error, setError] = useState('')


    const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const { name, value } = e.target

        setUsuario({
            ...usuario,
            [name]: value
        })
    }


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (usuario.user === '' || usuario.password === '') {
            setError('todos los campos son obligatorios')
        } else {
            dispatch({ type: 'validar-sesion', payload: { usuario } })
        }
    }


    return (
        <form
            className="w-xl p-10 bg-slate-700 rounded-lg space-y-5 shadow-lg"
            onSubmit={handleSubmit}
        >
            <legend className="text-3xl font-bold text-white uppercase text-center">Insion de sesion</legend>

            {error && (
                <Errores>{error}</Errores>
            )}


            <div className="space-y-5">
                <label htmlFor="user" className="text-xl text-white  font-bold">Usuario:</label>
                <input
                    type="text"
                    id="user"
                    name="user"
                    className="border border-slate-300 w-full p-2 rounded-sm text-white"
                    placeholder="Digita el usuario"
                    value={usuario.user}
                    onChange={handleChange}
                />
            </div>

            <div className="space-y-5">
                <label htmlFor="password" className="text-xl text-white  font-bold">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border border-slate-300 w-full p-2 rounded-sm text-white"
                    placeholder="Digita tu contraseña"
                    value={usuario.password}
                    onChange={handleChange}
                />
            </div>

            <input type="submit" className="p-2 bg-slate-900 hover:bg-slate-800 w-full rounded-sm text-white uppercase font-bold cursor-pointer" value="Ingresar" />

        </form>
    )
}
