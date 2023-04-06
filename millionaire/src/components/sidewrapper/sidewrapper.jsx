import { Prize } from "./prize"
import { Jokers } from "./jokers"
import classes from "./index.module.css"
import prizes from "../../data/prizes.json"
import { useQuestion } from "../../providers/questionProvider"

export const SideWrapper = () => {
    prizes.reverse();
    const context = useQuestion()
    return <div className={classes.sideWrapper}>
        <Jokers />

        <div className={classes.score}>
            Your Score:
            <div>$ {context.id == 0 ? "0" : prizes[15 - context.id].value}</div>
        </div>

        <div className={classes.scoreBoard}>
            {prizes.map((el) => {
                return <Prize num={el.id + 1} value={el.value} />
            })}
        </div>
    </div>
}