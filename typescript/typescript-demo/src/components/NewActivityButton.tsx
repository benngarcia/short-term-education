import React, { MouseEvent } from 'react'

interface Props {
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const NewActivityButton = ({clickHandler}: Props) => {
  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={clickHandler}
    >
      Generate New Activity
    </button>
  )
}

export default NewActivityButton
