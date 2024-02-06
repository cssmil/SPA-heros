import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  }) => {

  const urlImage = `/assets/heroes/${id}.jpg`

  return (
    <>
    <div className="card__hero ">
      <img className="" src={urlImage} alt={superhero} />
      <div className="p-2">
        <p>{superhero}</p>
        <p className="text-muted ">{first_appearance}</p>
        <Link to={`/hero/${id}`}> 
        Ver mas...
        </Link>
      </div>
    </div>
    </>
    
  )
}
