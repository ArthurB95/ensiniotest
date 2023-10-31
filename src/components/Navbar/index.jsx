"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logo.png";
import ead from "../../assets/ead.png";
import gamification from "../../assets/icon-gamification.png";
import social from "../../assets/icon-social.png";
import app from "../../assets/icon-app.png";
import styles from "./index.module.css";
import { BiSolidDownArrow } from "react-icons/bi";
import brazil from "../../assets/brazil.png";
import eua from "../../assets/usa.png";
import espanha from "../../assets/spain.png";
import { BiUserCircle } from "react-icons/bi";

import {useTranslation} from 'react-i18next';

import '../../i18n';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const {t, i18n} = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src={logo} />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className={styles.hamburgueMenu}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <div className={styles.dropdown}>
                    <button className={styles.buttonSolucoes}>
                      Soluções{" "}
                      <BiSolidDownArrow
                        style={{
                          color: "#99F3F5",
                          width: "1.5vw",
                          height: "1.5vh",
                        }}
                      />
                    </button>
                    <div className={styles.dropdownContent}>
                      <div className={styles.column}>
                        <h2 className={styles.titleDropdown}>
                          SOLUÇÕES PRINCIPAIS
                        </h2>
                        <ul className={styles.informationsDropdown}>
                          <div className={styles.liColumn}>
                            <Link href="/" className={styles.linkContainer}>
                              <div className={styles.imageContainer}>
                                <Image src={ead} alt="EAD" />
                              </div>
                              <li className={styles.title}>
                                Crie uma Escola Online{" "}
                                <p className={styles.subtitle}>
                                  Lorem ipsum dolor sit amet.
                                </p>
                              </li>
                            </Link>
                          </div>
                          <div className={styles.liColumn}>
                            <Link href="/" className={styles.linkContainer}>
                              <div className={styles.imageContainer}>
                                <Image src={gamification} alt="Gamification" />
                              </div>
                              <li className={styles.title}>
                                Gamificação{" "}
                                <p className={styles.subtitle}>
                                  Lorem ipsum dolor sit amet.
                                </p>
                              </li>
                            </Link>
                          </div>
                        </ul>
                      </div>
                      <div className={styles.column}>
                        <ul className={styles.informationsDropdown}>
                          <div className={styles.liColumn}>
                            <Link href="/" className={styles.linkContainer}>
                              <div className={styles.imageContainer}>
                                <Image src={social} alt="Social" />
                              </div>
                              <li className={styles.title}>
                                Comunidade e rede social{" "}
                                <p className={styles.subtitle}>
                                  Lorem ipsum dolor sit amet.
                                </p>
                              </li>
                            </Link>
                          </div>
                          <div className={styles.liColumn}>
                            <Link href="/" className={styles.linkContainer}>
                              <div className={styles.imageContainer}>
                                <Image src={app} alt="App" />
                              </div>
                              <li className={styles.title}>
                                Aplicativo mobile{" "}
                                <p className={styles.subtitle}>
                                  Lorem ipsum dolor sit amet.
                                </p>
                              </li>
                            </Link>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className={styles.li}>
                  <Link href="/">Preços</Link>
                </li>
                <li className={styles.li}>
                  <Link href="/">Academy</Link>
                </li>
                <li className={styles.li}>
                  <Link href="/">Blog</Link>
                </li>
                <li className={styles.li}>
                  <Link href="/">Contato</Link>
                </li>
                <div className={styles.li}>
                  <div
                    style={{
                      borderLeft: "1px solid #99F3F5",
                      height: "1.5rem",
                    }}
                  ></div>
                </div>
                <li className={styles.li}>
                  <button className={styles.buttonSolucoes}>
                    <span>
                      <BiUserCircle style={{ color: "#99F3F5", marginRight: '0.5rem' }} />{" "}
                    </span>
                    <span>Entrar</span>
                  </button>
                </li>
                <li className={styles.li}>
                  <Link href="/">
                    <span className={styles.styleComecar}>Começar agora</span>
                  </Link>
                </li>
                <li className={styles.li}>
                  <div className={styles.dropdown}>
                    <button className={styles.buttonSolucoes}>
                      <span>PT</span>
                      <span>
                        <BiSolidDownArrow
                          style={{
                            color: "#99F3F5",
                            width: "1.5vw",
                            height: "1.5vh",
                          }}
                        />
                      </span>
                    </button>
                    <div
                      style={{ width: "6rem" }}
                      className={styles.dropdownContent}
                    >
                      <div className={styles.liColumn}>
                        <ul>
                          <li className={styles.subtitleLinguas}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                margin: "0.5rem",
                              }}
                            >
                              <div className={styles.imageContainer}>
                                <Image src={brazil} alt="Brazil" />
                              </div>
                              <button>PT</button>
                            </div>
                          </li>
                          <li className={styles.subtitleLinguas}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                margin: "0.5rem",
                              }}
                            >
                              <div className={styles.imageContainer}>
                                <Image src={eua} alt="EUA" />
                              </div>
                              <button onClick={() => changeLanguage('en')}>EN</button>
                            </div>
                          </li>
                          <li className={styles.subtitleLinguas}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                margin: "0.5rem",
                              }}
                            >
                              <div className={styles.imageContainer}>
                                <Image src={espanha} alt="Spain" />
                              </div>
                              <button>ES</button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
