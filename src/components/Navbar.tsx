import React, {useState} from "react";
import {Link} from "gatsby";

import * as styles from "./navbar.module.css";
import {MdKeyboardArrowDown} from "react-icons/md";
import {StaticImage} from "gatsby-plugin-image";

import logo from '../images/roby.png'


const Navbar = () => {
    const [isShowingGames, setIsShowingGames] = useState(false);

    return (
        <header>
            <nav className="bg-transparent">
                <div className="max-w-7xl mx-auto px-3 py-5 rounded-md">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                            <img src={logo} alt={'logoRoby'} className={'max-w-14'}/>
                            <div className="ml-10 flex items-center space-x-4">
                                <Link
                                    className={styles.menuItem}
                                    to="/"
                                >
                                    Home
                                </Link>
                                <div onMouseLeave={() => setIsShowingGames(false)}
                                     onMouseEnter={() => setIsShowingGames(true)}
                                     className={'relative'}>

                                    <Link className={`${styles.menuItem} flex items-center gap-2`} to="/about"><span>Giochi
                                        Unplugged</span><span><MdKeyboardArrowDown/></span></Link>
                                    {isShowingGames &&
                                        <div className={'absolute top-6 left-0 bg-white px-4 py-2 rounded-md'}>
                                            <div className={'flex flex-col'}>
                                            <Link to={'/codyroby'}>CodyRoby</Link>
                                            <Link to={'/codycolor'}>CodyColor</Link>
                                            <Link to={'/codyfeet'}>CodyFeet</Link>
                                            <Link to={'/codymaze'}>CodyMaze</Link>
                                            <Link to={'https://codehunting.games/'} target={'_blank'}>CodeHuntingGames</Link>
                                            <Link to={'/codyway'}>CodyWay</Link>
                                        </div>
                                        </div>
                                    }
                                </div>
                                <Link to="https://academy.codyroby.it/" target={'_blank'} className={styles.menuItem}>CodyRoby Academy</Link>
                                <Link to="/products" className={styles.menuItem}>I nostri prodotti</Link>
                                <Link to="/about" className={styles.menuItem}>Chi siamo</Link>
                                <Link to="/contact" className={styles.menuItem}>Contatti</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

