import { Link } from 'react-router-dom'; // CORREGIDO import correcto
import MobileNav from './MobileNav';
import MainNav from './MainNav';

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          AppITZFood.com
        </Link>
        <div className="hidden md:block">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}
