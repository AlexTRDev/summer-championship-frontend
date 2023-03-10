import React from 'react'
export interface ModalInterface {}

const Modal: React.FC<ModalInterface> = () => {
  return (
    <div className="overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/*This is the background that overlays when the modal is active. It  has opacity, and that's why the background looks gray.*/}
        {/*---
  add this code to this very first div:
  fixed inset-0
	  */}
        <div className="transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true" />
        <span className="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">
          ​
        </span>
        {/*Modal panel : This is where you put the pop-up's content, the div on top this coment is the wrapper */}
        <div className="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
          <div>
            <div className="mt-3 text-left sm:mt-5">
              <h1 className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                Deactivate account
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp;
                Next.js.
              </p>
            </div>
          </div>
          <div className="mt-6 sm:flex">
            <div className="mt-3 rounded-lg sm:mt-0">
              <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Cancel
              </button>
            </div>
            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Deactivate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
