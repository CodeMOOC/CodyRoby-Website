import { Link } from "gatsby"
import React from "react"

const Footer = () => {
    return (
        <div className="m-4">
            <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
                <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
                    <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
                        <div>
                            {/*<img className="max-h-28 max-w-xs" src={logo} alt="Holo"></img>*/}
                            <p className="text-black opacity-70 text-sm mt-5 ">
                              Contenuto footer
                            </p>
                            <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()} CodyRoby
                </span>
                            </p>
                            <div className="text-slate-400 hover:text-black block-inline">
                                <p>
                                   <Link to={'/privacy-policy'}>Privacy Policy</Link>
                                </p>
                            </div>
                        </div>

                        <div className="place-self-end self-center xxs:hidden lg:block">
                            <p>Contenuto footer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
