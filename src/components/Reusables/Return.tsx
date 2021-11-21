import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Return: FC = () => {
  return (
      <Link to="/" className="flex items-center my-6">
        <FaAngleLeft className="text-blue-300 w-6 h-6" />
        <p className="text-white text-sm">Go Back</p>
      </Link>
  );
};

export default Return;
