import classes from "./index.module.css"
import { QuestionContext } from "../../providers/questionProvider"
import { DialogContext, DIALOG } from "../../providers/dialogProvider"
import { useState, useContext, useEffect } from "react"

export const Jokers = () => {
    const HELPS = {
        PHONE_A_FRIEND: "PHONE_A_FRINED",
        FIFTY_FIFTY: " FIFTY_FIFTY",
        ASK_AUDIENCE: "ASK_AUDIENCE",
    }
    const context = useContext(QuestionContext)
    const dialog = useContext(DialogContext)
    const [posibility, setPosibility] = useState()
    const [disabled, setDisabled] = useState([])

    useEffect(() => {
        if (dialog.activeDialog===DIALOG.WON_DIALOG || dialog.activeDialog===DIALOG.WRONG_ANSWER_DIALOG) {
            setDisabled([])
        }
    }, [dialog.activeDialog])


    useEffect(() => {
        if (posibility) {
            dialog.open(DIALOG.HELP_DIALOG, { additionalInfo: "Pretpostavljamo da je odgovor: " + posibility })
            setPosibility(null)
        }
    }, [posibility])

    const fifty = () => {
        const numberOne = Math.trunc(Math.random() * 2) + 1;
        let numberTwo;
        do {
            numberTwo = Math.trunc(Math.random() * 2) + 1;
        } while (numberOne === numberTwo);

        context.hide([numberOne, numberTwo])
        setDisabled(prev => [...prev, HELPS.FIFTY_FIFTY])
    }

    const getPossibilities = (num) => {
        const random = Math.random() * 10;
        if (random < num) {
            const odg = context.question.answers.filter(el => el.isAnswer === true)[0].text;
            setPosibility(odg);
        } else {
            const odg = context.question.answers.filter(el => el.isAnswer === false)[Math.trunc(Math.random() * 3)].text
            setPosibility(odg)
        }
    }

    const friend = () => {
        getPossibilities(9)
        setDisabled(prev => [...prev, HELPS.PHONE_A_FRIEND]);
    }

    const audience = () => {
        getPossibilities(8)
        setDisabled(prev => [...prev, HELPS.ASK_AUDIENCE]);
    }

    return <div className={classes.jokers}>
        <img src={require('../../img/Fifty.jpg')}
            className={disabled.some(el => el === HELPS.FIFTY_FIFTY) ? classes.used : null}
            onClick={() => disabled.some(el => el === HELPS.FIFTY_FIFTY) ? null : fifty()} />
        <img
            src={require('../../img/Phone_a_friend.jpg')}
            className={disabled.some(el => el === HELPS.PHONE_A_FRIEND) ? classes.used : null}
            onClick={() => disabled.some(el => el === HELPS.PHONE_A_FRIEND) ? null : friend()} />
        <img src={require('../../img/public.jpg')}
            className={disabled.some(el => el === HELPS.ASK_AUDIENCE) ? classes.used : null}
            onClick={() => disabled.some(el => el === HELPS.ASK_AUDIENCE) ? null : audience()} />
    </div>
}


