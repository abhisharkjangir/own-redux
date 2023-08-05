import { useEffect, useState } from "react";
import { useReduxContext } from "./provider";

const useSelector = (fn) => {
  const { getState, subscribe } = useReduxContext();

  const [, ReRender] = useState();

  useEffect(() => {
    subscribe((state) => {
      ReRender({ ...state });
    });
  }, []);

  return fn(getState());
};

export default useSelector;
