"use client";
import AddNoteModal from "@/components/Modals/AddNoteModal";
import Calendar from "@/components/Scheduler/Scheduler/Calendar";
import SortSvg from "@/components/Svgs/SortSvg";
import Image from "next/image";
import {  useRouter } from "next/navigation";
import { useState } from "react";

const Work = () => {
    const router = useRouter();
    const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);


  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="flex flex-col px-[100px] py-[15px]">
      <div className="flex flex-col px-3 ">
        <h1 className="text-[32px] font-bold">Work Management - Scheduled Times</h1>
        {/* Added row with current date and buttons */}
        <div className="flex items-center justify-between my-3">
          <p className="text-[18px] font-bold">{getCurrentDate()}</p>
          <div className="flex gap-x-[10px]">
            {/* Your plus button */}
            {/* <button
                className="bg-primary border px-4 font-bold"
                style={{
                    borderRadius: '100px',
                    fontSize: '24px'
                }}
                onClick={() => setIsAddNoteModalOpen(true)}
            >
                +
            </button> */}

            <AddNoteModal
                    openModal={isAddNoteModalOpen}
                    setOpenModal={setIsAddNoteModalOpen}
                />
           
            <button className="px-5 border" 
                style={{
                    backgroundColor:'#001749' , 
                    color:'#fff',
                    borderRadius:15
        
        }}
        onClick={() => router.push(`/home/Clients`)}
        >
            
                <span className="flex flex-row justify-center">
                    <p className="mr-2">Clients</p>
                    <svg class="h-4 w-4 text-white mt-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> 
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  
                    <circle cx="9" cy="7" r="4" />  
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />  
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                   
                </span>
                 
            </button>
           
            <button className="flex h-11 w-40 items-center justify-center gap-1 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)] text-xs font-semibold">
              <span>Filter</span>
              <SortSvg />
            </button>
            <div className="flex h-11 w-50 items-center justify-center gap-2 rounded-full border border-[1px_solid_rgba(0,0,0,0.20)] px-3 text-xs font-semibold">
              <Image
                src="/svgs/searchicon.svg"
                width={20}
                height={20}
                alt="svg"
              />
              <input
                className="w-full border-none bg-transparent outline-none"
                type="search"
                name="analyticsSearch"
                id="analyticsSearch"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-[60px]">
        <Calendar />
      </div>
      
    </div>
  );
};

export default Work;
