import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import Categoria from './Categoria';
import Link from 'next/link';

const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <>
      <div className="ml-20">
        <Link href="/">
          <Image
            width={200}
            height={80}
            src="/assets/img/logo.svg"
            alt="Imagen logotipo"
          />
        </Link>
      </div>

      <nav className="mt-10">
        {categorias.map(categoria => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
