import './Hero.css'
import Button from  '../Button/Button'
function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__inner'>
          <div className='hero__left'>
            <h1 className='hero__title'>
              Get Your Vaccine,
              Get Your Health
            </h1>
            <p className='hero__text'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
              by injected humour
            </p>

            <div className={"ml16"}>
            <Button styled={true} buttonName={"Get Your Vaccine"}/>
            <Button className="ml16" styled={false} buttonName={"Learn more"}/>
            </div>

          </div>
          <div className='hero__right'>
            <div className='square square1'></div>
            <div className='square square2'></div>
            <div className='square square3'></div>
            <div className='square square4'></div>
            <div className='rectangle'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero