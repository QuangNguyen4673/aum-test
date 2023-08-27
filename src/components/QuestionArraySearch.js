import React, { useRef, useState } from 'react'
import CopyButton from './CopyButton'

export default function QuestionArraySearch({ data }) {
  const [foundAnswers, setFoundAnswers] = useState([])
  const questionsTextArea = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    try {
      const result = findAnswerList(questionsTextArea.current.value)
      setFoundAnswers(result)
    } catch (error) {
      alert(error)
    }
  }

  const findAnswerList = questionsString => {
    const parsedQuestions = JSON.parse(questionsString)

    let foundAnswers = []
    data.forEach(item => {
      parsedQuestions.forEach(el => {
        if (item.question === el) {
          foundAnswers.push(item.answer)
        }
      })
    })
    return foundAnswers
  }

  const answersFoundInfo = foundAnswers.length
    ? `${foundAnswers.length} answers found`
    : ''

  const handleClear = () => {
    questionsTextArea.current.value = null
    setFoundAnswers([])
  }

  const handleDisappear = disappearAns => {
    setFoundAnswers(foundAnswers.filter(ans => !(ans === disappearAns)))
  }

  return (
    <div className="question-array-search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="questions-text-area">Question Array:</label>
        <textarea id="questions-text-area" ref={questionsTextArea} />
        <button
          type="button"
          style={{ marginRight: '5px' }}
          onClick={handleClear}
        >
          Clear
        </button>
        <button type="submit">Find</button>
      </form>
      <div>
        <h4>{answersFoundInfo}</h4>
        {foundAnswers.map(ans => {
          return (
            <div style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
              <div key={ans}>
                {ans} &nbsp; <CopyButton copyContent={ans} />
              </div>
              <button type="button" onClick={() => handleDisappear(ans)}>
                x
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
