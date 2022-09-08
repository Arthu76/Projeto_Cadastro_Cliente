import Titulo from "./Titulo"

// Irá dizer quais propriedades vão ser passadas
interface LayoutProps{
  titulo: string // caso não exista um "?", quer dizer que é obrigatório
  children: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Titulo>{props.titulo}</Titulo>
      <div className="p-6">
        {props.children}
      </div>
    </div>
  )
}