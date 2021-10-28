import React from 'react'
import HomeNavbar from './HomeNavbar'

function Home() {
    return (
        <div>
            <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 md:col-span-2">
                        <HomeNavbar/>
                    </div>
                    <div className="col-span-auto  overscroll-auto">

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
