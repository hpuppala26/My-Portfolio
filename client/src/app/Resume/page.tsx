"use client";

import { Divider, Progress } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { LinkOutlined, StarFilled } from "@ant-design/icons";
import Link from "next/link";
import { resume } from "@/data/resume";

const Page = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  return (
    <div
      className={`w-full  ${
        shouldAnimate
          ? "page-enter page-enter-active"
          : "page-exit page-exit-active"
      }`}
    >
      <div className=" mb-8 w-[70%] m-auto flex items-center max-md:w-[85%]">
        <span className="text-[42px] font-semibold">Resume</span>{" "}
        <span className="ml-2 mt-3">
          <Link
            href="https://drive.google.com/file/d/1ipqAHP9C7jgAr_6r2H3LY6YvaAIMs8Uy/view?pli=1"
            target="_blank"
            className="text-blue-500"
          >
            <LinkOutlined className="text-[20px]" />
          </Link>
        </span>
      </div>
      <div className="flex  w-[70%] m-auto max-md:flex-col max-md:w-[85%]">
        <div className="w-[40%] max-md:w-full">
          <div className="font-medium text-[28px] my-4">Work Experience</div>
        </div>
        <div className="w-[60%] max-md:w-full">
          {resume?.work_experience?.map((item: any, index: number) => {
            return (
              <div className="flex flex-1 my-6 max-md:flex-col " key={index}>
                <div className="w-[30%] font-light mr-2 max-md:hidden">
                  {dayjs(item?.start_date).format("MMM, YYYY") +
                    " - " +
                    dayjs(item?.end_date).format("MMM, YYYY")}
                </div>
                <div className="w-[70%] max-md:w-full">
                  <div className="font-semibold text-[18px] mb-3">
                    {item?.role}
                  </div>
                  <div className="text-gray-500">{item?.company}</div>
                  <div className="w-[30%] font-light mr-2 max-md:w-full sm:hidden my-2 text-gray-500">
                    {dayjs(item?.start_date).format("MMM, YYYY") +
                      " - " +
                      dayjs(item?.end_date).format("MMM, YYYY")}
                  </div>
                  <p className="font-light break-words">{item?.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-4 px-6">
        <Divider plain className="divider "></Divider>
      </div>
      <div className="flex w-[70%] m-auto max-md:w-[85%] max-md:flex-col">
        <div className="w-[40%] max-md:w-full">
          <div className="font-medium text-[28px] my-4">Education</div>
        </div>
        <div className="w-[60%] max-md:w-full">
          {resume?.education?.map((item: any, index: number) => {
            return (
              <div className="flex flex-1 my-6 max-md:flex-col" key={index}>
                <div className="w-[30%] font-light mr-2 max-md:w-full max-md:hidden">
                  {!item?.in_progress
                    ? dayjs(item?.start_date).format("MMM, YYYY") +
                      " - " +
                      dayjs(item?.end_date).format("MMM, YYYY")
                    : dayjs(item?.start_date).format("MMM, YYYY") +
                      " - " +
                      "Present"}
                </div>
                <div className="w-[70%] max-md:w-full">
                  <div className="font-semibold text-[18px] mb-3 w-full">
                    {item?.college_name}
                    <div className="w-[30%] font-light mt-2 max-md:w-full sm:hidden">
                      {!item?.in_progress
                        ? dayjs(item?.start_date).format("MMM, YYYY") +
                          " - " +
                          dayjs(item?.end_date).format("MMM, YYYY")
                        : dayjs(item?.start_date).format("MMM, YYYY") +
                          " - " +
                          "Present"}
                    </div>
                  </div>

                  <div className="font-light mb-2">{item?.major}</div>
                  <div className="font-light">
                    <span>GPA</span> <span>{item?.gpa}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-4 px-6">
        <Divider plain className="divider"></Divider>
      </div>
      <div className="flex mb-12 w-[70%] m-auto max-md:flex-col max-md:w-[85%]">
        <div className="w-[40%] max-md:w-full">
          <div className="font-medium text-[28px] my-4">Skills & Expertise</div>
        </div>
        <div className="w-[60%] max-md:w-full">
          <div className="flex flex-1 my-6 max-md:flex-col">
            <div className="mr-2 w-[30%] font-light mr-2 max-md:w-full">
              <div>
                <StarFilled className="mr-1" />
                Top Skills
              </div>
              <ul className="pl-4 max-md:columns-2">
                {resume?.skills?.skills?.map((skill: string, index: number) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </div>
            <div className="w-[70%] max-md:w-full ">
              {resume?.skills?.expertise.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <span>{item?.topic}</span>
                    <Progress
                      percent={item?.rating}
                      status="active"
                      size="small"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
