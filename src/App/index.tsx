import React, { useState } from 'react';
import { TextField, Tooltip } from '@material-ui/core';
import { getStyles } from './styles';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)


export const App = () => {
    const classes = getStyles();

    const [mainValue, setMainValue] = useState(''); // главное число которое не меняется
    const [firstValue, setFirstValue] = useState(''); // первое из вводимых данных
    const [currentDate, setCurrentDate] = useState(''); // первое из вводимых данных

    const main1Part = String(mainValue).split('.')[0]; // главное число до точки
    const main2Part = String(mainValue).split('.')[1]; // главное число после точки

    const firstValue1Part = String(firstValue).split('.')[0]; // первое из вводимых данных до точки
    const firstValue2Part = String(firstValue).split('.')[1]; // первое из вводимых после до точки

    const adaptMain1Part = 29 - Number(main1Part); // главное адаптировано до точки
    const adaptMain2Part = 60 - Number(main2Part); // главное адаптировано после точки

    let sumBeforePoint = Number(adaptMain1Part) + Number(firstValue1Part); // сумма чисел до точки
    let sumAfterPoint = Number(adaptMain2Part) + Number(firstValue2Part); // сумма чисел после точки


    const firstBranch = () => {
        let final;
        let middleResult;
        if (sumAfterPoint >= 60) {
            const ww = (Number(adaptMain2Part) + Number(firstValue2Part)) - 60;
            sumBeforePoint += 1
            if (ww < 10) {
                middleResult = `${sumBeforePoint}.0${ww}`
            } else {
                middleResult = `${sumBeforePoint}.${ww}`
            }
            final = middleResult
        } else {
            final = `${sumBeforePoint}.${sumAfterPoint}`
        }
        return final
    }

    const addZero = (a: number, b: number) => {
        let res;
        if (a - b < 10) {
            res = `0${a - b}`
        } else {
            res = a - b
        }
        return res
    }

    const result = (): string => {
        let final;
        if (Number(firstValue1Part) > Number(main1Part)) {
            let middleBeforePoint = Number(firstValue1Part) - Number(main1Part);

            if (Number(firstValue2Part) < Number(main2Part)) {

                let middleAfterPoint = String(60 + Number(firstValue2Part) - Number(main2Part));

                middleBeforePoint -= 1

                if (Number(middleAfterPoint) < 10) {
                    middleAfterPoint = `0${middleAfterPoint}`
                }
                final = `${middleBeforePoint}.${middleAfterPoint}`

            } else {
                final = `${middleBeforePoint}.${addZero(Number(firstValue2Part), Number(main2Part))}`;
            }
            return final
        } else if (Number(firstValue1Part) === Number(main1Part)) {
            if (Number(main2Part) > Number(firstValue2Part)) {
                final = firstBranch();
            } else {
                const res = (Number(firstValue) - Number(mainValue)).toFixed(2)
                final = String(res)
            }
        } else {
            final = firstBranch();
        }
        return final
    }

    const allRes = result();
    const resultPart1 = Number(allRes.split('.')[0])
    const result2Part = Number((Number(allRes.split('.')[1]) / 60).toFixed(2));
    const sum2action = resultPart1 + result2Part // сумма после второго действия


    const action3 = sum2action / 2.5 // третье действие
    const month = String(action3).split('.')[0];
    const date = Math.round(Number(Number(`0.${String(action3).split('.')[1]}`).toFixed(2)) * 30)

    const adaptDate = currentDate && dayjs(currentDate, 'DD.MM.YYYY')
    const finalDate = (month || date) && dayjs(adaptDate).add(Number(month), 'month').add(Number(date), 'day').format('DD MMMM YYYY')

    return (
        <div className={classes.app}>
            <div className={classes.inputBlock}>
                <Tooltip title="Необходимо добавить 2 цифру" arrow open={main2Part && main2Part.length < 2 ? true : false}>
                    <TextField placeholder='градусы Мундхеши' className={classes.input} onChange={(e) => setMainValue(e.currentTarget.value)} />
                </Tooltip>

                <Tooltip title="Необходимо добавить 2 цифру" arrow open={firstValue2Part && firstValue2Part.length < 2 ? true : false}>
                    <TextField placeholder='градусы планеты' className={classes.input} onChange={(e) => setFirstValue(e.currentTarget.value)} />
                </Tooltip>

                <Tooltip title="Необходимо добавить 2 цифру" arrow open={firstValue2Part && firstValue2Part.length < 2 ? true : false}>
                    <TextField placeholder='дата рождения и текущий год' className={classes.input} onChange={(e) => setCurrentDate(e.currentTarget.value)} />
                </Tooltip>
            </div>

            <div>
                <div>
                    {allRes}
                </div>
                <div>
                    ____________________
                </div>
                <div>
                    {resultPart1 + result2Part}
                </div>
                <div>
                    ____________________
                </div>
                <div>
                    {(resultPart1 + result2Part) / 2.5}
                </div>
                <div>
                    ____________________
                </div>
                <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
                    <div>
                        месяцы: {month}
                    </div>
                    <div>
                        дни: {date}
                    </div>
                </div>
                <div>
                    ____________________
                </div>
                <div>
                    дата {finalDate}
                </div>
            </div>

        </div>
    );
}
