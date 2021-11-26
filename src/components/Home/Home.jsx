import { Switch, Route } from 'react-router-dom'
import NFA_to_DFA from './Converters/NFA-DFA/NFA_to_DFA'

function Home() {
    return (
        <div>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
                    <div className="min-h-full transition duration-500 col-span-12 overscroll-auto  dark:bg-gray-700 w-100">
                        <Switch>
                            <Route path='/dashboard' exact component={NFA_to_DFA} />
                        </Switch>
                </div>

            </div>
        </div>
    )
}

export default Home
