import React from "react";
import logo from "../../assets/svg/dashboard/logo.svg";
import sidebarButton from "../../assets/svg/dashboard/sidebarOpen.svg";
import { NavLink } from "react-router";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SIDE_MENU } from "../../constant/admin/index";

function DashboardSidebar({ open, setOpen }) {
  return (
    <div
      className={`h-screen bg-[#005C53] overflow-x-hidden no-scrollbar pb-6 flex flex-col fixed left-0 top-0 transition-all duration-300 ${
        open ? "w-[280px]" : "w-[80px]"
      }`}
    >
      {/* logo */}
      <div
        className={`w-full h-[64px] flex flex-row  items-center py-5 px-3.5 ${
          open ? "justify-between" : "justify-center"
        } `}
      >
        <div
          className={` flex flex-row items-center gap-2.5 transition-all duration-300 ${
            open ? "w-fit opacity-100" : "w-0 opacity-0"
          }`}
        >
          <img src={logo} alt="logo" />
          <h2
            className={`text-[#A3C4C1] font-bold whitespace-nowrap text-[22px] font-public transition-all ${
              open ? "w-auto" : "w-0"
            }`}
          >
            Al Nibras
          </h2>
        </div>
        <button
          className={`w-6 cursor-pointer aspect-square transition-all duration-300 ${
            open ? "rotate-0" : "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <img
            src={sidebarButton}
            alt=" sidebar button icon"
            className="w-full h-full"
          />
        </button>
      </div>

      {/* main menu */}
      {Object.keys(SIDE_MENU).map((menuHead, index) => (
        <div key={index} className="w-full h-fit flex flex-col">
          <div
            className={`w-full h-fit py-[15px]  text-[#A3C4C1] font-DM text-xs font-normal whitespace-nowrap transition-all duration-300 ${
              open ? "px-[30px]" : "px-2"
            } `}
          >
            {menuHead}
          </div>
          <div className="w-full h-fit ">
            <ul className={`w-full h-fit flex flex-col gap-2 px-3`}>
              {SIDE_MENU[menuHead].map((items, index) => (
                <NavLink
                  key={index}
                  to={items.path}
                  end
                  className={({ isActive }) =>
                    `w-full  transition-all duration-150  h-fit py-2 px-4 flex flex-row
                 gap-2 rounded-md font-DM font-normal border-2 border-[#005C53]
                  text-base ${
                    isActive
                      ? "bg-white text-[#003F38] "
                      : " bg-transparent text-[#A3C4C1]  hover:border-[#A3C4C1] "
                  }`
                  }
                >
                  <div>
                    {" "}
                    <Icon icon={items.icon} width="24" height="24" />
                  </div>
                  {open && (
                    <span className="capitalize text-base font-DM font-normal whitespace-nowrap">
                      {items.title}
                    </span>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardSidebar;
