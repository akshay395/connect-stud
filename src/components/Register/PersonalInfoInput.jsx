import { useDispatch, useSelector } from "react-redux";
import { getRegisterData } from "../../features/registerDataSlice.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function PersonalInfoInput() {
  // get register data slice
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.registerData);
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          {/* name */}
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name<span className="required-input">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={registerData?.firstName || ""}
            id="first_name"
            className="input-tag"
            placeholder="John"
            autoComplete="off"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name<span className="required-input">*</span>
          </label>
          <input
            type="text"
            id="last_name"
            name="lastName"
            value={registerData?.lastName || ""}
            className="input-tag"
            placeholder="Doe"
            autoComplete="off"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
            required
          />
        </div>
        <div>
          {/* email id */}
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address<span className="required-input">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={registerData?.email || ""}
            name="email"
            className="input-tag"
            placeholder="john.doe@company.com"
            autoComplete="off"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
            required
          />
        </div>
        <div>
          {/* phone no */}
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone No<span className="required-input">*</span>
          </label>
          <PhoneInput
            country={"us"}
            containerClass="!w-auto"
            inputClass="input-tag !w-full"
            buttonClass="bg-white border-r border-gray-300"
            value={phone}
            onChange={(phone) => {
              setPhone(phone);
              dispatch(getRegisterData({ name: "phoneNo", value: phone }));
            }}
          />
        </div>
        <div>
          {/* DOB */}
          <label
            htmlFor="dob"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date Of Birth<span className="required-input">*</span>
          </label>
          <input
            type="date"
            id="dob"
            value={registerData?.dateOfBirth?.split("T")[0] || ""}
            name="dateOfBirth"
            className="input-tag"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Country<span className="required-input">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={registerData?.country || ""}
            className="input-tag"
            placeholder="Country"
            autoComplete="off"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
            required
          />
        </div>
        <div className="flex items-center ps-4 dark:border-gray-700">
          <input
            id="male"
            type="radio"
            value="male"
            name="gender"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />
          <label
            htmlFor="male"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
        </div>
        <div className="flex items-center ps-4 dark:border-gray-700">
          <input
            id="female"
            type="radio"
            value="female"
            name="gender"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />
          <label
            htmlFor="female"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>
      </div>
    </>
  );
}
