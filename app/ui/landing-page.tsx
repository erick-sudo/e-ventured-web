import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 flex flex-col flex-grow">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-700">Entry-Ventures</h1>
          <p className="text-lg text-gray-600">
            Your trusted partner for loans
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose Entry Ventures?
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat nibh vitae nisi placerat finibus.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Flexible Loan Options
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat nibh vitae nisi placerat finibus.
            </p>
          </div>
          <div className="bg-white shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Approval Process
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat nibh vitae nisi placerat finibus.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Apply Online
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat nibh vitae nisi placerat finibus.
              </p>
            </div>
            <div className="bg-white shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Get Approval
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat nibh vitae nisi placerat finibus.
              </p>
            </div>
            <div className="bg-white shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Receive Funds
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat nibh vitae nisi placerat finibus.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; 2024 <span className="text-indigo-700">Entry Ventures.</span> All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
