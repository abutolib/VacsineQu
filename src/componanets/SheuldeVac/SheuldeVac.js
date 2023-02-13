import './Sheuldevac.css'
import Button from '../Button/Button'
import Sheuldelabel from '../SheuldeVac/Sheuldeform'

function SheuldeVac() {

  return (
    <section className="scheulde">
      <div className="container">
        <div className="sheulde__inner">
          <h2 className='sheulde__title'>
            Schedule Vaccination
          </h2>
          <form className='forma' method='POST' action="https://echo.htmlacademy.ru/" autoComplete='off'>
            <Sheuldelabel name="Location" forid="location" type="text" backend="user__location" value='Jakarta, Indonesia' />
            <Sheuldelabel name="Date" forid="date" type="text" backend="user__date" number="label2" value='25 June, 2021' />
            <Sheuldelabel name="Vaccine Type" forid="type" type="text" backend="user__type" number="label3" value='Cinovac' />
            <Button styled={true} buttonName="Find" displayed={false} type="submit" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SheuldeVac;