import classNames from "classnames";
import useNavContext from "../hooks/use-nav-hook";

function Link({ children, to, className, activeClassName }) {
  const { navigate, currentPath } = useNavContext();

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "text-blue-500",
    className,
    to === currentPath && activeClassName
  );

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
