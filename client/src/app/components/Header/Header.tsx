"use client";
import { MenuOutlined } from "@ant-design/icons";
import { Divider, Dropdown, MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "0",
      onClick: () => {
        handleNavigation("/");
      },
    },
    {
      label: "Resume",
      key: "1",
      onClick: () => {
        handleNavigation("/Resume");
      },
    },
    {
      label: "Projects",
      key: "2",
      onClick: () => {
        handleNavigation("/Projects");
      },
    },

    {
      label: "About",
      key: "3",
      onClick: () => {
        handleNavigation("/About");
      },
    },
  ];
  return (
    <div className="bg-[#F3F3F3] py-6 px-12 flex justify-between pr-24 max-md:px-[26px]">
      <div className="flex items-center justify-between w-full sm:hidden">
        <div
          className="flex items-center"
          onClick={() => handleNavigation("/")}
        >
          <div className="w-[12px] h-[12px] bg-[#b5651d] rounded-full"></div>
          <div className="ml-2 font-mono">
            {"<"}SivaSaiKrishna{"/>"}
          </div>
        </div>
        <div>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <MenuOutlined />
          </Dropdown>
        </div>
      </div>
      <div className="flex items-center max-md:hidden">
        <div className="rounded-[999px] text-[#b5651d] bg-[#b5651d] w-fit px-[7px] py-[2px]">
          {" "}
          <span>0</span>{" "}
        </div>
        <div className="ml-2 flex items-center cursor-pointer">
          <span
            onClick={() => handleNavigation("/")}
            className="flex items-center"
          >
            {<div className="text-[20px] mr-[2px]">{"<"}</div>}
            <span className="text-[20px] font-mono">
              Siva Sai Krishna Nekkalapu
              {<span className="text-[20px]">{" />"}</span>}
            </span>
          </span>{" "}
          <div className="flex items-center ">
            <div className="text-gray-400 ml-2 mr-[2px] text-[18px] ">
              {"//"}
            </div>
            <div className="font-sm text-gray-400 text-[18px]">
              Full Stack Developer
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between  max-md:hidden">
        <div
          className={`cursor-pointer py-2 px-3 rounded-full hover:text-[#b5651d] hover:bg-[#e2b888] transition-background ease-in duration-300 delay-100${
            pathName === "/"
              ? "transition ease-in-out delay-500 text-[#b5651d] "
              : ""
          }`}
          onClick={() => handleNavigation("/")}
        >
          Home
        </div>
        <span
          className={`cursor-pointer py-2 px-3 rounded-full hover:text-[#b5651d] hover:bg-[#e2b888] transition-background ease-in duration-300 delay-100${
            pathName === "/Resume"
              ? "transition ease-in-out delay-500 text-[#b5651d] "
              : ""
          }`}
          onClick={() => handleNavigation("/Resume")}
        >
          Resume
        </span>
        {/* <Divider type="vertical" /> */}
        <div
          className={`cursor-pointer py-2 px-3 rounded-full hover:text-[#b5651d] hover:bg-[#e2b888] transition-background ease-in duration-300 delay-100 ${
            pathName === "/Projects" ? "text-[#b5651d]" : ""
          }`}
          onClick={() => handleNavigation("/Projects")}
        >
          Projects
        </div>
        {/* <Divider type="vertical" /> */}
        <div
          className={`cursor-pointer py-2 px-3 rounded-full hover:text-[#b5651d] hover:bg-[#e2b888] transition-background ease-in duration-300 delay-100 ${
            pathName === "/About" ? "text-[#b5651d]" : ""
          }`}
          onClick={() => handleNavigation("/About")}
        >
          About
        </div>
      </div>
    </div>
  );
};

export default Header;
