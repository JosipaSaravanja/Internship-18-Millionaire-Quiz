import classes from "./index.module.css"
import { QuestionContext } from "../../providers/questionProvider"
import { useContext } from "react"

export const Answer=(props)=>{
    const context=useContext(QuestionContext)
    const handleClick=()=>{
        context.nextQuestion()
        console.log(context)
    }
    return <div 
    className={classes.answer}
    onClick={()=>handleClick()}
    >
        {props.text}
        </div>
}