import React from 'react'

export default function AumTestPage({ data }) {
  if (data.length === 0) {
    return null
  }
  return (
    <div id="aum-test">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="q-a-set">
              <div className="question">{item.question}</div>
              <div className="answer">- {item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
