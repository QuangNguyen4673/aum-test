const set1 = [
  { question: 'hello', answer: 'world' },
  { question: 'hello1', answer: 'world1' },
  { question: 'hello2', answer: 'world2' },
]

const set2 = [
  { question: 'hello3', answer: 'world3' },
  { question: 'hello4', answer: 'world4' },
  { question: 'hello', answer: 'world' },
]

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
console.log(uniqueSet(set1, set2))
