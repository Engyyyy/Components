import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import classNames from "classnames";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortColumn, ASC, DESC } = useSort(
    data,
    config
  );

  const modifiedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100 px-2"
            onClick={() => setSortColumn(column.label)}
          >
            <div className="flex items-center">
              <div className="mr-2">
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

  return <Table {...props} config={modifiedConfig} data={sortedData} />;
}

export default SortableTable;
