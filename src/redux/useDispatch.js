import { useReduxContext } from "./provider";

const useDispatch = () => {
  const { dispatch } = useReduxContext();

  return dispatch;
};

export default useDispatch;
