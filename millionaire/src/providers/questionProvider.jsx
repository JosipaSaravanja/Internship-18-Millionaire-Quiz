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
    nextQuestion: ()=>{}
}

export const QuestionContext  = createContext(defaultContext);

export const QuestionProvider =({children})=>{
    const [question, setQuestion]=useState(defaultContext.question);
    const [id, setId]=useState(defaultContext.id);
    const nextQuestion =()=>{
        setId(id+1)
        setQuestion(questinons[defaultContext.id]);
    }

    return <QuestionContext.Provider value={{question, id, nextQuestion}}>{children}</QuestionContext.Provider>
}