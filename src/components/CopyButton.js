import React, { useState } from 'react'
import clipboard from '../images/clipboard-regular.svg'
import check from '../images/check-solid.svg'

export default function CopyButton({ copyContent }) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    navigator.clipboard.writeText(copyContent)
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 1000)
  }
  return (
    <button type="button" style={{ cursor: 'pointer' }} onClick={handleClick}>
      {clicked ? (
        <img src={check} alt="clipboard" width={12} height={12} />
      ) : (
        <img src={clipboard} alt="clipboard" width={12} height={12} />
      )}
    </button>
  )
}
