import { createContext, useState } from "react";
import questinons from "../data/questions.json"

const shuffle=(array)=> {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

const questions=shuffle(questinons);

const defaultContext={
    id: 14,
    question: questions[0],
    restart: ()=>{},
    finish: ()=>{},
    nextQuestion: ()=>{},
    finished: false
}

export const QuestionContext  = createContext(defaultContext);

export const QuestionProvider =({children})=>{
  const [shuffledQuestions, setShuffledQuestions] = useState(questinons)
  const [finished, setFinish] = useState(false)
    const [question, setQuestion]=useState(defaultContext.question);

    const [id, setId]=useState(defaultContext.id);
    const finish=()=>{
      setFinish(true)
    }
    const restart=()=>{
      setShuffledQuestions(shuffle(questinons))
      setId(0)
      setQuestion(shuffledQuestions[id])
      
    }

    const nextQuestion =()=>{
      if(id==14){
        setId(id+1)
        finish()
        return
      }
        setId(id+1)
        setQuestion(shuffledQuestions[id+1]);
    }

    return <QuestionContext.Provider value={{question, id, finish, restart, nextQuestion, finish, finished}}>{children}</QuestionContext.Provider>
}
