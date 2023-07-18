import useNavContext from "../hooks/use-nav-hook";

function Router({ children, path }) {
  const { currentPath } = useNavContext();

  return path === currentPath && children;
}

export default Router;
