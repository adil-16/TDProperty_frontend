"use client";

import React, { useEffect, useState } from "react";
import UpDownSortIconSvg from "../Svgs/UpDownSortIconSvg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TablePagination from "./TablePagination";
import RecordButton from "../Dropdowns/RecordDropdown";
import SortByButton from "../Dropdowns/UsersSortByDropdown";

const TableWithSort = ({ isModalOpen = false ,headings, data, size, redirectUrl }) => {
  const [sort, setSort] = useState({ keyToSort: "", order: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowCount, setRowCount] = useState(10); // [10, 20, 30, 40]
  const router = useRouter();

  useEffect(()=>{
      console.log(isModalOpen.isModalOpen)
    },[isModalOpen])

  const handleHeadingClick = (heading) => {
    setSort((prevSort) => {
      if (prevSort.keyToSort === heading.key) {
        return {
          keyToSort: prevSort.keyToSort,
          order: prevSort.order === "asc" ? "desc" : "asc",
        };
      } else {
        return {
          keyToSort: heading.key,
          order: "asc",
        };
      }
    });
  };

  const getDataSorted = (arrayToSort) => {
    if (sort.order === "asc") {
      return arrayToSort.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
      );
    }
    return arrayToSort.sort((a, b) =>
      a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
    );
  };

  const getDataPaginated = (arrayToPaginate) => {
    const startIndex = (currentPage - 1) * rowCount;
    const endIndex = startIndex + rowCount;
    return arrayToPaginate.slice(startIndex, endIndex);
  };
  const paginatedSortedData = getDataPaginated(getDataSorted(data));
  return (
    <div className="mt-3 w-full">
      <div className="flex gap-3">
       { !isModalOpen?.isModalOpen && ( 
        <>
        <RecordButton
          size={size}
          rowCount={rowCount}
          setRowCount={setRowCount}
        />
        <SortByButton size={size} />
        </>)}
        <div
          className={`flex items-center justify-center gap-2 rounded-full font-semibold border border-[rgba(0,0,0,0.20)] ${
            size == "lg" ? "h-10 w-72 px-3 text-sm" : "h-9 w-56 px-2 text-xs"
          }`}
        >
          <Image src="/svgs/searchicon.svg" width={15} height={15} alt="svg" />
          <input
            className="outline-none border-none bg-transparent w-full"
            type="search"
            name="analyticsSearch"
            id="analyticsSearch"
            placeholder="Search listing"
          />
        </div>
      </div>
      <div className="rounded-lg h-fit w-full overflow-hidden border border-[#E9ECEF] mt-3">
        <table className="table-auto w-full">
          <thead
            className={`bg-themetableheader uppercase ${
              size == "lg" ? "h-10" : "h-8"
            }`}
          >
            <tr className="text-xs text-themetext">
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 text-left ${
                    size === "lg" ? "" : "text-[10px]"
                  }`}
                  onClick={() => handleHeadingClick(heading)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <p>{heading.label}</p>
                    <UpDownSortIconSvg />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedSortedData.map((item, index) => (
              <tr
                key={index}
                className="border border-[0.717px_solid_rgba(0,0,0,0.20)]"
              >
                {headings.map((heading, index) => (
                  <td
                    key={index}
                    className={`text-themetext px-4 py-2 ${
                      size == "lg" ? "h-14 text-sm" : "h-10 text-xs"
                    }`}
                  >
                    {heading.key === "name" || heading.key === "property" ? (
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() =>
                          redirectUrl &&
                          router.push(`${redirectUrl}/${item["id"]}`)
                        }
                      >
                        <Image
                          src={item["profilePic"]}
                          alt="profile"
                          width={32}
                          height={32}
                        />
                        <p className="font-medium">{item[heading.key]}</p>
                      </div>
                    ) : (
                      item[heading.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs mt-5">
        Total Records: <span className="font-semibold ">{data.length}</span>
      </p>
      <div className="w-full flex justify-center">
        <TablePagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / 10)}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TableWithSort;
