const set1 = [
  { ques: 'hello', ans: 'world' },
  { ques: 'hello1', ans: 'world1' },
  { ques: 'hello2', ans: 'world2' },
]

const set2 = [
  { ques: 'hello3', ans: 'world3' },
  { ques: 'hello4', ans: 'world4' },
  { ques: 'hello', ans: 'world' },
]

const uniqueSet = (...sets) => {
  let res = []
  let duplicateQues = []
  console.log(sets)
  const questions = sets.flatMap(set => {
    return set.ques
  })
  return questions
}
console.log(uniqueSet(set1, set2))

let res = []
let duplicateQues = []
const set2ques = set2.map(item => item.ques)
set1.forEach(item => {
  if (set2ques.includes(item.ques)) {
    duplicateQues.push(item.ques)
  } else {
    res.push(item)
  }
})
set2.forEach(item => {
  if (!duplicateQues.includes(item.ques)) {
    res.push(item)
  }
})
duplicateQues.forEach(ques => {
  const found = set1.find(item => item.ques === ques)
  if (found) {
    res.push(found)
  }
})
// console.log(res)
// console.log(duplicateQues)
