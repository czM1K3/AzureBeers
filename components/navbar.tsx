import { Fragment, FC } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
type navbarProps = { page: string };
const Navbar: FC<navbarProps> = ({ page }) => {
  return (
    <>
      <nav className="bg-gray-800">
        <Menu as="div">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <img
                      className="h-16 w-16 cursor-pointer"
                      src="/logo.png"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/">
                      <div
                        className={`${
                          page === "index"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }  px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                      >
                        Status
                      </div>
                    </Link>

                    <Link href="/beer">
                      <div
                        className={`${
                          page === "beers"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }  px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                      >
                        Beers
                      </div>
                    </Link>

                    <Link href="/about">
                      <div
                        className={`${
                          page === "about"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }  px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                      >
                        About
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <Menu.Button
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Menu.Button>
              </div>
            </div>
          </div>
          <Menu.Items>
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <div
                    className={`${
                      page === "index"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }  block px-3 py-2 rounded-md text-base font-medium cursor-pointer`}
                  >
                    Status
                  </div>
                </Link>

                <Link href="/beer">
                  <div
                    className={`${
                      page === "beers"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }  block px-3 py-2 rounded-md text-base font-medium cursor-pointer`}
                  >
                    Beers
                  </div>
                </Link>

                <Link href="/about">
                  <div
                    className={`${
                      page === "about"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }  block px-3 py-2 rounded-md text-base font-medium cursor-pointer`}
                  >
                    About
                  </div>
                </Link>
              </div>
            </div>
          </Menu.Items>
        </Menu>
      </nav>
    </>
  );
};

export default Navbar;
