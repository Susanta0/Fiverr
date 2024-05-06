import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from "react";

// icons
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

// Chakra UI
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Dropdown } from "./Dropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const AfterLoginNavbar = () => {
  const logout =()=>{
    localStorage.removeItem("token")
    window.location.href="/"
  }
  return (
    <Disclosure as="nav" className=" bg-white border fixed z-40 w-[100%]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-24 border">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RxCross2 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <svg
                    width="89"
                    height="27"
                    viewBox="0 0 89 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#404145">
                      <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                    </g>
                    <g fill="#1dbf73">
                      <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                    </g>
                  </svg>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex">
                    <input
                      type="search"
                      className="w-[58em] h-10 pl-5 bg-white rounded-l-sm border"
                      placeholder="What service are you looking for today?"
                    />
                    <div className=" w-12 bg-black rounded-r-sm flex justify-center items-center absolute h-10 left-[74.9%]">
                      <IoSearchOutline className=" w-[1.5em] h-5 text-white " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center justify-between sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex flex-row items-center absolute right-[5%] gap-4 ">
                  <Accordion defaultIndex={[]} allowMultiple>
                    <AccordionItem>
                      <AccordionButton className="">
                        <IoIosNotificationsOutline className="w-7 h-7" />
                      </AccordionButton>
                      <AccordionPanel
                        pb={4}
                        className=" w-[23em] h-[20em] border  absolute bg-[#EFEFF0] flex flex-col gap-5 rounded-md mt-4"
                      >
                        <div className="rounded-md flex flex-col gap-4">
                          <div className="flex items-center gap-2 bg-white">
                            <IoIosNotificationsOutline className="w-5 h-5" />
                            <p>Notifications (1)</p>
                          </div>
                          <div className="">
                            <div className="flex">
                              <IoIosNotificationsOutline className="border rounded-full w-14 h-10" />
                              <p className="text-xs">
                                Get a website built on your preferred platform
                                by our preferred freelancers.
                              </p>
                              <CiMail className="w-10 h-5" />
                            </div>
                          </div>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                  <CiMail className="w-7 h-7" />
                  <CiHeart className="w-7 h-7" />
                  <button className="  font-semibold hover:text-[#35C783] ">
                    Orders
                  </button>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            Post a Request
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#35C783] font-semibold"
                            )}
                          >
                            Refer a Friend
                          </a>
                        )}
                      </Menu.Item>
                      <hr />
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            Become a Seller
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            Billing and payments
                          </a>
                        )}
                      </Menu.Item>
                      <hr />
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            English 🌐
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            ₹ INR
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            Help & support
                          </a>
                        )}
                      </Menu.Item>
                      <hr />
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                          >
                            Invite your team{" "}
                            <span className="text-xs font-semibold text-white bg-[#2E25AD] px-2 py-1 rounded-md mx-2">
                              {" "}
                              FIVERR PRO
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <hr />
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            href="#"
                            className={classNames(
                              active ? "" : "",
                              "block px-4 py-2 text-1xl text-[#74767E] font-semibold hover:text-[#35C783]"
                            )}
                            onClick={logout}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            
          </Disclosure.Panel> */}
          {/* <Dropdown/> */}
        </>
      )}
    </Disclosure>
  );
};





// import { useHistory } from 'react-router-dom'; // Assuming you're using React Router

// function Logout() {
//     const history = useHistory();

//     // Function to handle logout
//     const handleLogout = () => {
//         // Clear session data (e.g., authentication token)
//         clearSessionData();

//         // Redirect to login page
//         history.push('/login');
//     };

//     const clearSessionData = () => {
//         // Code to clear session data (e.g., authentication token)
//         // Example: localStorage.removeItem("authToken");
//     };

//     return (
        
//                     <button onClick={handleLogout}>Logout</button>

//     );
// }

// export default Logout;
