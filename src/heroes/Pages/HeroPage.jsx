import { useParams, Navigate, Link } from "react-router-dom";
import { getHeroById } from "../helpers";


export const HeroPage = () => {

  const {id} = useParams();

  const dataHero = getHeroById(id)

  const urlImage = `/assets/heroes/${id}.jpg`

  if (!dataHero) {
    return <Navigate to="/marvel" />
  }

  return (
    <>

      <div className="page-hero mt-4">
        <div className="page-hero__image animate__animated animate__fadeInUp">
          <img src={urlImage} alt={dataHero.superhero} />
        </div>
        <div className="page-hero__details">
          <h1>{dataHero.superhero}</h1>
          <p>{dataHero.id}</p>
          <p>{dataHero.publisher}</p>
          <p>{dataHero.characters}</p>
          <Link className="bottom-rigth" to="/">   ...Volver </Link>
        </div>
      </div>
    </>
  )
}
