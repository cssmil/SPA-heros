import { getHerosByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {
  
  const herosList = getHerosByPublisher(publisher)

  return (
    <>
      <div>{publisher}</div>
      <div className='cards-hero'>
        {
          herosList.map(hero=>(
            <HeroCard 
              key={hero.id}
              {...hero}
            />
          ))
        }
      </div>
    </>
  )
}
