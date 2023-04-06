import classes from "./index.module.css"
import { QuestionContext } from "../../providers/questionProvider"
import { useContext } from "react"

export const Prize = (props) => {
    const context = useContext(QuestionContext);
    return <div
        className={`${classes.scoreboardElement} ${props.num - 1 == context.id ? classes.selected : ""}`}
        >
        <div>{props.num}</div> $<div>{props.value}</div>
    </div>
}



