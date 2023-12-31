import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const classes = classNames(
    "border rounded shadow p-3 bg-white w-full",
    className
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Panel;
