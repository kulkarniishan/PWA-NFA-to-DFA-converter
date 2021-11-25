import * as yup from 'yup'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useFieldArray } from 'react-hook-form'


// eslint-disable-next-line
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

    const [dfaTable, setDfaTable] = useState(null);
    const [newDfaStates, setNewDfaStates] = useState(null);
    const [dfaImage, setDfaImage] = useState(null);
    const [acceptanceStatus, setAcceptanceStatus] = useState(null);

    const { register, handleSubmit, formState: { errors }, setValue, getValues, control, reset } = useForm({
        resolver: yupResolver(schema),
    })

    const transitionFields = useFieldArray({
        control,
        name: "transitions"
    })

    // here index is the curr state
    const test = [
        {
            a: ['0', '1'],
            b: ['0'],
        },
        {
            a: [],
            b: ['2'],
        },
        {
            a: [],
            b: [],
        },
    ]

    const symbols = ['a', 'b']
    const start = '0'
    const finalStates = ['2']


    const uniqueArray = (arr) => {
        return Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
    }

    const evaluate_NFA_to_DFA = () => {
        let i = 0;
        var prev = 0;
        var answerArray = [];
        let newStates = [];
        var curr = 1;

        newStates.push([start])

        while (prev !== curr) {
            prev = newStates.length;

            const rowAdd = {}

            for (let index = 0; index < symbols.length; index++) {
                const symbol = symbols[index];
                var toBeAddedToSet = [];

                for (let newState = 0; newState < newStates[i].length; newState++) {
                    const element = newStates[i][newState];

                    toBeAddedToSet.push(...test[element][symbol])
                }

                toBeAddedToSet = uniqueArray(toBeAddedToSet);

                newStates.push(toBeAddedToSet);
                newStates = uniqueArray(newStates);

                rowAdd[symbol] = toBeAddedToSet.toString()
            }
            let tempNewStates = newStates[i]
            const isFinalState = finalStates.every(k => tempNewStates.includes(k));
            answerArray.push({ state: newStates[i].toString(), ...rowAdd, isFinalState })
            curr = newStates.length;
            i++
        }
        console.log('Final Answer', answerArray)
        setNewDfaStates(newStates);
        console.log(newStates)
        setDfaTable(answerArray);
    }

    useEffect(() => {
        if (dfaTable) {
            visualize()
        }
    }, [dfaTable])


    const visualize = () => {
        let finalString = 'digraph G {rankdir=LR;size="8,5";'

        //Setting the final states (double circle)
        let doubleCircle = 'node [shape = doublecircle,color = darkturquoise];'

        //Setting the non-final states (circle)
        let circle = 'node [shape = circle, color = black];'
        let plain = '"start" [shape = plain];'

        //initial (Start) state

        let init = `"start" -> "${start}";`
        let transition = ''
        console.log(dfaTable)

        for (let i = 0; i < dfaTable.length; i++) {
            let row = dfaTable[i];

            if (row.isFinalState) {
                doubleCircle += ` "${row.state}"`
            }

            for (const symbolIdx in symbols) {
                const symbol = symbols[symbolIdx]
                console.log('row=>', row, 'symbol=>', symbol)
                var tempTransition = `"${row.state}" -> "${row[symbol]}" [label = "${symbol}"];`
                transition += " " + tempTransition
            }

        }
        doubleCircle += ';'
        console.log(doubleCircle)
        console.log(transition);

        var diagraph = finalString + doubleCircle + circle + plain + init + transition + '}'
        console.log(diagraph)

        axios.get(`https://quickchart.io/graphviz?graph=${diagraph}`)
            .then((image) => {
                if (image.data)
                    setDfaImage(encodeURIComponent(image.data))
            })
            .catch((error) => console.log(error.response))


    }

    // useEffect(() => {
    //     evaluate_NFA_to_DFA()
    // })
    //  Do not un-Comment

    const getDfaTable = () => {
        return (
            <table className='divide-y divide-gray-200 m-2'>
                <thead className='border-8 border-white '>
                    <tr><th rowSpan='2' className="
                  px-4
                  py-1
                  text-center text-auto
                  font-auto
                  text-gray-500
                  uppercase
                  tracking-wider
                  divide-y divide-gray-200
                "
                    >States</th><th colSpan={symbols.length} className="
                  px-4
                  py-1
                  text-center text-auto
                  font-auto
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >Symbols</th></tr>
                    <tr>{symbols.map((symbol, key) =>
                        <th key={key} className="
                        px-4
                        py-1
                        text-center text-auto
                        font-auto
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                        >{symbol}</th>)}
                    </tr>
                </thead>
                <tbody className="">
                    {dfaTable.map((row, key) => <tr key={key} className='border-8 border-white '><td className="px-4 py-4 whitespace-nowrap text-center text-auto"><span className='text-red-600 font-lg'>{row.isFinalState ? '*' : ''}</span>{row.state.toString()}</td>
                        {symbols.map((symbol, key) =>
                            <td key={key} className='text-center text-auto'>{row[symbol].toString()}</td>)}
                    </tr>)}
                </tbody>
            </table>
        )
    }

    const stringValid = () => {
        console.log(getValues())

        const str = getValues('inputString')

        //Setting the current state
        var curr = start
        let currRow;
        console.log(str.length)
        for (var i = 0; i < str.length; i++) {
            const char = str[i];
            currRow = dfaTable.filter(obj => {
                return obj.state == curr
              })[0]
              console.log(currRow,char)
            curr = currRow[char]
            console.log(curr)
        }
        currRow = dfaTable.filter(obj => {
            return obj.state == curr
          })[0]
        setAcceptanceStatus(currRow.isFinalState)
    }



    return (
        <div className='min-h-screen dark:text-white p-10 transition duration-500'>
            I will Convert NFA to DFA

            <div className="space-y-4">
                <div className="block bg-green-300 border-b-8 border-r-8 shadow-lg border-green-700 rounded-md w-75 ml-auto my-5" style={{ minHeight: '30vh' }} >

                </div>
                <div className="grid bg-pink-300 border-b-8 border-r-8 shadow-lg border-pink-700 rounded-md w-75 mr-auto my-5" style={{ minHeight: '30vh' }}>
                    {/* Displaying the state transition table */}
                    {dfaTable ? getDfaTable() : ''}
                    <div className="grid grid-cols-12 gap-4 mt-auto mb-2">
                        <input type="button" value="Convert" className='col-end-12 col-span-3  bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                            onClick={evaluate_NFA_to_DFA} />
                    </div>
                </div>
                <div className="block bg-purple-300 border-b-8 border-r-8 shadow-lg border-purple-700 rounded-md w-75 ml-auto my-5" style={{ minHeight: '30vh' }}>
                    {
                        dfaImage && <embed src={`data:image/svg+xml,${dfaImage}`} className='max-h-full' alt="dfa" />

                    }
                </div>
                <div className="block bg-blue-300 border-b-8 border-r-8 shadow-lg border-blue-700 rounded-md w-75 mr-auto my-5 py-2" style={{ minHeight: '30vh' }}>
                    <div className="container text-gray-700 text-sm font-bold my-2">
                        <div className="block mb-3">
                            <input class="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="inputString" type="text" placeholder="Input String"  {...register('inputString')} />
                        </div>

                        <div className="grid grid-cols-8">
                            <input type="button" value="Check" className='col-end-7 col-span-3  bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:green-blue-500 rounded'
                                onClick={stringValid} />
                        </div>
                        {acceptanceStatus==true?'String Accepted':(acceptanceStatus==false?'String Rejected':'')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFA_to_DFA
