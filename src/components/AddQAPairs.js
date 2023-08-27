import React, { useRef } from 'react'

export default function AddQAPairs({ handleLocalQAPairs }) {
  const questionsTextArea = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    try {
      const result = JSON.parse(questionsTextArea.current.value)
      handleLocalQAPairs(result)
    } catch (error) {
      alert(error)
    }
    questionsTextArea.current.value = null
  }

  return (
    <div className="qa-apply-to-local">
      <form onSubmit={handleSubmit}>
        <label htmlFor="qa-text-area">Questions/Answers Array:</label>
        <textarea id="qa-text-area" ref={questionsTextArea} />
        <button type="submit">Apply to local</button>
      </form>
    </div>
  )
}
