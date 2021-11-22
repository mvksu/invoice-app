import { FC } from "react";

const FormButtons: FC = () => {
  return (
    <div className="bg-dark-500 h-16 w-full flex border-t border-dark-300 justify-end px-8 pt-2">
      <button className="btn rounded-3xl bg-dark-200 px-4 m-2 text-gray text-sm font-bold filter hover:brightness-125">
        Discard
      </button>
      <button className="btn rounded-3xl bg-dark-300 px-4 m-2 text-gray text-sm hover:ring-1 ring-blue-300">
        Save as Draft
      </button>
      <button className="btn rounded-3xl bg-blue-300 px-4 m-2 text-white text-sm  font-bold filter hover:brightness-110">
        Save & Send
      </button>
    </div>
  );
};

export default FormButtons;
