import React from 'react';
import './Features.css'

const Feature1 = () => {
    return (
        <div className=''>
            <div className=" lg:py-14 lg:px-32">
                <div className="features border-b-8 border-yellow-500">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">

                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 mt-24 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">

                                </span>{' '}
                            </h2>
                            <p className="text-yellow-500 md:text-2xl lg:text-6xl font-bold uppercase">
                                We’re here to help <br />
                                you get happier
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative px-4 bottom-20 sm:px-0">
                    <div className="absolute inset-0 border-yellow-500 h-1/2" />
                    <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-xl border-x-2 border-yellow-500 border-b-8">
                        <div className="inline-block p-8 text-center lg:my-12">
                            <p className='py-2' >Find treatment for</p>
                            <p className="font-bold tracking-wide uppercase text-xl text-gray-800">
                                Couple Theraphy
                            </p>
                            <button className="btn my-6 font-bold rounded-sm border-none hover:bg-gray-200 text-white hover:text-black bg-yellow-500">GET STARTED</button>
                        </div>
                        <div className="inline-block p-8 text-center lg:my-12">
                            <p className='py-2' >Find treatment for</p>
                            <p className="font-bold tracking-wide uppercase text-xl text-gray-800">
                                Anxiety Disorder
                            </p>
                            <button className="btn my-6 font-bold rounded-sm border-none hover:bg-gray-200 text-white hover:text-black bg-yellow-500">GET STARTED</button>
                        </div>
                        <div className="inline-block p-8 text-center lg:my-12">
                            <p className='py-2' >Find treatment for</p>
                            <p className="font-bold tracking-wide uppercase text-xl text-gray-800">
                                Treating Depression
                            </p>
                            <button className="btn my-6 font-bold rounded-sm border-none hover:bg-gray-200 text-white hover:text-black bg-yellow-500">GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature1;