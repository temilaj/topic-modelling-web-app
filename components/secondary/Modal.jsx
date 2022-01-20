import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function Modal(props) {
  const cancelButtonRef = useRef(null);
  const { onClose, isOpen, title, width } = props;
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        // initialFocus={cancelButtonRef}
        open={isOpen}
        onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div
              className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${width}`}>
              <div className="bg-white px-4 pb-4 pt-8 sm:px-6 flex justify-end">
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="w-full text-center text-xl leading-6 font-medium text-black-bg dark:text-white font-roobert -mr-4">
                    {title}
                  </Dialog.Title>
                )}
                <button
                  type="button"
                  className="justify-center rounded-xl shadow-sm px-1 py-1 text-gray-700 focus:outline-none focus:border-gray-300 focus:border border-4 border-accent-600"
                  onClick={() => onClose()}
                  ref={cancelButtonRef}>
                  <XIcon className="h-5 w-5 text-accent-600" aria-hidden="true" />
                </button>
              </div>
              <div
                className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:mt-2 sm:align-middle sm:max-w-lg sm:w-full ${width}`}>
                <div className="pb-4 px-4 md:px-8 sm:pb-4">{props.children}</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
