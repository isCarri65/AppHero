import {  Form, InputGroup } from "react-bootstrap";
import { ChangeEvent, useState } from "react";
import { heroesData } from "../../../data/heroes";
import { IHeroes } from "../../../types/IHeroes";
import styles from "./Search.module.css";
import { CardHeroe } from "../../ui/CardHeroe/CardHeroe";
export const Search = () => {
  const [heroesFound, setHeroesFound] = useState<IHeroes[]>([]);

  const handleHeroFound = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const queryInput = e.target.value;
    const heroesQuery = heroesData.filter(
      ({ superhero, alter_ego }) =>
        superhero.toLowerCase().includes(queryInput.toLowerCase()) ||
        alter_ego.toLowerCase().includes(queryInput.toLowerCase())
    );

    setHeroesFound(heroesQuery);
  };
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.containerSearch}>
          <InputGroup>
            <InputGroup.Text style={{
                border: "solid 1px #444"
              }} >Buscar</InputGroup.Text>
            <Form.Control
              style={{
                border: "solid 1px #444"
              }} 
              onChange={
                handleHeroFound
              }
              type="text"
              placeholder="Ingrese el nombre"
              className=" mr-sm-2"
            />
          </InputGroup>
        </div>
        {heroesFound.length > 0 ? (
          <div className={styles.containerList}>
            {heroesFound.map((hero) => (
              <CardHeroe hero={hero} key={hero.id} />
            ))}
          </div>
        ) : (
          <div className={styles.containerList}>Heroe no encontrado</div>
        )}
      </div>
    </>
  );
};
