import { Link } from 'react-router-dom';

import HamburgerMenu from '@/components/HamburgerMenu';
import { UserContext } from '@/context/user.context';
import { useContext } from 'react';
import FlatMenu from '@/components/FlatMenu';

function Nav() {
  const { userDoc, loading, error, signOut } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center font-josefin px-4 py-2 backdrop-blur-xl bg-white/70 fixed w-full top-0">
      <h1 className="font-bold italic text-xl select-none">
        <Link to={'/'}>
          <span className="bg-sky-200 p-2 rounded hover:bg-blue-300 transition ease duration-200">
            DevLink
          </span>
        </Link>{' '}
        Marketplace
      </h1>
      <nav>
        <div className="flex md:hidden">
          <HamburgerMenu
            user={userDoc}
            loading={loading}
            error={error}
            signOut={signOut}
          />
        </div>
        <div className="hidden md:flex">
          <FlatMenu
            user={userDoc}
            loading={loading}
            error={error}
            signOut={signOut}
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
