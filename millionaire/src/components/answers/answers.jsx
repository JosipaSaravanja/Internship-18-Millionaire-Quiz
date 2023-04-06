import classes from "./index.module.css"
import { Answer } from "./answer"
import { useQuestion } from "../../providers/questionProvider"

export const Answers = () => {
    const alphabet = ["A", "B", "C", "D"]
    const context = useQuestion()

    return <div className={classes.answers}>
        {
            context.question.answers.map((el, id) => {
                return <Answer id={el.id} text={alphabet[id] + ": " + el.text} isAnswer={el.isAnswer}></Answer>
            })
        }
    </div>
}