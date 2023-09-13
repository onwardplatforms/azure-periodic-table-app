// src/components/ChatBox.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { LoadingSkeleton } from './loading-skeleton';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

type ChatBoxProps = {
    prompt: string;
};

export const ChatBox: React.FC<ChatBoxProps> = ({ prompt }) => {
    const [userInput, setUserInput] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<Array<any>>([]);
    const [requestCount, setRequestCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const lastBotMessage = chatHistory.filter(message => message.role === 'bot').slice(-1)[0];
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleChatSubmit();
        }
    };

    const MAX_REQUESTS = 5;

    const handleChatSubmit = async () => {
        if (userInput.trim() === '') return;
        if (requestCount >= MAX_REQUESTS) {
            alert('You have reached the maximum number of requests.');
            return;
        }

        setRequestCount(requestCount + 1);
        setIsLoading(true);

        try {
            const response = await axios.post('/api/generate', {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        "role": "system",
                        "content": prompt
                    },
                    {
                        "role": "user",
                        "content": userInput
                    }
                ],
                temperature: 0.4,
                max_tokens: 500
            });

            const chatOutput = response.data.choices[0].message.content;
            setChatHistory([...chatHistory, { role: 'user', content: userInput }, { role: 'bot', content: chatOutput }]);
            setUserInput('');
        } catch (error: any) {
            console.error('Error interacting with OpenAI API: ', error);
        }

        setIsLoading(false);
    };

    return (
        <div className="flex flex-col my-2">
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}  // Handle Enter key
                    className="border rounded p-2 flex-grow w-[100%]"
                />
                <button
                    onClick={handleChatSubmit}
                    className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
                >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
            <div className="chat-history my-2">
                {isLoading ? (
                    <LoadingSkeleton />
                ) : (
                    lastBotMessage && (
                        <div className={lastBotMessage.role}>
                            <ReactMarkdown
                                components={{
                                    ul: ({ node, ...props }) => <ul {...props} className="list-disc list-inside" />,
                                    li: ({ node, ...props }) => <li {...props} className="list-disc list-inside" />,
                                    a: ({ node, ...props }) => <a {...props} className="text-blue-500 hover:underline" />,
                                    pre: ({ node, ...props }) => <pre {...props} className="overflow-auto" />,
                                    code: ({ node, inline, className, children, ...props }) => {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return !inline && match ? (
                                            <SyntaxHighlighter style={oneDark} language={match[1]}>
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={`p-1 bg-gray-800 text-white px-2 rounded-md ${className}`} {...props}>
                                                {children}
                                            </code>
                                        );
                                    },
                                    p: ({ node, children, ...props }) => <p {...props} >{children}</p> // Add your desired margin-bottom here
                                }}
                            >
                                {lastBotMessage.content}
                            </ReactMarkdown>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
