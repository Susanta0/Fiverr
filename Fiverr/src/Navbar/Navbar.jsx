import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
// img
import c1 from "../assets/category1.svg";
import c2 from "../assets/category2.svg";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Navbar = () => {
  const [seen, setSeen] = useState(false);
  function togglePop() {
    setSeen(!seen);
  }

  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Disclosure
        as="nav"
        className={`flex flex-col fixed py-2 z-30 w-[100%] ${
          showBackground ? "bg-white" : "bg-transparent"
        }`}
      >
        {({ open }) => (
          <>
            <div className={`mx-auto px-2 sm:px-6 lg:px-10 `}>
              <div
                className={`relative flex h-16 items-center justify-between`}
              >
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
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start space-x-5">
                  <div className="flex h-10 flex-shrink-0 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="100px"
                      height="100px"
                    >
                      <path d="M41.86 21.321v-1.539h-2.919l-1.283-.022c-1.097 0-1.847.722-2.141 1.561v-1.539h-3.269v9.979h3.269v-2.14-3.312c0-.995.806-1.801 1.801-1.801h1.274v7.253h3.269v-2.14-3.312c0-.995.806-1.801 1.801-1.801h1.623v-2.726l-1.283-.022C42.905 19.759 42.156 20.482 41.86 21.321zM18.597 19.991L16.843 25.758 15.089 19.991 11.82 19.991 15.371 29.97 15.562 29.97 18.124 29.97 18.315 29.97 21.866 19.991zM5.239 19.991v-.665c0-.583.472-1.055 1.055-1.055h2.064v-2.737H5.523c-1.962 0-3.553 1.591-3.553 3.553v.905H.059v2.645h1.911v7.334H5.24v-7.334h3.118v7.334h3.269v-7.334-2.645H8.358 5.239zM26.398 19.857H26c-2.678 0-4.849 2.171-4.849 4.849v.548c0 2.678 2.171 4.849 4.849 4.849h.885c1.834 0 3.403-1.132 4.048-2.735l-2.884-.842c0 0-.345.988-1.548.988-1.358 0-2.077-.744-2.172-1.586h-.001v-.005c-.007-.061-.01-.123-.01-.185h3.688 3.242v-1.032C31.248 22.028 29.077 19.857 26.398 19.857zM24.322 23.814c.039-.897.777-1.613 1.684-1.613h.312c.907 0 1.645.716 1.684 1.613H24.322zM47.932 26.136c-1.123 0-2.033.91-2.033 2.033s.91 2.033 2.033 2.033c1.123 0 2.033-.91 2.033-2.033C49.964 27.046 49.055 26.136 47.932 26.136z" />
                    </svg>
                    {/* <svg
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
                    </svg> */}
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className=" flex items-center">
                      <input
                        type="search"
                        className="w-[31em] h-10 pl-5 bg-transparent border"
                        placeholder="What service are you looking for today"
                      />
                      <IoSearchOutline className=" w-7 bg-black text-white h-10" />
                    </div>
                  </div>
                  <Accordion defaultIndex={[]} allowMultiple>
                    <AccordionItem>
                      <h2 className="border-none">
                        <AccordionButton
                          className=" border-none "
                          color={"white"}
                        >
                          <Box
                            className={`font-semibold ${
                              showBackground ? "text-black" : ""
                            }`}
                            as="span"
                            flex="1"
                            textAlign="left"
                          >
                            Fiverr Pro
                          </Box>
                          <AccordionIcon
                            style={{
                              color: showBackground ? "black" : "white",
                            }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        className="border w-[27em] absolute bg-white flex flex-col gap-5 rounded mt-4"
                      >
                        <div className="border px-3 py-2 rounded-md flex items-center gap-4 hover:bg-[#F5F5F5]">
                          <div>
                            <img src={c1} alt="look" className="w-28" />
                          </div>
                          <div>
                            <h2 className=" font-bold">I'm looking to hire</h2>
                            <p>
                              I'd like to work with Pro freelancers and agencies
                              while using free business tools.
                            </p>
                          </div>
                        </div>

                        <div className="border px-3 py-2 rounded-md flex items-center gap-4 hover:bg-[#F5F5F5]">
                          <div>
                            <img src={c2} alt="pen" className="w-24" />
                          </div>
                          <div>
                            <h2 className=" font-bold">
                              I want to offer Pro services
                            </h2>
                            <p>
                              I’d like to work on business projects as a Pro
                              freelancer or agency.
                            </p>
                          </div>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                  <Accordion defaultIndex={[]} allowMultiple>
                    <AccordionItem>
                      <h2 className="border-none">
                        <AccordionButton
                          bg={"transparent"}
                          _hover={{ bg: "transparent" }}
                          className="border-none"
                          color={"white"}
                        >
                          <Box
                            className={`font-semibold ${
                              showBackground ? "text-black" : ""
                            }`}
                            as="span"
                            flex="1"
                            textAlign="left"
                          >
                            Explore
                          </Box>
                          <AccordionIcon
                            style={{
                              color: showBackground ? "black" : "white",
                            }}
                          />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        className="border w-[23em] absolute bg-white rounded mt-4"
                      >
                        <div className=" px-2 py-1 hover:bg-[#F5F5F5]">
                          <h2 className=" font-semibold">Discover</h2>
                          <p>Inspiring projects made on Fiverr</p>
                        </div>
                        <div className="px-2 py-1 hover:bg-[#F5F5F5]">
                          <h2 className=" font-semibold">Community</h2>
                          <p>Connect with Fiverr’s team and community</p>
                        </div>
                        <div className="px-2 py-1 hover:bg-[#F5F5F5]">
                          <h2 className="font-semibold">Guides</h2>
                          <p>In-depth guides covering business topics</p>
                        </div>
                        <div className="px-2 py-1 hover:bg-[#F5F5F5]">
                          <h2 className=" font-semibold">Podcast</h2>
                          <p>Inside tips from top business minds</p>
                        </div>
                        <div className="px-2 py-1 hover:bg-[#F5F5F5]">
                          <h2 className="font-semibold">Learn</h2>
                          <p>Professional online courses, led by experts</p>
                        </div>
                        <div className="px-2 py-1 hover:bg-[#F5F5F5]">
                          <h2 className="font-semibold">Blog</h2>
                          <p>News, information and community stories</p>
                        </div>
                        <div className="px-2 py-1 hover:bg-[#F5F5F5]">
                          <h2 className="font-semibold">Logo Maker</h2>
                          <p>Create your logo instantly</p>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                  <BasicUsage textColor={showBackground} />
                  <Box className="flex items-center">
                    <h2
                      className={`font-semibold ${
                        showBackground ? "text-black" : "text-white"
                      }`}
                    >
                      Become a Seller
                    </h2>
                  </Box>
                  <Button
                    bg={"transparent"}
                    _hover={{ bg: "transparent" }}
                    color={"white"}
                    style={{ color: showBackground ? "black" : "white" }}
                    onClick={togglePop}
                  >
                    Sign in
                  </Button>
                  {seen ? <Register toggle={togglePop} /> : null}

                  <Button
                    bg={"transparent"}
                    _hover={{ bg: "#22A869" }}
                    border={"2px solid white"}
                    color={"white"}
                    style={{
                      color: showBackground ? "#22A869" : "",
                      backgroundColor: showBackground ? "white" : "",
                      border: `2px solid ${
                        showBackground ? "#1DBF73" : "white"
                      }`,
                    }}
                    onClick={togglePop}
                  >
                    join
                  </Button>
                </div>
              </div>
            </div>

            <Dropdown textColor={showBackground} />
          </>
        )}
      </Disclosure>
    </>
  );
};

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Dropdown } from "../Components/Dropdown";
import { Register } from "../Components/Register";

export default function BasicUsage({ textColor }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        color={"white"}
        style={{ color: textColor ? "black" : "white" }}
      >
        🌐 English
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select your preferences</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab color={"green"}>Language</Tab>
                <Tab color={"green"}>Currency</Tab>
              </TabList>

              <TabPanels>
                <TabPanel className="flex flex-col gap-2 ">
                  <p className="hover:bg-[#F5F5F5]">English</p>
                  <p className="hover:bg-[#F5F5F5]">Deutsch</p>
                  <p className="hover:bg-[#F5F5F5]">Español</p>
                  <p className="hover:bg-[#F5F5F5]">Français</p>
                  <p className="hover:bg-[#F5F5F5]">Português</p>
                  <p className="hover:bg-[#F5F5F5]">Italiano</p>
                  <p className="hover:bg-[#F5F5F5]">Nederlands</p>
                </TabPanel>

                <TabPanel className="flex flex-col gap-2">
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">United States Dollar</h2>
                    <p className=" text-sm">USD - $</p>
                  </div>
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">Euro</h2>
                    <p className=" text-sm">EUR - €</p>
                  </div>
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">British Pound</h2>
                    <p className=" text-sm">GBP - £</p>
                  </div>
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">Australian Dollar</h2>
                    <p className=" text-sm">AUD - A$</p>
                  </div>
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">Canadian Dollar</h2>
                    <p className=" text-sm">CAD - CA$</p>
                  </div>
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">Israeli Shekel</h2>
                    <p className=" text-sm">ILS - ₪</p>
                  </div>
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">Brazilian Real</h2>
                    <p className=" text-sm">BRL - R$</p>
                  </div>
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">Hong Kong Dollar</h2>
                    <p className=" text-sm">HKD - HK$</p>
                  </div>
                  <div className="hover:bg-[#F5F5F5]">
                    <h2 className=" font-semibold">Swedish Krona</h2>
                    <p className=" text-sm">SEK - SEK</p>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
