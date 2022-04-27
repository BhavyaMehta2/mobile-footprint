import React, { useState } from "react";

import useTable from "../../../hooks/useTable";
import styles from "./table.module.css";

const Table = ({ data, rowsPerPage, search }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <div className={styles.pagination}>
        <span>
          Page{" "}
          <strong className={styles.page}>
            {page} of {range[range.length - 1]}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            className={styles.page}
            type="number"
            defaultValue={page}
            min="1"
            max={range[range.length - 1]}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) : 0;
              if (Number(e.target.value) < 1) page = 1;
              else if (Number(e.target.value) > range[range.length - 1])
                page = range[range.length - 1];
              setPage(page);
            }}
            style={{ width: "40px" }}
          />
        </span>{" "}
      </div>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.tableRowHeader}>
            <tr>
              <th className={styles.tableHeader}>Model</th>
              <th className={styles.tableHeader}>CO2 emissions</th>
              <th className={styles.tableHeader}>Production</th>
              <th className={styles.tableHeader}>Transport</th>
              <th className={styles.tableHeader}>Usage</th>
              <th className={styles.tableHeader}>Recycling</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((el) => (
              <tr className={styles.tableRowItems} key={el.Model}>
                <td className={styles.tableCell}>{el.Model}</td>
                <td className={styles.tableCell}>{el.CO2emissions}</td>
                <td className={styles.tableCell}>{el.Production}%</td>
                <td className={styles.tableCell}>{el.Transport}%</td>
                <td className={styles.tableCell}>{el.Usage}%</td>
                <td className={styles.tableCell}>{el.Recycling}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;