import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes"

export const MarvelHeroes = () => {
  const marvelHeroesData = heroesData.filter((heroe) => heroe.publisher === "Marvel Comics")
  return (
    <ListHeroes heroes={marvelHeroesData} title="Marvel Heroes"/>
  )
}
