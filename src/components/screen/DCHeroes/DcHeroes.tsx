import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes"

export const DcHeroes = () => {
  const dcHeroesData = heroesData.filter((heroe) => heroe.publisher === "DC Comics")
  return (
    <>
      <ListHeroes heroes={dcHeroesData} title={"DC Heroes"}/>

    </>
  )
}
