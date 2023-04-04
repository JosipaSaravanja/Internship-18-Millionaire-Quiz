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
    id: 0,
    question: questions[0],
    finish: ()=>{},
    restart: ()=>{},
    nextQuestion: ()=>{}
}

export const QuestionContext  = createContext(defaultContext);

export const QuestionProvider =({children})=>{
    const [question, setQuestion]=useState(defaultContext.question);
    const [id, setId]=useState(defaultContext.id);
    const finish=()=>{
      alert("cestitam")
    }
    const restart=(dialog)=>{
      console.log(dialog)
    }
    const nextQuestion =()=>{
      if(id==14){
        setId(id+1)
        finish()
        return
      }
        setId(id+1)
        setQuestion(questions[id+1]);
    }
    return <QuestionContext.Provider value={{question, id, finish, restart, nextQuestion}}>{children}</QuestionContext.Provider>
}
