import sortBy from 'lodash/sortBy'
const uniqueSet = (...sets) => {
  const newSets = sets.filter(set => set)
  const questions = newSets.flat().map(set => {
    return set.question
  })
  const uniqQuestions = [...new Set(questions)]
  const resultSet = uniqQuestions.reduce((acc, question) => {
    let found
    newSets.forEach(set => {
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

  return sortBy(resultSet, ['question', 'answer'])
}

export { uniqueSet }
