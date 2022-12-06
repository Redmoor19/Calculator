import {useState} from 'react';

export const useCalculate = () => {
    const [next, setNext] = useState(null);
    const [operation, setOperation] = useState(null);
    const [total, setTotal] = useState(null);


    const calculate = (value) => {
        if(/AC/g.test(value)) {
            setNext(null);
            setOperation(null);
            setTotal(null);
        } else if(/[\d.]/.test(value)) {
            if (value === "0" && next === '0') {
                return
            }
            if (!operation) {
                setTotal(null);
            }
            if(value === ('.') && next === null) {
                setNext('0.');
                return
            }
            if (value === '.' && /./.text(next)) {
                return
            }
            setNext(next === null ? value : next+value);
        } else if (/\//.test(value)) {
            next ? setNext((+next * -1).toString()) : setTotal((+total * -1).toString()) 
        } else if (/[*+÷-]/.test(value)) {
            setOperation(value === "÷" ? '/' : value);
            // eslint-disable-next-line
            setTotal(total ? eval(total + operation + next) : next);
            setNext(null);
        } else if(/%/.test(value)) {
            if (total && next) {
                // eslint-disable-next-line
                setTotal(eval(`(${total}${operation}${next})/100`));
            } else if (total && !next) {
                // eslint-disable-next-line
                setTotal(eval(`${total}/100`));
            } else {
                // eslint-disable-next-line
                setTotal(eval(`${next}/100`));
            }
            setNext(null);
            setOperation(null);
        } else if(/=/.test(value)) {
            // eslint-disable-next-line
            setTotal(eval(total + operation + next));
            setNext(null);
            setOperation(null);
        }
    }

    return {calculate, next, total};
}