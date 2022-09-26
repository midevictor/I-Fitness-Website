import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const FAQ = ({id, question, answer}) => {
  const [isAnswerShowing, setAnswerShowing] = useState(false);
  return (
    <article className="faq" onClick={() => setAnswerShowing(prev => !prev)}>
      <div>
      <h3>{question}</h3>
      <button className="faq_icon" >
       {
        isAnswerShowing? <AiOutlineMinus/> : <AiOutlinePlus/> 
       }
      </button>
     
      </div>
      { isAnswerShowing && <p>{answer}</p>}
    </article>
   
  )
}

export default FAQ