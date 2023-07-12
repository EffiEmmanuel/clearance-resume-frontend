import { useContext, useState } from "react";
import { UserContext } from "../";
import Switch from "react-switch";

export default function Settings() {
  const { user, projects } = useContext(UserContext);

  //   Setting states
  const [notification, setNotification] = useState(false);
  const [fingerprint, setFingerPrint] = useState(false);
  const [screenLock, setScreenLock] = useState(false);
  const [sync, setSync] = useState(false);

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-10 relative">
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full">
          <div className="flex items-center gap-x-10 w-full">
            <button
              className="bg-[#323232] text-white rounded-lg w-28 h-10 p-2 text-sm text-gray-500"
              onClick={() => {}}
            >
              Back
            </button>

            <p>Settings</p>
          </div>

          <div className="border-[2px] border-[#323232] p-10 w-full border-dashed min-h-[80vh] border-spacing-[10rem] text-center flex flex-col">
            <p className="font-semibold text-left border-b-[0.5px] pb-3 border-b-[#323232] my-4">
              Charts of Account
            </p>
            <p className="text-left border-b-[0.5px] pb-3 border-b-[#323232] my-4">
              Company Information
            </p>
            <p className="text-left border-b-[0.5px] pb-3 border-b-[#323232] my-4">
              Email
            </p>
            <div className="flex items-center justify-between w-full border-b-[0.5px] pb-3 border-b-[#323232]">
              <p>Notification</p>
              <div>
                <Switch
                  onChange={(value) => setNotification(value)}
                  checked={notification}
                />
              </div>
            </div>

            <small className="text-gray-500 font-semibold text-left mt-4">
              Security
            </small>

            <div className="flex items-center justify-between w-full border-b-[0.5px] pb-3 border-b-[#323232] my-4">
              <p>Fingerprint</p>
              <div>
                <Switch
                  onChange={(value) => setFingerPrint(value)}
                  checked={fingerprint}
                />
              </div>
            </div>

            <div className="flex items-center justify-between w-full border-b-[0.5px] pb-3 border-b-[#323232] my-4">
              <p>Screenlock</p>
              <div>
                <Switch
                  onChange={(value) => setScreenLock(value)}
                  checked={screenLock}
                />
              </div>
            </div>

            <p
              onClick={() => {}}
              className="font-semibold cursor-pointer text-left mt-4 border-b-[0.5px] pb-3 border-b-[#323232] my-4"
            >
              Import Data
            </p>
            <p
              onClick={() => {}}
              className="font-semibold cursor-pointer text-left mt-4 border-b-[0.5px] pb-3 border-b-[#323232] my-4"
            >
              Export Data
            </p>

            <div className="flex items-center justify-between w-full border-b-[0.5px] pb-3 border-b-[#323232] my-4">
              <p>Sync</p>
              <div>
                <Switch onChange={(value) => setSync(value)} checked={sync} />
              </div>
            </div>

            <div className="flex items-center justify-between w-full border-b-[0.5px] pb-3 border-b-[#323232] my-4">
              <p>Last sync</p>
              <p className="text-gray-500">14:00 | 19 May 2023</p>
            </div>

            {/* FINANCIAL SETTINGS */}

            <small className="text-gray-500 font-semibold text-left mt-4">
              Financial Settings
            </small>

            <p
              onClick={() => {}}
              className="font-semibold cursor-pointer text-left mt-4 border-b-[0.5px] pb-3 border-b-[#323232] my-4"
            >
              Invoice Settings
            </p>
            <p
              onClick={() => {}}
              className="font-semibold cursor-pointer text-left mt-4 border-b-[0.5px] pb-3 border-b-[#323232] my-4"
            >
              Tax Settings
            </p>
            <p
              onClick={() => {}}
              className="font-semibold cursor-pointer text-left mt-4 border-b-[0.5px] pb-3 border-b-[#323232] my-4"
            >
              Manage Users
            </p>
            <p
              onClick={() => {}}
              className="font-semibold cursor-pointer text-left mt-4 border-b-[0.5px] pb-3 border-b-[#323232] my-4"
            >
              Currencies
            </p>
            <p
              onClick={() => {}}
              className="font-semibold cursor-pointer text-left mt-4 border-b-[0.5px] pb-3 border-b-[#323232] my-4"
            >
              Billing / Subscriptions
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
