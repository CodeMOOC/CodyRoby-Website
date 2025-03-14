import React, { useState } from 'react';
import { Icon } from '@iconify/react';
const MobileMenu = ({ links, currentPath }) => {
  const [openMenus, setOpenMenus] = useState(() => {
    const defaultState = {};
    links.forEach((_, index) => {
      defaultState[`menu-${index}`] = false;
    });
    return defaultState;
  });

  const toggleMenu = (menuKey) => {
    setOpenMenus((prevState) => {
      const newState = {
        ...prevState,
        [menuKey]: !prevState[menuKey],
      };
      return newState;
    });
  };

  return (
    <div className="relative">
      <ul className="flex flex-col items-start w-full text-xl tracking-[0.01rem] font-medium">
        {links.map(({ text, href, links: subLinks, target }, index) => {
          const isOpen = openMenus[`menu-${index}`];

          return (
            <li className={subLinks?.length ? 'dropdown' : ''} key={text}>
              {subLinks?.length ? (
                <>
                  <button
                    type="button"
                    className="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap"
                    onClick={() => toggleMenu(`menu-${index}`)}
                  >
                    {text}

                    <Icon
                      icon="tabler:chevron-down"
                      className={`w-3.5 h-3.5 ml-0.5 ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded pl-4 md:pl-0 font-medium md:bg-white/90 drop-shadow-xl">
                      {subLinks.map(
                        ({ text: text2, href: href2, links: subLinks2, target: target2 = '' }, subIndex) => {
                          const subMenuKey = `submenu-${index}-${subIndex}`;
                          const isSubMenuOpen = openMenus[subMenuKey];

                          return (
                            <li className={subLinks2?.length ? 'dropdown2' : ''} key={text2}>
                              {subLinks2 && subLinks2.length ? (
                                <div className="relative">
                                  <button
                                    type="button"
                                    className="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap"
                                    onClick={() => toggleMenu(subMenuKey)}
                                  >
                                    {text2}
                                    <Icon
                                      icon="tabler:chevron-right"
                                      className={`w-3.5 h-3.5 ml-0.5 ${isSubMenuOpen ? 'rotate-90' : ''
                                        } transition-transform`}
                                    />
                                  </button>

                                  {isSubMenuOpen && (
                                    <ul className="dropdown2-menu md:backdrop-blur-md dark:md:bg-dark rounded pl-4 md:pl-0 font-medium md:bg-white drop-shadow-xl">
                                      {subLinks2.map(({ text: text3, href: href3, target: target3 = '' }) => (
                                        <li key={text3}>
                                          <a
                                            className={`flex gap-2 items-center  no-underline text-[rgba(0,0,0,0.788)] hover:text-black first:rounded-t last:rounded-b md:hover:bg-gray-200 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 whitespace-no-wrap ${href3 === currentPath ? 'aw-link-active' : ''
                                              }`}
                                            href={href3}
                                            target={target3}
                                          >
                                            {text3}{target3 !== '' && (
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"

                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3z"
                                                />
                                              </svg>
                                            )}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ) : (
                                <a
                                  className={`no-underline text-[rgba(0,0,0,0.788)] hover:text-black flex gap-2 first:rounded-t last:rounded-b md:hover:bg-gray-200 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 whitespace-no-wrap items-center ${href2 === currentPath ? 'aw-link-active' : ''
                                    }`}
                                  href={href2}
                                  target={target2}
                                >
                                  {text2}
                                  {target2 && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3z"
                                      />
                                    </svg>
                                  )}
                                </a>
                              )}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  className={`no-underline text-[rgba(0,0,0,0.788)] hover:text-black hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap gap-2 ${href === currentPath ? 'aw-link-active' : ''
                    }`}
                  href={href}
                  target={target}
                >
                  {text}
                  {target && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3z"
                      />
                    </svg>
                  )}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
