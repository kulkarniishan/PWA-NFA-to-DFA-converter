import React from 'react'
import HomeNavbar from './HomeNavbar'
import { Switch, Route } from 'react-router-dom'
import NFA_to_DFA from './Converters/NFA-DFA/NFA_to_DFA'
import CFG_to_CNF from './Converters/CFG-CNF/CFG_to_CNF'

function Home() {
    return (
        <div>
            <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
                <div className="grid grid-cols-12">
                    <div className="col-span-5 sm:col-span-4 md:col-span-2">
                        <HomeNavbar />
                    </div>
                    <div className="col-span-7 sm:col-span-8 md:col-span-10  overscroll-auto  dark:bg-gray-700 w-100">
                        <Switch>
                            <Route path='/dashboard' exact component={NFA_to_DFA} />
                            <Route path='/dashboard/CNF-to-CNF' component={CFG_to_CNF} />
                        </Switch>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
