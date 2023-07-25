import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const ASC = "asc",
    DESC = "desc";

  const setSortColumn = (label) => {
    if (sortBy !== label) {
      setSortBy(label);
      setSortOrder(ASC);
    } else if (sortOrder === ASC) setSortOrder(DESC);
    else if (sortOrder === DESC) {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    const reverseOrder = sortOrder === ASC ? 1 : -1;
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      if (typeof valueA === "string")
        return valueA.localeCompare(valueB) * reverseOrder;
      else return (valueA - valueB) * reverseOrder;
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
    ASC,
    DESC,
  };
}

export default useSort;
