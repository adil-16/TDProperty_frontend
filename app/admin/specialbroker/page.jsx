"use client";

import { useState } from "react";
import BackButton from "@/components/Buttons/BackButton";
import SpecialBrokerTable from "@/components/Tables/SpecialBrokerTable";
import { useRouter } from "next/navigation";

const SpecialBrokerPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col px-4 md:px-10 py-5 gap-3">
      <div className="flex justify-between mt-3">
        <h1 className="text-3xl font-bold">Special Broker</h1>
        <button
          className="bg-primary px-8 py-3 rounded-full font-semibold text-sm"
          onClick={openModal}
        >
          + Assign Special Broker
        </button>
      </div>
      <SpecialBrokerTable isModalOpen={isModalOpen} />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold mt-3">Membership History</h2>
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary text-white px-4 py-2 rounded-md"
                  onClick={closeModal}
                >
                  Assign
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialBrokerPage;
