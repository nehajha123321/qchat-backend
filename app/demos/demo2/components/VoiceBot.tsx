/* 'use client';

import React, { useState, useEffect } from 'react';
//import useSound from 'use-sound';

const micOnSound = '/sounds/mic-on.mp3';
const micOffSound = '/sounds/mic-off.mp3';

const VoiceChatBot: React.FC = () => {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [chatHistory, setChatHistory] = useState<{ user: string, bot: string }[]>([]);
    const [botSpeaking, setBotSpeaking] = useState(false);

        const [playMicOn] = useSound(micOnSound);
        const [playMicOff] = useSound(micOffSound);

    const startListening = () => {
        setListening(true);
        playMicOn();
        // Start listening logic...
    };

    const stopListening = () => {
        setListening(false);
        playMicOff();
        // Stop listening logic...
    };

    useEffect(() => {
        if (listening) {
            // Simulate a bot response
            setTimeout(() => {
                const botMessage = 'This is a bot response.';
                setChatHistory(prev => [...prev, { user: transcript, bot: botMessage }]);
                setBotSpeaking(true);
                setTimeout(() => setBotSpeaking(false), 2000); // Simulate bot speaking for 2 seconds
            }, 2000);
        }
    }, [listening]);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-3xl">
                <div className="bg-gray-800 rounded-lg p-4 h-96 overflow-y-auto mb-4">
                    {chatHistory.map((chat, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-blue-400">User: {chat.user}</p>
                            <p className="text-green-400 mt-1">
                                Bot: {chat.bot}
                                {botSpeaking && (
                                    <span className="ml-2 animate-wave text-xl">🌊</span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={listening ? stopListening : startListening}
                        className={`w-24 h-24 rounded-full bg-red-500 flex items-center justify-center 
            ${listening ? 'animate-pulse' : ''} transition-transform transform hover:scale-110`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v5a1 1 0 102 0V6zm-1 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VoiceChatBot; */