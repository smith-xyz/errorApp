import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default (props: { children?: React.ReactNode }) => {
    const [showSubmenu, setShowSubmenu] = useState(false)

    return (
    <React.Fragment>
        <div className="flex">
            <div className={`flex flex-col h-screen bg-gray-900 text-white w-48`}>
                <div className="flex flex-row">
                    <Link to="/" className="nav-link no-underline p-2 flex-1">ErrorApp</Link>
                </div>
                <ul className="flex flex-col bg-gray-800">
                    <Link to="/" className="nav-link no-underline p-2 hover:bg-gray-700">Home</Link>
                    <div className="">
                        <div className="flex flex-row hover:bg-gray-700">
                            <Link to="/counter" className="nav-link no-underline p-2 flex-1">Counter</Link>
                            <button className="px-2 hover:bg-gray-600" 
                                    onClick={() => setShowSubmenu(!showSubmenu)}>{showSubmenu ? '-' : '+'}
                            </button>
                        </div>
                        <div className={`sub-menu flex flex-col bg-gray-900 accordion-content ${showSubmenu ? 'content-open' : ''}`}>
                            <Link to="/counter" className={`nav-link no-underline p-2 pl-4 flex-1 hover:bg-gray-700`}>Some</Link>
                            <Link to="/counter" className={`nav-link no-underline p-2 pl-4 flex-1 hover:bg-gray-700`}>Other</Link>
                            <Link to="/counter" className={`nav-link no-underline p-2 pl-4 flex-1 hover:bg-gray-700`}>Links</Link>
                        </div>
                    </div>
                    <Link to="/fetch-data" className="nav-link no-underline p-2 hover:bg-gray-700">Fetch data</Link>
                </ul>
            </div>
            <div className="flex flex-col flex-1">
                <div className="p-4 inline">
                    {props.children}
                </div>
            </div>
        </div>
    </React.Fragment>
    )}
