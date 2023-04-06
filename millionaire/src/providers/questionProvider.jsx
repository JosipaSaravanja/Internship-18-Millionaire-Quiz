import { createContext, useState, useContext} from "react";
import data from "../data/questions.json"

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
   return array;
}


const questions = shuffle(data);

const defaultContext = {
  id: 0,
  question: 
  { id: questions[0].id, 
    question: questions[0].question, 
    answers: shuffle(questions[0].answers) 
  },
  restart: () => { },
  nextQuestion: () => { },
  hide: () => { },
  hidden: []
}

export const QuestionContext = createContext(defaultContext);

export const QuestionProvider = ({ children }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState(data)

  const [id, setId] = useState(defaultContext.id);
  const [question, setQuestion] = useState(defaultContext.question);
  const [hidden, setHidden] = useState(defaultContext.hidden)

  const hide = (array) => {
    setHidden(array)
  }

  const restart = () => {
    setShuffledQuestions(shuffle(data))
    setId(0)
    setHidden([])
    setQuestion(
      { 
      id: shuffledQuestions[0].id, 
      question: shuffledQuestions[0].question, 
      answers: shuffle(shuffledQuestions[0].answers) 
    })
  }

  const nextQuestion = () => {
    setId(id + 1)
    setQuestion(
      {
        id: shuffledQuestions[id + 1].id, 
        question: shuffledQuestions[id + 1].question, 
        answers: shuffle(shuffledQuestions[id + 1].answers) 
      });
    setHidden([])
  }

  return <QuestionContext.Provider value={{ id, question, restart, nextQuestion, hide, hidden}}>{children}</QuestionContext.Provider>
}

export const useQuestion = () => useContext(QuestionContext);
