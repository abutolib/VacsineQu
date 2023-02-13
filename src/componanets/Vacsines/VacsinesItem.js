import Button from '../Button/Button'
function Vacsinesitem({name,displayed}){
  const block = displayed 
  return (
    <li className='vacsines__item'>
      <h3 className='vacsines__title'>{name}</h3>
      <p className='vacsines__text'>Necessary making this</p>
      <Button displayed={block} styled={false} buttonName={"Get Vaccine"}  />
    </li>
  )
}

export default Vacsinesitem