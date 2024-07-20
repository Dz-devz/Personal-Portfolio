import { useLocation } from "react-router-dom";

import dzdev from "../assets/dzdev.svg";
import { navigation } from "../constants";

function Header() {
  const pathName = useLocation();
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex item-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={dzdev} width={190} height={40} />
        </a>
        <nav className=" hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-uto lg:flex-row">
            {navigation.map((nav) => (
              <a
                key={nav.id}
                href={nav.url}
                className={`block relative font-code text-2xl uppeercase text-n-1 trnsition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  nav.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                }`}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
