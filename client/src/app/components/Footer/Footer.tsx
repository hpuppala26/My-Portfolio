import { LinkedinOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-6 py-12 bg-[#F3F3F3] max-md:hidden">
      <div>
        <Divider plain className="divider">
          Contact
        </Divider>
      </div>
      <div className="flex items-center w-[80%] justify-between m-auto pt-6">
        <div>
          <div className="font-semibold mb-1">Phone</div>
          <div className="font-light">(+1) 408 210 4147</div>
        </div>
        <div>
          <div className="font-semibold mb-1">Email</div>
          <div className="font-light">sivasaikrishna.nekkalapu@sjsu.edu</div>
        </div>
        <div>
          <div className="font-semibold mb-1">Follow Me</div>
          <div>
            <Link
              href="https://www.linkedin.com/in/nssk/"
              target="_blank"
              className="text-black"
            >
              <LinkedinOutlined className="text-[18px] cursor-pointer" />
            </Link>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-1">Developed Using</div>
          <div className="font-light">Next - Typescript </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
