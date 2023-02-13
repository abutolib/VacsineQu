function Sheuldelabel({number,forid,backend,type,name,value}) {
  return (
    <label className={`sheulde__label ${number}`} htmlFor={forid}>
      {name}
      <input id={forid} name={backend} className="sheulde__input" type={type} value = {value} />
    </label>
  )
}

export default Sheuldelabel