import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { useNavigate, useParams } from "react-router-dom"
import { heroesData } from "../../../data/heroes"
import styles from "./HeroPage.module.css"
import { Button } from "react-bootstrap"

export const HeroPage = () => {

  const [hero, setHero] = useState<IHeroes | null >(null)
  const {id} = useParams()
  const getHeroById = ()=>{
    const result = heroesData.find((h) => h.id === id);
    if (result){ 
      setHero(result)} else {
        (setHero(null))}
  }
  useEffect(()=>{
    getHeroById();
  }, []);
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate(-1)
  }
  return (
    <>
      {hero && <div className={styles.containerHeroPage}>
        <div className={styles.containeImgHeroPage}>
          <img src={`/assets/heroes/${id}.jpg`}></img>
        </div>
        <div>
          <h3>{hero.superhero}</h3>
          <ul>
            <li>
              <b>Alter ego: </b>{hero.alter_ego}
            </li>
            <li>
              <b>Publicadora: </b>{hero.publisher}
            </li>
            <li>
              <b>Primeta Aparición: </b>{hero.first_appearance}
            </li>
          </ul>
          <Button variant="primary" onClick={handleNavigate}> Regresar</Button>
        </div>

      </div>}
    </>
  )
}
