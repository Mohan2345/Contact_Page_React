import React from 'react'
import style from './Button.module.css'

// Destructruing the JS Object
const Button = ({isOutline,icon,text}) => {
  return (
    // Ternary operator
     <button className={isOutline ? style.outline_btn : style.primary_btn}>
         {icon}
         {text}
     </button>
  );
};

export default Button
