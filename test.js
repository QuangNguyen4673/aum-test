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
  const questions = sets.flat().map(set => {
    return set.ques
  })
  const uniqQuestions = [...new Set(questions)]
  const resultSet = uniqQuestions.reduce((acc, ques) => {
    let found
    sets.forEach(set => {
      set.forEach(qa => {
        if (qa.ques === ques) {
          found = qa.ans
        }
      })
    })
    if (!found) {
      return acc
    }
    return [...acc, { ques, ans: found }]
  }, [])
  return resultSet
}
console.log(uniqueSet(set1, set2))
