import { useEffect, useState } from 'react'
import './App.css'
import { BAI1 } from './data/ltw'
import { addTest, getSubjectNameArr, getTest } from './firestore'
import AumTestPage from './pages/AumTestPage'
import { SUBJECTS } from './constant'
/* 
TODO
-Input 2 array question and answer each test -> Display list of Q&A
-Show collection test subject for user to pick   ***
-Sort item to alphabet order   
-Allow to edit to fix typo and length of items
-Able to input many set and filter out duplicate
-Can export to word 
-Can store data to firestore   
*/

function App() {
  const [subjects, setSubjects] = useState([])

  const fetchSubjectNames = async () => {
    const res = await getSubjectNameArr()
    setSubjects(res)
  }
  useEffect(() => {
    fetchSubjectNames()
    getTest('ltw')
    // addTest('laptrinhweb/week1/attempt_0', {
    //   ques: ['hello'],
    //   ans: ['world'],
    // })
  }, [])
  return (
    <div className="App">
      {/* <div className="subjects">
        {subjects.length > 0 && (
          <ul>
            {subjects.map((subject, index) => {
              return <li key={index}>{SUBJECTS[subject]}</li>
            })}
          </ul>
        )}
      </div> */}
      <AumTestPage data={[]} />
    </div>
  )
}

export default App
