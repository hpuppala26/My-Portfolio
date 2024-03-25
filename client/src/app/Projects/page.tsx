"use client";

import { Divider } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { projects } from "@/data/projects";
import { LinkOutlined } from "@ant-design/icons";
import Link from "next/link";
import dayjs from "dayjs";

const Page = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full pb-1 ${
          shouldAnimate
            ? "page-enter page-enter-active"
            : "page-exit page-exit-active"
        }`}
      >
        <div className="font-semibold text-[42px] w-[70%] m-auto mb-8 max-md:w-[85%]">
          Projects
        </div>
        {projects?.map((project: any, index: number) => {
          return (
            <div className="w-full my-8" key={index}>
              <div className="flex w-[70%] m-auto max-md:w-[85%] max-md:flex-col">
                <div className="w-[60%] pr-6 max-md:w-full">
                  <div className="font-medium text-[28px] mt-4 flex items-center mt-2">
                    <div>{project?.name} </div>
                    {project?.git !== "" && (
                      <div className="text-[14px] ml-3 hover:text-blue-400 cursor-pointer">
                        <Link
                          href={project?.git}
                          target="_blank"
                          className="text-black"
                        >
                          Git link <LinkOutlined />
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="text-gray-500 font-light mt-2 mb-4">
                    {dayjs(project?.start_date).format("MMM, YYYY") +
                      " - " +
                      (project?.end_date === ""
                        ? "Present"
                        : dayjs(project?.end_date).format("MMM, YYYY"))}
                  </div>
                  <div className="text-[18px] text-light">{project?.desc}</div>
                </div>
                <div className="w-[40%] max-md:w-full max-md:hidden">
                  {<img src={project?.img} className="w-3/4 h-auto" />}
                </div>
              </div>
              {/* {index !== projects.length - 1 && (
                <div className="my-8 px-6 max-md:hidden">
                  <Divider plain className="divider "></Divider>
                </div>
              )} */}
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default Page;
