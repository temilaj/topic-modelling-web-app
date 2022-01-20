import { Fragment, useContext, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';

import AppContext from '../../data/context/AppContext';
import Modal from '../secondary/Modal';
import LoginForm from '../partials/LoginForm';
import SignUpForm from '../partials/SignUpForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavMenu() {
  const { isSignedIn, isModalOpen, setModalState } = useContext(AppContext);
  const [authForm, setAuthForm] = useState('LOG_IN');
  const [modalTitle, setModalTitle] = useState('Log in to Spark! Topic Modeling');
  const router = useRouter();

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const handleClick = (type = 'LOG_IN') => {
    setAuthForm(type);
    switch (type) {
      case 'LOG_IN':
        setModalTitle('Log in to Spark! Topic Modeling');
        break;
      case 'SIGN_UP':
        setModalTitle('Create an account');
        break;
      case 'FORGOT_PASSWORD':
        setModalTitle('Recover password');
        break;
      case 'RESET_PASSWORD':
        setModalTitle('Reset password');
        break;
      default:
        break;
    }
    if (!isModalOpen) {
      openModal();
    }
  };

  const renderAuthForm = () => {
    switch (authForm) {
      case 'LOG_IN':
        return (
          <LoginForm
            onForgotPasswordClick={() => handleClick('FORGOT_PASSWORD')}
            onSignUpClick={() => handleClick('SIGN_UP')}
          />
        );
      default:
        return <SignUpForm onLoginClick={() => handleClick('LOG_IN')} />;
    }
  };

  return (
    <>
      <div className="flex">
        <h4 className="self-center text-lg mr-6">Profile</h4>
        <Disclosure as="nav" className="">
          {({ open }) => (
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="max-w-xs bg-gray-300 p-2 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-6 w-6 rounded-full" src="/images/user-icon.svg" alt="" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-20 focus:outline-none">
                  {isSignedIn ? (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700')}>
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                  ) : (
                    <>
                      <Menu.Item>
                        {() => (
                          <button
                            type="button"
                            onClick={() => handleClick('LOG_IN')}
                            className="w-full bg-white whitespace-nowrap text-left font-medium text-blue-700 hover:bg-blue-600 px-4 py-3 rounded hover:text-white my-0.5">
                            Log in
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {() => (
                          <button
                            type="button"
                            onClick={() => handleClick('SIGN_UP')}
                            className="w-full bg-blue-700 whitespace-nowrap text-left font-medium text-white hover:bg-white px-4 py-3 rounded hover:text-blue-700 my-0.5">
                            Sign up
                          </button>
                        )}
                      </Menu.Item>
                    </>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </Disclosure>
      </div>
      <Modal onClose={closeModal} isOpen={isModalOpen} title={modalTitle} showLogo={!!modalTitle}>
        {renderAuthForm()}
        {/* {ModalChild()} */}
        {/* <ModalChild /> */}
      </Modal>
    </>
  );
}
