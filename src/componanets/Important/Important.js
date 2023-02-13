import './Important.css'
import Importanttemp from './ImportantTemp'

function Important() {
  return (
    <section className="important">
      <div className="container">
        <div className="imortant__inner">
          <div className='important__wrapper'>
            <h2 className='important__title'>
              Why Vaccine Is Important?
            </h2>
            <p className='important__text'>
              Combined with a handful of model sentence structures, to generate
              always free from repetition injected.
            </p>
          </div>
          <ul className="important__list">
            <Importanttemp title="Prevent covid 19 virus" text="Model sentence structures, 
to generate Lorem which looks 
reasonable"/>
            <Importanttemp title="Protect others" text="Model sentence structures, 
to generate Lorem which looks 
reasonable"/>
            <Importanttemp title="Stop the spread of covid 19" text="Model sentence structures, 
to generate Lorem which looks 
reasonable"/>
            <Importanttemp title="Protect the next generation" text="Model sentence structures, 
to generate Lorem which looks 
reasonable"/>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Important