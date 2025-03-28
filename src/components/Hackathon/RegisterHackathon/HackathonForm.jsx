import HackathonBasicInput from "./HackathonBasicInput";
import HackathonTeamInput from "./HackathonTeamInput";
import HackathonAboutInput from "./HackathonAboutInput";
import { useSelector } from "react-redux";
import { hackathonRegisterRoutes } from "../../../APIs/APIRoutes";
import axios from "axios";
import { toast } from "react-toastify";

export default function HackathonForm() {
  const hackathonRegister = useSelector((state) => state.hackathonRegister);
  const handleHackathonSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(hackathonRegisterRoutes, {
        hackathonRegister,
      });
      if (res.data.register) {
        console.log("reg", res);
        toast.success(res.data.message);
      }
      if (res.status == 409) {
        toast.warning(res.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <form className="mx-5 md:mx-20 lg:mx-72 my-5 bg-white shadow dark:bg-gray-800 p-5 rounded-lg">
        <HackathonBasicInput />
        <HackathonTeamInput />
        <HackathonAboutInput />
        <div className="m-3 flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleHackathonSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
