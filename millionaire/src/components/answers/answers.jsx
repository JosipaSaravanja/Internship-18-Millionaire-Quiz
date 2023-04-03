import classes from "./index.module.css"
import { Answer } from "./answer"
import { QuestionContext } from "../../providers/questionProvider"
import { useContext } from "react"

export const Answers = () => {
    const alphabet = ["A", "B", "C", "D"]
    const context = useContext(QuestionContext)
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

    return <div className={classes.answers}>
        {
            shuffle(context.question.answers).map((el, id) => {
                return <Answer text={alphabet[id] + ": " + el.text} isAnswer={el.isAnswer}></Answer>
            })
        }
    </div>
}