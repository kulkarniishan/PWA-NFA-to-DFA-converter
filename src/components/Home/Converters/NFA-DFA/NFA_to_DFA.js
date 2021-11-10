import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm,useFieldArray } from 'react-hook-form'
import axios from 'axios'

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

    //here index is the curr state
    // const test = [
    //     {
    //         a: ['0'],
    //         b: ['1'],
    //         final: false
    //     },
    //     {
    //         b: ['1'],
    //         a: ['1'],
    //         final: true
    //     }
    // ]

    // const symbols = ['a', 'b']
    // const start = '0'
    // const evaluate_NFA_to_DFA = () => {
    //     var set = new Set();
    //     var i = 0;
    //     var prev = 0;
    //     var answerArray = [];
    //     var arr = [];
    //     var curr = 1;

    //     set.add([start]);
    //     arr.push([start])
    //     console.log(set)

    //     while (prev !== curr) {
    //         prev = set.size;
    //         if(i>10)break;

    //         symbols.forEach(symbol => {
    //             var toBeAddedToSet = [];

    //             (arr[i]).forEach(element => {
    //                 console.log(element);
    //                 toBeAddedToSet.push( test[element][symbol])
    //                 console.log(symbol, test[element][symbol]);
    //             })
    //             var before = set.size;
    //             set.add(toBeAddedToSet);
    //             var after = set.size;
    //             if(before!=after){
    //                 arr.push(toBeAddedToSet);
    //             }
    //             console.log(arr);
    //         });

    //         curr = set.size;
    //         console.log("Prev, curr",prev,curr)
    //         i++
    //     }

    // }

    // evaluate_NFA_to_DFA(); Do not un-Comment

    return (
        <div className='min-h-screen dark:text-white p-10 transition duration-500'>
            I will Convert NFA to DFA
            <div className="space-y-4">
                <div className="block bg-green-300 border-b-8 border-r-8 shadow-lg border-green-700 rounded-md w-75 ml-auto my-5" style={{ minHeight: '30vh' }}>

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
