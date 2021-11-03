import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NFA_to_DFA from './Converters/NFA-DFA/NFA_to_DFA'
import CFG_to_CNF from './Converters/CFG-CNF/CFG_to_CNF'

function Home() {
    return (
        <div>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-8 md:col-span-10  overscroll-auto  dark:bg-gray-700 w-100">
                        <Switch>
                            <Route path='/dashboard' exact component={NFA_to_DFA} />
                            <Route path='/dashboard/CFG-to-CNF' component={CFG_to_CNF} />
                        </Switch>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
