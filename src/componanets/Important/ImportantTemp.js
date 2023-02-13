

function Importanttemp({title,text}) {
  return (
    <li className="important__item important-item">
      <h3 className="important-item__title">
        {title}
      </h3>
      <p className="important-item__text">
        {text}
      </p>
    </li>
  )
}

export default Importanttemp