const remoteQaPair = [
  {
    question: 'abc',
    answer: '123',
  },
  {
    question: 'def',
    answer: '456',
  },
]

const localQaPair = [
  {
    question: 'abc',
    answer: 'quang',
  },
  {
    question: 'def',
    answer: '456',
  },
  {
    question: 'ght',
    answer: '789',
  },
]

const expectedQaPair = [
  {
    question: 'abc',
    answer: '123',
  },
  {
    question: 'abc',
    answer: 'quang',
  },
  {
    question: 'ght',
    answer: '789',
  },
  {
    question: 'def',
    answer: '456',
  },
]

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

  return resultSet
}

const uniqueSet1 = (...sets) => {
  const mergedArray = [...sets.flat()]
  let resultSet = []
  let duplicateIndexes = []
  mergedArray.forEach((item, index) => {
    let count = 0
    mergedArray.forEach((innerItem, innerIndex) => {
      if (
        item.question === innerItem.question &&
        item.answer === innerItem.answer
      ) {
        count++
        if (count > 1) {
          duplicateIndexes.push(innerIndex)
        }
      }
    })
    if (!duplicateIndexes.includes(index)) {
      resultSet.push(item)
    }
  })

  return resultSet
}

console.log(uniqueSet1(localQaPair, remoteQaPair))
