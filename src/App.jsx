import style from './App.module.css'
import ButtonContainer from './components/ButtonsContainer'
import Display from './components/Display'
import { useState } from 'react';
function App() {

  const [calVal,setCalVal]= useState("");
  const onButtonClick = (buttonText)=>{
    console.log(buttonText)
  if (buttonText ==='C'){
    setCalVal("")

  }
  else if(buttonText==='='){
    const result =eval(calVal);
    setCalVal(result)

  }
  else{
    const newDisplayValue = calVal + buttonText;
    setCalVal(newDisplayValue);
  }


}


  return (
   <div className={style.calculator}>CISCO
    <Display displayValue={calVal} ></Display>
    <ButtonContainer onButtonClickl={onButtonClick}></ButtonContainer>
   </div>
  )
}

export default App
