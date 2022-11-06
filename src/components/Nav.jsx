import { useState } from "react";
import Button from "../components/Button";

const Nav = () => {
  let links = [
    {
      name: "Gitlab",
      link: "https://gitlab.com/Getoor",
      icon: <ion-icon name="logo-gitlab"></ion-icon>
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/geetoor.mvn/",
      icon: <ion-icon name="logo-instagram"></ion-icon>
    },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full relative top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-xl cursor-pointer flex items-center font-[poppins] text-gray-800">
          <span className="text-3x1 text-cyan-600 mr-1 pt-2">
            <ion-icon name="logo-react"></ion-icon>
          </span>
          DayOne
        </div>
        <div onClick={() => setOpen(!open)} className="text-3x1 absolute right-10 top-8 cursor-pointer md:hidden">
        <ion-icon name={open ? 'close-circle' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center font-[poppins] md:pb-0 pb-12 absolute md:static bg:white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-medium md:my-0 my-7">
                {link.icon}
              <a href={link.link} target="_blank" className="text-gray-800 hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <Button>Dont Click</Button>
        </ul>
      </div>
      
    </div>
  );
};

export default Nav;
