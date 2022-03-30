import { Routes, Route } from 'react-router-dom'
import NFA_TO_DFA from './Converters/NFA-DFA/NFA_TO_DFA'

function Home() {
    return (
        <div>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
                    <div className="min-h-full transition duration-500 col-span-12 overscroll-auto  dark:bg-gray-700 w-100">
                        <Routes>
                            <Route path='/'  element={<NFA_TO_DFA/>} />
                        </Routes>
                </div>

            </div>
        </div>
    )
}

export default Home
