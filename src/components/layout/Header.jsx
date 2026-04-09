import NavItem from '../ui/NavItem'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate()
  return (
    <header className="bg-blue-950 h-20">
      <nav>
        <ul className="flex w-full items-center justify-between px-4">
          <li className="flex items-center">
            <img
              src="letrislogonew.png"
              alt="Logo"
              className="h-12 w-auto my-3"
            />
          </li>
          <li className="hidden sm:flex text-gray-300 items-center font-bold sm:gap-10 md:gap-12 lg:gap-14">
          <button onClick={()=>navigate("/")}>
            <NavItem text="home" gambar="home.svg" />
          </button>
          <button onClick={()=>navigate("/galeri")}>
            <NavItem text="Galeri" gambar="photo.png" />
            </button>  
          <button onClick={()=>navigate("/payment")}>
            <NavItem text="Pembayaran" gambar="pay.png" />
          </button>
          <button onClick={()=>navigate("/fasilitas")}>
            <NavItem text="Fasilitas" gambar="project.png" />
          </button>
          </li>
          <li className="sm:hidden">
            <img
              src="menu (2).png"
              alt="Menu"
              width={30}
              className="h-7 hover:cursor-pointer"
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}
