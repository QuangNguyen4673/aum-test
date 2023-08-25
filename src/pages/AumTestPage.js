import React, { useState } from 'react'
import sortBy from 'lodash/sortBy'
import clipboard from '../images/clipboard-regular.svg'
import check from '../images/check-solid.svg'

export default function AumTestPage({ data }) {
  if (!data || data.length === 0) {
    return 'No test data'
  }
  const sortedData = sortBy(data, ['question', 'answer'])

  return (
    <div className="aum-test">
      {`${sortedData.length} questions`}
      {sortedData.map((item, index) => {
        return (
          <div className="q-a-set" key={index}>
            <div className="question">{item.question}</div>
            <div className="answer">
              - {item.answer} &nbsp; <CopyButton copyContent={item.answer} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const CopyButton = ({ copyContent }) => {
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
