import { Prize } from "./prize"
import classes from "./index.module.css"
import prizes from "../../data/prizes.json"
import {QuestionContext} from "../../providers/questionProvider"
import { useContext } from "react"

export const SideWrapper =()=>{
    prizes=prizes.reverse();
    const context=useContext(QuestionContext)
    return <div className={classes.sideWrapper}>
        <div className={classes.jokers}>

        </div>

        <div className={classes.score}>
            Your Score:
            <div>$ {context.id==0 ? "0": prizes[15-context.id].value }</div>
        </div>

        <div className={classes.scoreBoard}>
        {prizes.map((el)=>{
            return <Prize num={el.id+1} value={el.value} />
        })}
        </div>
    </div>
}