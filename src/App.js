import { useEffect, useState } from 'react'
import './App.scss'
import { addTest, getSubjectNameArr, getTest } from './firestore'
import AumTestPage from './pages/AumTestPage'
import LOCAL_DATA from './data'
import { SUBJECTS } from './constant'
import classnames from 'classnames'

/* 
TODO
-Input set of question and answer
-Can store data to firestore  
-Show collection test subject for user to pick   
-Sort item to alphabet order   x
-Able to input many set and filter out duplicate x
-Can export to word 


// Select subjects to submit
Clicking the subject will have border around:
+ Indicate it is active
+ Show path to add doc
Show set in local as well as set in cloud 
Click submit (popup confirm) -> yes


// Update test set
test_exams/ltw/set : [{question: ...,answer:...}]
Submit a test to local:
+ Copy new set from web 
+ Paste to vscode
get test_exams/ltw/set -> update in cloud 
show new array length

*/

function App() {
  const [subjects, setSubjects] = useState([])
  const [data, setData] = useState([])
  const [activeSubject, setActiveSubject] = useState()

  const fetchSubjectNames = async () => {
    const res = await getSubjectNameArr()
    setSubjects(res)
  }

  const fetchTestSet = async activeSubject => {
    const res = await getTest(activeSubject)
    setData(res.set)
  }

  useEffect(() => {
    fetchSubjectNames()
  }, [])

  const addTestSet = () => {
    addTest(activeSubject, {
      set: LOCAL_DATA[activeSubject],
    })
  }

  const onSelectSubject = subject => {
    setActiveSubject(subject)
    fetchTestSet(subject)
  }

  const firebasePath = activeSubject
    ? `Path: /${activeSubject}`
    : 'Please select a subject'

  return (
    <div className="App">
      <div className="subjects">
        {subjects.length > 0 && (
          <div className="subject-list">
            {subjects.map((subject, index) => {
              const subjectName = SUBJECTS[subject] || subject
              return (
                <div
                  className={classnames('subject-item', {
                    active: activeSubject === subject,
                  })}
                  key={index}
                  onClick={() => onSelectSubject(subject)}
                >
                  {subjectName}
                </div>
              )
            })}
          </div>
        )}

        <div className="actions">
          <div className="firebase-path">{firebasePath}</div>
          <div className="btn-group">
            <button
              type="button"
              className="deselect-btn"
              onClick={() => {
                setActiveSubject()
              }}
            >
              Deselect
            </button>
            <button
              type="button"
              className="merge-btn"
              onClick={addTestSet}
              disabled={!activeSubject}
            >
              Merge
            </button>
          </div>
        </div>

        {activeSubject && (
          <div className="sets-showcase">
            <div className="sets-showcase__local">
              <AumTestPage data={LOCAL_DATA[activeSubject]} />
            </div>
            <div className="sets-showcase__cloud">
              <AumTestPage data={data} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
