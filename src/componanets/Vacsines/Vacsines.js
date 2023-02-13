import './Vacsines.css'

import Vacsinesitem from './VacsinesItem'
function Vacsines() {
  return (
    <section className='vacsines'>
      <div className='container'>
        <div className='vacsines__inner'>
          <ul className='vacsines__list'>
             <Vacsinesitem name={"Sinovac"} displayed={false}/>
             <Vacsinesitem name={"Astrazeneca"} displayed={true}/>
             <Vacsinesitem name={"Sinopahrm"} displayed={true}/>
          </ul>
        </div>
      </div>
    </section>
  )
}


export default Vacsines