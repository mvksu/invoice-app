import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useAppDispatch } from "../../app/hooks";


const Return: FC = () => {
  const dispatch = useAppDispatch()

  return (
      <button className="flex items-center my-6" type="button" onClick={() => dispatch({type: "CLOSE_FORM"})}>
        <FaAngleLeft className="text-blue-300 w-6 h-6" />
        <p className="text-white text-sm">Go Back</p>
      </button>
  );
};

export default Return;
