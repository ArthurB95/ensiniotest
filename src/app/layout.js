"use client";

import "./globals.css";

import styles from "./styles.module.css";

import Navbar from "../components/Navbar";

import Image from "next/image";

import homem from "../assets/homem.png";

import homePlaylist from "../assets/home-playlists.png";

import iconCertified from "../assets/icon-certified.png";

import playlists from "../assets/playlists.png";

import iconFolder from "../assets/icon-folder.png";

import iconPlaylist from "../assets/icon-playlists.png";

import iconTrilhas from "../assets/icon-trilhas.png";

import PostCard from "@/components/PostCard";

import { AiOutlineArrowRight } from "react-icons/ai";

import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />

      <section id="about" className={styles.containerHome}>
        <div className={styles.container}>
          <div className={styles.subtitle}>
            <h2>PLATAFORMA ALL IN ONE</h2>
          </div>

          <div className={styles.title}>
            <h1>
              Sua escolha online <br /> poderosa e lucrativa
            </h1>
          </div>

          <div className={styles.text}>
            <p>
              Tenha sua própria escola online 100% white label com <br /> rede
              social, gamificação, clube de assinaturas, <br /> ecommerce e
              sistema EAD completo
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <button
              style={{
                backgroundColor: "#00E1E7",
                width: "12rem",
                height: "4rem",
                borderRadius: "2rem",
                color: "#130C25",
                fontWeight: "bold",
                marginRight: "3rem",
              }}
            >
              Começar agora
            </button>
            <div className={styles.verVideo}>
              <span>
                <AiFillPlayCircle
                  style={{
                    color: "#00E1E7",
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "1rem",
                  }}
                />
              </span>
              <button> Ver vídeo</button>
            </div>
          </div>
        </div>

        <div className={styles.imagem}>
          <Image src={homem} />
        </div>
      </section>

      <section id="about" className={styles.containerPosts}>
        <div className={styles.containerPostsDados}>
          <div className={styles.informacoes}>
            <h2 className={styles.subtitlePensamos}>
              <div className={styles.linhaHorizontalSubtitle}></div>
              PENSAMOS EM CADA DETALHE
            </h2>
            <p>Conheça alguns dos nossos recursos ⚡</p>
          </div>

          <div className={styles.titlePostContainer}>
            <h1 className={styles.titlePosts}>
              Queremos que o aluno se sinta confortável equanto aprende
            </h1>
          </div>

          <div className={styles.cardsContainer}>
            <PostCard />
          </div>

          <div className={styles.linhaHorizontal}></div>

          <div className={styles.footer}>
            <p>🚀</p>
            <p className={styles.footerResponsivo} style={{ marginLeft: "-65rem" }}>
              {" "}
              Veja todos os outros recursos disponíveis para te ajudar
            </p>
            <p
              style={{
                marginRight: "-65rem",
                color: "#432E98",
                fontWeight: "bold",
              }}

              className={styles.verMaisResponsivo}
            >
              Ver mais
            </p>
            <p>
              <AiOutlineArrowRight style={{ color: "#432E98" }} />
            </p>
          </div>
        </div>
      </section>
    </html>
  );
}