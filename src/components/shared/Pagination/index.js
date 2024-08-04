"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";

const index = ({ pageCount, handlePageClick }) => {

  return (
    <div className={styles.pagination_container}>
      <ReactPaginate
        previousLabel={"«"}
        nextLabel={"»"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
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
    </div>
  );
};

export default index;
