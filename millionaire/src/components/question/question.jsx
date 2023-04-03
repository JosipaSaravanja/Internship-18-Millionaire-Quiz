import classes from "./index.module.css"
import {QuestionContext} from "../../providers/questionProvider"
import { useContext } from "react"

export const Question =()=>{
    const context=useContext(QuestionContext)
    return <div className={classes.question}>
        {context.question.question}
    </div>
}