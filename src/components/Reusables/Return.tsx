import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useAppDispatch } from "../../app/hooks";
import { motion } from 'framer-motion';


const Return: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <button className="flex items-center my-6 " type="button" onClick={() => dispatch({ type: "CLOSE_FORM" })}>
      <motion.div whileHover={{ opacity: [1, 0.1, 1] }} transition={{ ease: "linear", duration: 1.5, repeat: Infinity }} className="flex">
        <FaAngleLeft className="text-blue-300 w-6 h-6" />
      <p className="text-white text-sm dark:text-dark-400">Go Back</p>
      </motion.div>
    </button>
  );
};

export default Return;
