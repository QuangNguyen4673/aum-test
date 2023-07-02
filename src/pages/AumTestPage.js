import React from 'react'
import sortBy from 'lodash/sortBy'

export default function AumTestPage({ data }) {
  if (!data || data.length === 0) {
    return 'No test data'
  }
  const sortedData = sortBy(data, ['question', 'answer'])

  return (
    <div className="aum-test">
      {sortedData.map((item, index) => {
        return (
          <div className="q-a-set" key={index}>
            <div className="question">{item.question}</div>
            <div className="answer">- {item.answer}</div>
          </div>
        )
      })}
    </div>
  )
}
