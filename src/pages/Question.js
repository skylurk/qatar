import { Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import FormContent from '../components/FormContent';
import QuestionComponent from '../components/QuestionComponent';

const Question = () => {

  const [showModal, setShowModal] = useState(true);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(1);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    console.log(score);
  }, [score])

  const hideModal = () => {
    setShowModal(false);
  }

  const quiz = [
    {
      "id": "q1",
      "quizTitle": "Question 1",
      "quizSynopsis": "1. How many weekly flights do we operate from Nairobi",
      "options": [30, 7, 14, 26],
      "correct": 14,
    },

    {
      "id": "q2",
      "quizTitle": "Question 2",
      "quizSynopsis": "2.	What is the name of Qatar Airways award winning business class seat?",
      "options": ["Elegance", "Qsuite", "VIP", "VVIP"],
      "correct": 'Qsuite',
    },


    {
      "id": "q3",
      "quizTitle": "Question 3",
      "quizSynopsis": "3.	What is the name of the new expansion at Hamad International airport?",
      "options": ["The Orchard", "The Orchid", "The Garden"],
      "correct": 'The Orchard',
    },

    {
      "id": "q4",
      "quizTitle": "Question 4",
      "quizSynopsis": "4.	What is the name of Qatar Airways frequent flier programme?",
      "options": ["Ultimate Pass", "Platinum Club", "Privilege Club"],
      "correct": "Privilege Club",
    },

    {
      "id": "q5",
      "quizTitle": "Question 5",
      "quizSynopsis": "5.	Qatar Airways is currently flying to more than how many destinations?",
      "options": ["100 Destinations Europe and Asia", "160 destinations worldwide", "300 Destinations Worldwide"],
      "correct": "160 destinations worldwide",
    },

    {
      "id": "q6",
      "quizTitle": "Question 6",
      "quizSynopsis": "6.	Qatar Airways is the global partner and official airline of which motorsport?",
      "options": ["F1", "PSG", "URC "],
      "correct": "F1",
    },
  ]

  const handleNext = () => {
    if (index !== quiz.length - 1) {
      setIndex(index + 1);
    } else {
      console.log('end')
    }
  }

  const handleScore = (newVal) => {
    setScore(newVal);
  }

  const getPhone = (x) => {
    setPhone(x);
    console.log('x', x);
  };

  


  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <img src="/images/qt.png" alt="" width='200px' />
      <div className="w-1/2 bg-white rounded-lg p-4 mt-4">
        <QuestionComponent
          quiz={quiz[index]}
          handleNext={handleNext}
          updateScore={handleScore}
          score={score}
        />
      </div>

      <Modal
        show={showModal}>
        <Modal.Header>
          ANSWER & WIN
        </Modal.Header>
        <Modal.Body>
          <FormContent hideModal={hideModal} phoneSet={getPhone} />
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default Question