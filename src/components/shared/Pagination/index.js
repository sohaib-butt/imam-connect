"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

const index = ({ currentPage, pageCount, handlePageClick }) => {
  const handleFirstPageClick = () => {
    handlePageClick({ selected: 0 });
  };

  const handleLastPageClick = () => {
    handlePageClick({ selected: pageCount - 1 });
  };

  return (
    <div className={styles.pagination_container}>
      <div className="mr-[5px] ml-[5px]">
        <button
          onClick={handleFirstPageClick}
          className="flex justify-center items-center w-[32px] h-[32px] rounded-[8px] border border-[#f1f1f1] text-[#333333] no-underline text-[13px] font-poppins font-[500] hover:bg-[#f9f9f9]"
        >
          «
        </button>
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        forcePage={currentPage}
        activeClassName={styles.active}
        pageClassName={styles.page_item}
        pageLinkClassName={styles.page_link}
        previousClassName={styles.page_item}
        previousLinkClassName={styles.page_link}
        nextClassName={styles.page_item}
        nextLinkClassName={styles.page_link}
        breakClassName={styles.page_item}
        breakLinkClassName={styles.page_link}
      />
      <div className="mr-[5px] ml-[5px]">
        <button
          onClick={handleLastPageClick}
          className="flex justify-center items-center w-[32px] h-[32px] rounded-[8px] border border-[#f1f1f1] text-[#333333] no-underline text-[13px] font-poppins font-[500] hover:bg-[#f9f9f9]"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default index;
