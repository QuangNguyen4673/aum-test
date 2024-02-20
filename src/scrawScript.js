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
