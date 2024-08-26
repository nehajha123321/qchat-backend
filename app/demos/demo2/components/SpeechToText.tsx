'use client';

import React, { useState, useEffect, useRef } from 'react';

declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }

    interface SpeechRecognition {
        start: () => void;
        stop: () => void;
        onstart: (() => void) | null;
        onresult: ((event: SpeechRecognitionEvent) => void) | null;
        onspeechend: (() => void) | null;
        onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
        onend: (() => void) | null;
        lang: string;
        interimResults: boolean;
        continuous: boolean;
    }

    interface SpeechRecognitionEvent {
        resultIndex: number;
        results: SpeechRecognitionResultList; // Updated type
    }

    interface SpeechRecognitionResultList {
        readonly length: number;
        item(index: number): SpeechRecognitionResult;
        [index: number]: SpeechRecognitionResult;
    }

    interface SpeechRecognitionResult {
        readonly isFinal: boolean;
        readonly length: number;
        item(index: number): SpeechRecognitionAlternative;
        [index: number]: SpeechRecognitionAlternative;
    }

    interface SpeechRecognitionAlternative {
        readonly transcript: string;
        readonly confidence: number;
    }

    interface SpeechRecognitionErrorEvent {
        error: string;
    }
}

const SpeechToText: React.FC = () => {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-IN';
            recognition.interimResults = true;
            recognition.continuous = false;

            recognition.onstart = () => {
                console.log('Microphone is on');
                setListening(true);
            };

            recognition.onresult = (event: SpeechRecognitionEvent) => {
                let interimTranscript = '';
                const results = event.results;

                for (let i = 0; i < results.length; i++) {
                    interimTranscript += results[i][0].transcript;
                }

                setTranscript(interimTranscript);

                if (results[event.resultIndex].isFinal) {
                    restartTimeoutRef.current = setTimeout(() => {
                        recognition.start();
                        setTranscript('');
                    }, 5000);
                }
            };

            recognition.onspeechend = () => {
                console.log('Speech ended due to silence.');
                recognition.stop();
                setListening(false);
            };

            recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
                console.error('Speech recognition error:', event.error);
                if (event.error === 'no-speech') {
                    console.log('No speech detected.');
                    recognition.start();
                }
            };

            recognition.onend = () => {
                console.log('Microphone is off');
                setListening(false);
            };

            recognitionRef.current = recognition;
        } else {
            console.error('Web Speech API is not supported in this browser.');
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            if (restartTimeoutRef.current) {
                clearTimeout(restartTimeoutRef.current);
            }
        };
    }, []);

    const startListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.start();
        }
    };

    const stopListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
            if (restartTimeoutRef.current) {
                clearTimeout(restartTimeoutRef.current);
            }
        }
    };

    return (
        <div className='flex p-2 gap-8'>
            <button className='bg-blue-600 p-8' onClick={startListening} disabled={listening}>
                Start Mic
            </button>
            <button className='bg-red-500 p-8' onClick={stopListening} disabled={!listening}>
                Stop Mic
            </button>
            <div
                style={{
                    marginTop: '20px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}
            >
                <h2>Real-Time Transcript</h2>
                <p>{transcript || 'Start speaking to see the transcript...'}</p>
            </div>
        </div>
    );
};

export default SpeechToText;