import { useContext, useState } from "react";
import { UserContext } from "../";

// Icons
import uploadIcon from "../../../../assets/icons/upload.svg";
import emailIcon from "../../../../assets/icons/email.svg";
import galleryIcon from "../../../../assets/icons/gallery.svg";
import pdfIcon from "../../../../assets/icons/pdf.svg";

export default function Purchases() {
  const { user, projects } = useContext(UserContext);
  const [uploadType, setUploadType] = useState();

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-10 relative">
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full">
          <div className="flex items-center justify-between w-full">
            <button
              className="bg-[#323232] text-white rounded-lg w-28 h-10 p-2 text-sm text-gray-500"
              onClick={() => {}}
            >
              Back
            </button>

            <p>New Invoice</p>

            <button
              className="bg-accountableDarkGreen text-white rounded-lg w-28 h-10 p-2 text-sm"
              onClick={() => {}}
            >
              SAVE
            </button>
          </div>
        </div>

        <div className="border-[2px] rounded-xl  border-[#323232] w-full mt-10">
          <div className="flex p-10 flex-col">
            <p className="font-bold text-white">Recipient</p>
            <hr className="border-[#323232] mt-2" />
          </div>

          <hr className="border-[#323232] my-3" />

          <div className="p-10">
            <div className="border-[2px] rounded-xl p-3 border-[#323232] w-full">
              <div className="px-5 py-3 flex flex-col gap-y-2">
                <div className="flex items-center justify-between text-white">
                  <p>Date</p>
                  <p className="text-gray-500">April 2023</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Terms</p>
                  <p className="text-gray-500">Net 30</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Due On</p>
                  <p>6 April 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex px-10 my-7 flex-col">
            <p className="font-bold text-accountableBrightGreen">
              Add Product / Service
            </p>
            <hr className="border-[#323232] mt-2" />
          </div>

          <div className="px-10">
            <div className="border-[2px] rounded-xl p-3 border-[#323232] w-full">
              <div className="px-5 py-3 flex flex-col gap-y-2">
                <div className="flex items-center justify-between text-white">
                  <p>Subtotal</p>
                  <p className="text-gray-500">USD 1235</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Tax</p>
                  <p className="text-gray-500">5%</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Balance Due</p>
                  <p>USD 1,235</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Total</p>
                  <p>USD 1567</p>
                </div>
              </div>
            </div>

            <p className="my-5 w-full lg:max-w-xl">
              Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras a volutpat arcu. Mauris sagittis urna a pellentesque dictum.
              Donec maximus ultricies suscipit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
