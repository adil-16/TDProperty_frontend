"use client";


const TablePagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-2 my-3 w-full items-center justify-center">
      <button
        className="rounded-full bg-[#F3F2F7] w-7 h-7 flex justify-center items-center"
        onClick={() => handlePrevPage()}
      >
        {"<"}
      </button>
      <div className="rounded-full bg-[#F3F2F7] h-7 flex justify-center items-center text-xs">
        {renderPageNumbers().map((pgno, index) => (
          <button
            className={
              currentPage === pgno
                ? "text-white font-semibold px-2 bg-secondary w-8 h-8 flex items-center justify-center rounded-full"
                : "text-themetext px-2"
            }
            onClick={() => setCurrentPage(pgno)}
            key={index}
          >
            {pgno}
          </button>
        ))}
      </div>
      <button
        className="rounded-full bg-[#F3F2F7] w-7 h-7 flex justify-center items-center"
        onClick={() => handleNextPage()}
      >
        {">"}
      </button>
    </div>
  );
};

export default TablePagination;
