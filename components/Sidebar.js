import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria";

const Sidebar = () => {
  const {categorias} = useQuiosco();

  return (
    <>
        <div className="ml-20">
          <Image 
          width={200} 
          height={80} 
          src= "/assets/img/logo.svg" 
          alt="Imagen logotipo"
          
          />
        </div>

        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria
            key={categoria.id}
            categoria = {categoria}
            />


          ))}

        </nav>

    </>
  )
}

export default Sidebar