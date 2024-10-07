import { Card } from "react-bootstrap"
import { IHeroes } from "../../../types/IHeroes"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./CardHeroe.module.css"
interface ICardHeroe {
  hero: IHeroes
}

export const CardHeroe: FC<ICardHeroe> = ({hero}) => {
  const navigate = useNavigate()
  const handleNavigateHero = ()=>{
    navigate(`/hero/${hero.id}`)
  }
  return (
    <Card className={styles.card} onClick={handleNavigateHero} style={{ width: '15rem' }} >
      <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
      <Card.Body>
        <Card.Title>{hero.superhero}</Card.Title>
        <Card.Text>
          <p>
            <b>Alter Ego:</b> {hero.alter_ego}
          </p>
          <p>
            <b>Publicador:</b> {hero.publisher}
          </p>
          <p>
            <b>Primera Aparición:</b> {hero.first_appearance}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
