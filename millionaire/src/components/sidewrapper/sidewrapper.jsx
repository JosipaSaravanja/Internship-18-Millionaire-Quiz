import { Prize } from "./prize"
import classes from "./index.module.css"

export const SideWrapper =()=>{
    return <div className={classes.sideWrapper}>
        <div className={classes.jokers}>
        </div>

        <div className={classes.score}>
            Your Score:
            <div>$</div>
        </div>

        <div className={classes.scoreBoard}>
            <Prize/>
            <Prize/>
            <Prize/>
        </div>
    </div>
}