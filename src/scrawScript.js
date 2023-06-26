// Put this in browser

const quesArr = []
document.querySelectorAll('.qtext').forEach(item => {
  console.log(item.textContent.trim())
  if (item.textContent.trim()) {
    quesArr.push(item.textContent)
  }
})
console.log(quesArr)

const answerArr = []
const rightanswers = document.querySelectorAll('.rightanswer')
rightanswers.forEach(ans => {
  answerArr.push(ans.textContent.trim().replace('Câu trả lời đúng là: ', ''))
})
console.log(answerArr)

let set = quesArr.map((ques, index) => {
  return { ques, ans: answerArr[index] }
})

console.log(set)
