"use client";

import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

import Image from "next/image";

import folder from '../../assets/icon-folder.png';

import playlist from '../../assets/icon-playlists.png';

import trilhas from '../../assets/icon-trilhas.png'

import dados from "../../../db.json";

const PostCard = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get("/items");
      setItems(response.data);
    }

    fetchApi();
  }, []);
  return (
    <>
      {/* {dados.items.map((item) => (
          <div className={styles.cardsContainer}>
            <div key={item.id} className={styles.cards}>
              <Image className={styles.imageCards} width={20} height={20} src={item.image} />
              <h3 className={styles.titleCards}>{item.title.pt}</h3>
              <p className={styles.text}>{item.description.pt}</p>
            </div>
        </div>
      ))} */}

      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <Image className={styles.imageCards} src={trilhas} />
          <h3 className={styles.titleCards}>Trilhas de etapas</h3>
          <p className={styles.text}>
            Crie planos de estudos especificando aulas e/ou cursos e definindo a
            ordem que seus alunos devem estudar.
          </p>
        </div>

        <div className={styles.cards}>
          <Image className={styles.imageCards} src={playlist} />
          <h3 className={styles.titleCards}>Playlists</h3>
          <p className={styles.text}>
            Transforme uma coleção em uma playlist para poder ver vídeos e
            áudios em sequência offline.
          </p>
        </div>

        <div className={styles.cards}>
          <Image className={styles.imageCards} src={folder} />
          <h3 className={styles.titleCards}>Coleções</h3>
          <p className={styles.text}>
            Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do
            seu jeito para melhorar a experiência.
          </p>
        </div>
      </div> 
    </>
  );
};

export default PostCard;
