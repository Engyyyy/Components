import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHead = config.map((column) => {
    if (column.header)
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    else return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCols = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(row)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(row)}>
        {renderedCols}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHead}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
