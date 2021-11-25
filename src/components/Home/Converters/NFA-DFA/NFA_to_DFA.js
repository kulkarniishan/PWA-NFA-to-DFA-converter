import * as yup from 'yup'
import { useEffect } from 'react';
// import { yupResolver } from '@hookform/resolvers/yup'
// import { useForm,useFieldArray } from 'react-hook-form'
// import axios from 'axios'

let schema = yup.object().shape({
    inputSymbols: yup.string().required(),
    transitions: yup.array().of(
        yup.object().shape({
            state: yup.string().required(),
            nextState: yup.string().required(),
            transitionSymbol: yup.string().required(),
        })
    ),
    startState: yup.string().required(),
    finalStates: yup.string().required(),
    inputString: yup.string().required(),
});

function NFA_to_DFA() {

    // here index is the curr state
    const test = [
        {
            a: ['0','1'],
            b: ['0'],
        },
        {
            a: [],
            b: ['2'],
        },
        {
            a: ['2'],
            b: ['2'],
        },
    ]

    const symbols = ['a', 'b']
    const start = '0'


    const uniqueArray = (arr)=>{
        return Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
    }

    const evaluate_NFA_to_DFA = () => {
        var i = 0;
        var prev = 0;
        var answerArray = [];
        let arr = [];
        var curr = 1;

        // console.log('arr->',arr)
        arr.push([start])
        // console.log([...arr])

        while (prev !== curr) {
            prev = arr.length;

            // console.log('\nset',arr[i]);

            const rowAdd = {} 

            for (let index = 0; index < symbols.length; index++) {
                const symbol = symbols[index];
                var toBeAddedToSet = [];

                for (let newState = 0; newState < arr[i].length; newState++) {
                    const element = arr[i][newState];
                    
                    // console.log('ele =>',element,symbol);
                    toBeAddedToSet.push( ...test[element][symbol])
                    // console.log(symbol, ...test[element][symbol]);
                }

                toBeAddedToSet = uniqueArray(toBeAddedToSet);
                // console.log('tbas=> ',JSON.parse(JSON.stringify(toBeAddedToSet)));

                arr.push(toBeAddedToSet);
                arr = uniqueArray(arr);

                rowAdd[symbol] = toBeAddedToSet

                // console.log([...arr]);
            }


            // symbols.forEach(symbol => {
            //     var toBeAddedToSet = [];

            //     (arr[i]).forEach(element => {
            //         console.log('ele =>',element);
            //         // if(test[element][symbol]){
            //         toBeAddedToSet.push( ...test[element][symbol])
            //         console.log(symbol, ...test[element][symbol]);
            //         // }
            //     })
            //     toBeAddedToSet = uniqueArray(toBeAddedToSet);
            //     console.log('tbas=> ',JSON.parse(JSON.stringify(toBeAddedToSet)));

            //     arr.push(toBeAddedToSet);
            //     arr = uniqueArray(arr);

            //     rowAdd[symbol] = toBeAddedToSet

            //     console.log([...arr]);
            // });


            // console.log('row=> ',rowAdd)

            answerArray.push({state:arr[i],...rowAdd})
            curr = arr.length;
            // console.log("Prev, curr",prev,curr)
            i++
        }
        console.log('Final Answer',answerArray)

    }

    useEffect(() => {
        evaluate_NFA_to_DFA()
    })
    //  Do not un-Comment

    return (
        <div className='min-h-screen dark:text-white p-10 transition duration-500'>
            I will Convert NFA to DFA
            <div className="space-y-4">
                <div className="block bg-green-300 border-b-8 border-r-8 shadow-lg border-green-700 rounded-md w-75 ml-auto my-5" style={{ minHeight: '30vh' }} >

                </div>
                <div className="block bg-pink-300 border-b-8 border-r-8 shadow-lg border-pink-700 rounded-md w-75 mr-auto my-5" style={{ minHeight: '30vh' }}>

                </div>
                <div className="block bg-purple-300 border-b-8 border-r-8 shadow-lg border-purple-700 rounded-md w-75 ml-auto my-5" style={{ minHeight: '30vh' }}>

                </div>
                <div className="block bg-blue-300 border-b-8 border-r-8 shadow-lg border-blue-700 rounded-md w-75 mr-auto my-5" style={{ minHeight: '30vh' }}>

                </div>
            </div>
        </div>
    )
}

export default NFA_to_DFA
