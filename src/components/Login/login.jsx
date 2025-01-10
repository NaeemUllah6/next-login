'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Google from '@/common/assets/images/gogole.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

    const handleMoveButton = () => {

        const container = document.querySelector('.form-container');
        const containerRect = container.getBoundingClientRect();

        const newTop = Math.random() * (containerRect.height - 50);
        const newLeft = Math.random() * (containerRect.width - 100);
        
        setButtonPosition({ top: newTop, left: newLeft });
    };

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    return (
        <React.Fragment>
            <div className="h-screen flex items-center justify-center">
                <div className="w-full md:w-[350px] h-[500px] bg-green-500 translate-x-10 translate-y-10 p-6 -rotate-12 rounded-3xl">
                    <div className="w-full md:w-[350px] h-[500px] bg-white -translate-x-7 custom-shadow -translate-y-7 px-10 py-14 rotate-12 rounded-3xl form-container relative overflow-hidden">
                        <h2 className="text-3xl font-bold text-green-500">Login</h2>
                        <form className="mt-5">
                            <input
                                className="w-full py-2 px-2 border-b-2 border-gray-300 focus:border-green-500 focus:outline-none mt-8 placeholder:text-green-500"
                                type="text"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="w-full py-2 px-2 border-b-2 border-gray-300 focus:border-green-500 focus:outline-none mt-8 placeholder:text-green-500"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className={`bg-green-500 mt-8 px-8 py-3 rounded-xl text-white absolute transition-transform`}
                                style={{
                                    top: buttonPosition.top,
                                    left: buttonPosition.left,
                                    position: buttonPosition.top || buttonPosition.left ? 'absolute' : 'relative',
                                }}
                                disabled={!isFormValid}
                                onMouseEnter={() => {
                                    if (isFormValid) handleMoveButton();
                                }}
                            >
                                Login
                            </button>
                            <div className="mt-8 bg-white">
                                <a
                                    className="px-2 py-2 rounded-xl custom-shadow border flex gap-2 items-center text-base whitespace-nowrap"
                                    href="https://google.com"
                                >
                                    <Image width={30} height={30} src={Google} alt="Google Logo" /> Continue with Google
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
