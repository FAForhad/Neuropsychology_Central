import React from 'react';

const Navber = () => {
    return (
        <div>
            <header aria-label="Site Header" class="shadow-sm lg:py-7">
                <div
                    class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
                >
                    <div class="flex w-0 flex-1 lg:hidden">
                        <img className='h-8 w-8' src="https://i.postimg.cc/ZndTTsM5/favicon.png" alt="" />
                    </div>

                    <div class="lg:flex items-center gap-4 hidden cursor-pointer">
                        <img className='h-16 w-16' src="https://i.postimg.cc/ZndTTsM5/favicon.png" alt="" />
                        <div className='mt-4 text-2xl text-start uppercase font-bold bg-yellow-600 text-white p-11 z-50 ' style={{ clipPath: 'polygon(0 0, 76% 0, 100% 100%, 18% 100%)' }}>
                            <h1 className='pr-5'>Neuropsychology </h1>
                            <h1 className=''>Central</h1>
                        </div>
                    </div>

                    <div class="flex w-0 flex-1 justify-end lg:hidden">
                        <button class="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
                            <span class="sr-only">Menu</span>
                            <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clip-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <nav
                        aria-label="Site Nav"
                        class="hidden items-center justify-center gap-8 uppercase text-sm font-bold lg:flex lg:w-0 lg:flex-1 "
                    >
                        <a class="text-gray-900 hover:text-yellow-500 " href="">About</a>
                        <a class="text-gray-900 hover:text-yellow-500 " href="">Blog</a>
                        <a class="text-gray-900 hover:text-yellow-500 " href="">Projects</a>
                        <a class="text-gray-900 hover:text-yellow-500 " href="">Contact</a>
                    </nav>

                    <div class="hidden items-center gap-4 lg:flex">
                        <a
                            href="#"
                            class="rounded-sm bg-yellow-600 px-5 py-3 hover:bg-gray-100 hover:text-yellow-500 uppercase text-sm font-bold text-white"
                            style={{ clipPath: 'polygon(0 0, 78% 0, 100% 100%, 18% 100%)' }}
                        >
                            Log in
                        </a>

                        <a
                            href="#"
                            class="rounded-sm bg-yellow-600 px-5 py-3 hover:bg-gray-100 hover:text-yellow-500 uppercase text-sm font-bold text-white"
                            style={{ clipPath: 'polygon(0 0, 78% 0, 100% 100%, 18% 100%)' }}
                        >
                            Sign up
                        </a>
                    </div>
                </div>

                <div class="border-t border-gray-100 lg:hidden">
                    <nav
                        class="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
                    >
                        <a class="flex-shrink-0 pl-4 text-gray-900" href="">About</a>
                        <a class="flex-shrink-0 pl-4 text-gray-900" href="">Blog</a>
                        <a class="flex-shrink-0 pl-4 text-gray-900" href="">Projects</a>
                        <a class="flex-shrink-0 pl-4 text-gray-900" href="">Contact</a>
                    </nav>
                </div>
            </header>

        </div>
    );
};

export default Navber;