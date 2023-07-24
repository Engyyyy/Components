import { useState } from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import classNames from "classnames";
import Table from "./Table";

function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const ASC = "asc",
    DESC = "desc";

  const handleClick = (label) => {
    if (sortBy !== label) {
      setSortBy(label);
      setSortOrder(ASC);
    } else if (sortOrder === ASC) setSortOrder(DESC);
    else if (sortOrder === DESC) {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const modifiedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100 px-2"
            onClick={() => handleClick(column.label)}
          >
            <div className="flex items-center">
              <div className="m-2">
                <BsFillCaretUpFill
                  className={classNames({
                    invisible: column.label === sortBy && sortOrder === DESC,
                  })}
                />
                <BsFillCaretDownFill
                  className={classNames({
                    invisible: column.label === sortBy && sortOrder === ASC,
                  })}
                />
              </div>
              {column.label}
            </div>
          </th>
        ),
      };
    } else {
      return column;
    }
  });

  let modifiedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    const reverseOrder = sortOrder === ASC ? 1 : -1;
    modifiedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      if (typeof valueA === "string")
        return valueA.localeCompare(valueB) * reverseOrder;
      else return (valueA - valueB) * reverseOrder;
    });
  }

  return <Table {...props} config={modifiedConfig} data={modifiedData} />;
}

export default SortableTable;
