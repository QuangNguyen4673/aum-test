import { useEffect } from 'react'
import './App.css'
import { BAI1 } from './data/ltwData'
import { addTest, getSubjectNameArr, getTest } from './firestore'
import AumTestPage from './pages/AumTestPage'
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
  useEffect(() => {
    console.log(getSubjectNameArr())

    // getTest('laptrinhweb')
    // addTest('laptrinhweb/week1/attempt_0', {
    //   ques: ['hello'],
    //   ans: ['world'],
    // })
  }, [])
  return (
    <div className="App">
      <AumTestPage data={BAI1} />
    </div>
  )
}

export default App
