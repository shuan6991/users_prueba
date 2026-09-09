

export default function Errores({ children }: { children: React.ReactNode }) {
    return (
        <p className="bg-red-600 text-white text-sm p-2 text-center w-full">{children}</p>
    )
}
