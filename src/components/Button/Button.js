// Componente estilizado de un botón.

import './style.css'

const Button = ({...props}) => {
    return (
      <button className="button" {...props}/>
    )
}

export default Button