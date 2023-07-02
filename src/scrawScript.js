// Put this in browser
// Questions
const quesArr = []
document.querySelectorAll('.qtext').forEach(item => {
  console.log(item.textContent.trim())
  if (item.textContent.trim()) {
    quesArr.push(item.textContent)
  }
})
console.log(quesArr)
// Answers
const answerArr = []
const rightanswers = document.querySelectorAll('.rightanswer')
rightanswers.forEach(answer => {
  answerArr.push(answer.textContent.trim().replace('Câu trả lời đúng là: ', ''))
})
console.log(answerArr)
// Set
let set = quesArr.map((question, index) => {
  return { question, answer: answerArr[index] }
})
console.log(set)

// 2 or more sets --> 1 unique QA set
const uniqueSet = (...sets) => {
  const questions = sets.flat().map(set => {
    return set.question
  })
  const uniqQuestions = [...new Set(questions)]
  const resultSet = uniqQuestions.reduce((acc, question) => {
    let found
    sets.forEach(set => {
      set.forEach(qa => {
        if (qa.question === question) {
          found = qa.answer
        }
      })
    })
    if (!found) {
      return acc
    }
    return [...acc, { question, answer: found }]
  }, [])

  return resultSet
}
