"use client";

import clsx from "clsx";
import {
  Sidebar,
  SidebarBody,
  SidebarList,
  SidebarItem,
  Button,
  SidebarDropdown,
  SidebarCollapse,
  SidebarDropdownList,
} from "keep-react";
import { CaretDown, PlusCircle } from "@phosphor-icons/react";
import Image from "next/image";
import logo from "@/public/Logo-Jarvis.svg";
import { usePathname } from "next/navigation";

export default function SidebarComponent() {
  const pathname = usePathname();

  return (
    <Sidebar
      className={clsx(
        "h-full rounded-none border-0 border-r shadow-none sidebar-area w-60 px-2 py-4 bg-[#FBFBFF]"
      )}
    >
      <SidebarBody>
        <Image
          width={90}
          src={logo}
          alt="Jarvis logo"
          className="px-3 cursor-pointer mb-3"
        />

        <SidebarList>
          <SidebarItem dropdown className="mb-3">
            <SidebarDropdown open={true}>
              <SidebarCollapse className="p-3 hover:shadow-[0px_3px_4px_0px_rgba(153,155,168,0.25)] rounded-xl hover:bg-white">
                <p className="text-[#8083A3] font-medium text-xs">
                  Upcoming Tasks
                </p>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} color="#8083A3" />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-between p-3 hover:shadow-[0px_3px_4px_0px_rgba(153,155,168,0.25)] rounded-xl hover:bg-white">
                  <p className="text-[#171721] font-normal text-xs">
                    Meeting with Greentech
                  </p>
                  <p className="text-[#8083A3] text-xs bg-[rgba(228,230,232,0.85)] rounded-xl px-[6px] w-7 text-center">
                    24
                  </p>
                </SidebarItem>
                <SidebarItem className="justify-between p-3 hover:shadow-[0px_3px_4px_0px_rgba(153,155,168,0.25)] rounded-xl hover:bg-white">
                  <p className="text-[#171721] font-normal text-xs">
                    Share Holder Q1 Report
                  </p>
                  <p className="text-[#8083A3] text-xs bg-[rgba(228,230,232,0.85)] rounded-xl px-[6px] w-7 text-center">
                    5
                  </p>
                </SidebarItem>
                <SidebarItem className="justify-between p-3 hover:shadow-[0px_3px_4px_0px_rgba(153,155,168,0.25)] rounded-xl hover:bg-white">
                  <p className="text-[#171721] font-normal text-xs">
                    1to1 with Roman
                  </p>
                  <p className="text-[#8083A3] text-xs bg-[rgba(228,230,232,0.85)] rounded-xl w-7 text-center">
                    18
                  </p>
                </SidebarItem>
              </SidebarDropdownList>
              <Button variant="link" className="flex px-3 mt-2">
                <PlusCircle size={18} className="mr-1 text-[#8083A3]" />
                <span className="text-xs text-[#171721] font-semibold">
                  Add Task
                </span>
              </Button>
            </SidebarDropdown>
          </SidebarItem>

          <SidebarItem dropdown className="">
            <SidebarDropdown open={true}>
              <SidebarCollapse className="p-3 hover:shadow-[0px_3px_4px_0px_rgba(153,155,168,0.25)] rounded-xl hover:bg-white">
                <p className="text-[#8083A3] font-medium text-xs">
                  Business Workflows
                </p>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} color="#8083A3" />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-between p-3 hover:shadow-[0px_3px_4px_0px_rgba(153,155,168,0.25)] rounded-xl hover:bg-white">
                  <p className="text-[#171721] font-normal text-xs">
                    Sales Report
                  </p>
                  <p className="text-[#8083A3] text-xs bg-[rgba(228,230,232,0.85)] rounded-xl px-[6px] w-7 text-center">
                    24
                  </p>
                </SidebarItem>
                <SidebarItem className="justify-between p-3 hover:shadow-[0px_3px_4px_0px_rgba(153,155,168,0.25)] rounded-xl hover:bg-white">
                  <p className="text-[#171721] font-normal text-xs">
                    Sales Pipeline
                  </p>
                  <p className="text-[#8083A3] text-xs bg-[rgba(228,230,232,0.85)] rounded-xl px-[6px] w-7 text-center">
                    5
                  </p>
                </SidebarItem>
                <SidebarItem className="justify-between p-3 hover:shadow-[0px_3px_4px_0px_rgba(153,155,168,0.25)] rounded-xl hover:bg-white">
                  <p className="text-[#171721] font-normal text-xs">
                    Rent Development
                  </p>
                  <p className="text-[#8083A3] text-xs bg-[rgba(228,230,232,0.85)] rounded-xl w-7 text-center">
                    18
                  </p>
                </SidebarItem>
              </SidebarDropdownList>
              <Button variant="link" className="flex px-3 mt-2">
                <PlusCircle size={18} className="mr-1 text-[#8083A3]" />
                <span className="text-xs text-[#171721] font-semibold">
                  Add Businessworkflow
                </span>
              </Button>
            </SidebarDropdown>
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
    </Sidebar>
  );
}
