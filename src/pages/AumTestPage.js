import React from 'react'

export default function AumTestPage({ data }) {
  return (
    <div id="aum-test">
      {data.map((item, index) => {
        return (
          <div key={index}>
            Test {index + 1}
            {item.ques.map((singleques, index) => {
              return (
                <div className="q-a-set">
                  <div className="question">{singleques}</div>
                  <div className="answer">{item.ans[index]}</div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
