import './Button.css'
function Button({styled,buttonName,displayed,type}){
  return(
    <button className={`${styled ? "bg-red":"border"} button ${displayed ? "visually-hidden" : ""}`} type={type}>{buttonName}</button>
  );
}

export default Button;