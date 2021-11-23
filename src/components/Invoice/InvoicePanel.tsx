import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import Flag from "../Reusables/Flag";
import Return from "../Reusables/Return";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const InvoicePanel: FC<any> = ({ invoice }) => {
  const dispatch = useAppDispatch();
  const id = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate('/')
    dispatch({ type: "INVOICE_DEL", payload: id });
  };

  const handleEdit = () => {
    dispatch({type: "OPEN_FORM_EDIT"})
  }

  return (
    <div>
      <Link to="/" className="flex items-center my-6">
        <FaAngleLeft className="text-blue-300 w-6 h-6" />
        <p className="text-white text-sm dark:text-primary font-bold">
          Go Back
        </p>
      </Link>
      <div className="flex items-center md:space-x-4 bg-dark-300 dark:bg-white shadow-md py-4 px-6 rounded-xl w-full justify-between mb-4">
        <p className="text-gray">Status</p>
        <Flag status={invoice.status} />
        <div className="fixed bottom-0 right-0 bg-dark-300 dark:bg-white w-full p-4 md:static">
          <div className="float-right">
            {invoice.status === ("draft" || "pending") ? (
              <button
                className="rounded-3xl px-4 py-2 bg-dark-200 text-gray mx-2 text-white hover:ring-2 hover:text-white ring-blue-300 text-sm"
                onClick={handleEdit}
              >
                Edit
              </button>
            ) : null}
            <button
              className="rounded-3xl px-4 py-2 bg-red-500 text-white font-bold z-50 filter hover:brightness-150 text-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
            {invoice.status === "pending" ? (
              <button className="rounded-3xl px-4 py-2 bg-blue-300 mx-2 text-white filter hover:brightness-110 text-sm">
                Mark as paid
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePanel;
