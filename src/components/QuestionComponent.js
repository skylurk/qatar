import { Label, Radio } from 'flowbite-react'
import React, { useState } from 'react'

const QuestionComponent = ({ quiz, handleNext, updateScore, score }) => {

  const [ans, setAns] = useState('');
 
  // const answer = {
  //   question: quiz.id,
  //   answer: '',
  //   correct: false
  // }


  console.log(quiz.correct)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ans === quiz.correct) {
      score = score + 1;
      updateScore(score);
      console.log(score)
    }
    e.target.reset();
    handleNext();
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='font-bold text-xl'>{quiz.quizTitle}</h1>
        <h2 className='my-6 font-semibold'>{quiz.quizSynopsis}</h2>
        <fieldset
          className="flex max-w-md flex-col gap-4"
          id="radio">
          {
            quiz.options.map((option, index) => (
              <div className="flex items-center gap-2" key={index}>
                <Radio
                  id={`option-${index}`}
                  name="countries"
                  value={option}
                  onChange={(e) => setAns(e.target.value)}
                />
                <Label htmlFor={`option-${index}`}>
                  {option}
                </Label>
              </div>
            ))
          }
        </fieldset>
        <div className="w-full">
          <button type="submit" className="focus:outline-none text-white bg-[#5C0632] hover:bg-[#60113a] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg w-full my-8 px-5 py-2.5 mb-2 dark:bg-[#] dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default QuestionComponent