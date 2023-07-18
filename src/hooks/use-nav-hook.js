import NavigationContext from "../contexts/NavigationContext";
import { useContext } from "react";

function useNavContext() {
  return useContext(NavigationContext);
}

export default useNavContext;
