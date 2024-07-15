import style from "./ButtonsContainer.module.css"
const ButtonContainer = ({onButtonClickl}) =>{

    const buttonName=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];


    return <div className={style.buttonsContainer}>
{buttonName.map( item =><button className={style.button} 
onClick={()=>onButtonClickl(item)}>{item}</button>)}

  </div>
}
export default ButtonContainer;