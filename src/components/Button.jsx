import React from 'react'

function ifClick(){
  alert("Kamu ngeKlik ?")
}

const Button = (props) => {
  return (
    <button onClick={ifClick} className='bg-cyan-900 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-cyan-400 duration-500'>
      {props.children}
    </button>
  )
}

export default Button
