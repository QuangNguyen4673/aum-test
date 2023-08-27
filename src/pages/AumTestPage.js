import React from 'react'
import sortBy from 'lodash/sortBy'
import CopyButton from '../components/CopyButton'

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
