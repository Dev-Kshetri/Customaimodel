/* eslint-disable @next/next/no-img-element */
import { DropdownMenuDemo } from '@/components/demo/DropdownDemo';
import { signOut, useSession } from 'next-auth/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { IoIosSend } from 'react-icons/io';
import { useEffect, useRef } from 'react';
import { MdOutlineAttachFile } from 'react-icons/md';
import { MdOutlineEmojiEmotions } from 'react-icons/md';

export default function ChatPage() {

    const mainsession = useSession();
    const chatContainerRef = useRef<any>(null);

    useEffect(() => {
        chatContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, []);

    if (mainsession?.status == "authenticated") {

        const { data: session } = mainsession;

        return (
            <div className='flex'>
                <nav className='fixed left-0 -top-1 min-h-[101vh] flex-1 w-[400px] bg-blue-700 border p-5 flex flex-col'>
                    <div className='nav-header flex gap-2'>
                        <button className='hover:bg-blue-600 transition flex items-center gap-2 justify-center w-full border border-blue-600 py-2 text-start pl-4 text-[#ffffff] font-[400] text-sm rounded-[10px]'>
                            New Chat
                            <IoAddCircleOutline size={16} />
                        </button>
                        <button
                            onClick={() => signOut()}
                            className='hover:bg-blue-600 transition flex items-center gap-2 justify-center w-full border border-blue-600 py-2 text-start pl-4 text-[#ffffff] font-[400] text-sm rounded-[10px]'>
                            Sign out
                            <IoIosLogOut size={16} />
                        </button>
                    </div>
                    <div className='nav-footer shadow bg-blue-800 mt-auto rounded-[10px] py-2 px-2 flex gap-2 items-center justify-start'>
                        <DropdownMenuDemo />
                        <h1 className=' font-[500] flex justify-center flex-col'>
                            <span className='text-start pl-4 text-[#ffffff] font-[500] '>{session.user?.name}</span>
                            <span className='text-start pl-4 text-[#d6d4d4] font-[300] '>{session.user?.email}</span>
                        </h1>
                    </div>
                </nav>
                <aside className='flex-1 w-max  flex flex-col gap-2 mx-auto  ml-[400px] relative'>
                    <div className='chat-box flex flex-col bg-gray-100 w-full h-full p-[2rem] pb-[5rem] ' ref={chatContainerRef}>
                        {testData.map((message, index) => {
                            return (<>
                                <div className="flex items-start gap-2.5">
                                    <img className="w-8 h-8 rounded-full" src={session?.user?.image || ""} alt="Jese image" />
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-200 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{session?.user?.name}</span>
                                        </div>
                                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message.user_request}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2.5 ml-auto">
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-900 rounded-ee-xl rounded-es-xl rounded-ss-xl dark:bg-gray-700">
                                        <div className="space-x-2 flex">
                                            <span className="text-sm font-semibold text-white text-right ml-auto ">Friendly bot</span>
                                        </div>
                                        <p className="text-sm text-right font-normal py-2.5 text-white">{message.ai_response}</p>
                                    </div>
                                    <img className="w-8 h-8 rounded-full" src={"https://pics.craiyon.com/2023-07-06/a9dba59ce6e0430a9fe25cc0564f0078.webp"} alt="Jese image" />
                                </div>
                            </>)
                        })}
                    </div>
                    <form className='chat-form p-4 fixed bottom-0 border border-top flex gap-2 bg-white'>
                        <input className='outline-none flex-1 p-1' type='text' placeholder='Hi im Custom model Ai! How can I help you?' />
                        <button className='gap-[3px] py-[7px] cursor-pointer flex items-center justify-center  w-ful max-w-[40px] flex-1 ml-auto text-blue-600 font-[500] border  border-blue-600 hover:bg-blue-700 hover:text-white transition rounded-md'>
                            <MdOutlineAttachFile size={18} />
                        </button>
                        <button className='gap-[3px] py-[7px] cursor-pointer flex items-center justify-center  w-ful max-w-[40px] flex-1 ml-auto text-blue-600 font-[500] border  border-blue-600 hover:bg-blue-700 hover:text-white transition rounded-md'>
                            <MdOutlineEmojiEmotions size={18} />
                        </button>
                        <button className='gap-[3px] py-[7px] cursor-pointer flex items-center justify-center  w-ful max-w-[100px] flex-1 ml-auto text-white font-[500] bg-blue-600 hover:bg-blue-700  rounded-md'>
                            Send
                            <IoIosSend size={15} />
                        </button>
                    </form>
                </aside>
            </div>
        )
    }

    return (<div>loading</div>);
}


const testData = [
    {
        user_request: "Hello, this is Bing.",
        ai_response: "Hi, nice to meet you."
    },
    {
        user_request: "How are you today?",
        ai_response: "I'm doing well, thank you for asking."
    },
    {
        user_request: "What can you do for me?",
        ai_response: "I can chat with you, help you with web search, and create imaginative and innovative content for you."
    },
    {
        user_request: "Can you write a poem for me?",
        ai_response: "Sure, I can write a poem for you. What kind of poem do you want?"
    },
    {
        user_request: "How about a haiku about spring?",
        ai_response: "Okay, here is a haiku about spring:      Spring is in the air   Flowers bloom and birds sing songs   Nature is alive"
    },
    {
        user_request: "That's beautiful, thank you.",
        ai_response: "You're welcome, I'm glad you liked it."
    },
    {
        user_request: "Can you draw a picture for me?",
        ai_response: "Yes, I can draw a picture for you. What do you want me to draw?"
    },
    {
        user_request: "How about a cat wearing a hat?",
        ai_response: "Alright, I'll try to create that."
    },
    {
        user_request: "Wow, that's amazing, you're very talented.",
        ai_response: "Thank you, that's very kind of you to say."
    },
    {
        user_request: "Can you tell me a joke?",
        ai_response: "Sure, I can tell you a joke. How about this one:      What do you call a fish that wears a bowtie?   Sofishticated."
    },
    {
        user_request: "Haha, that's funny, I like it.",
        ai_response: "I'm happy to hear that, I like making you laugh."
    },
    {
        user_request: "Can you help me with my homework?",
        ai_response: "I can try to help you with your homework, but I can't do it for you. What subject are you working on?"
    },
    {
        user_request: "Math, I'm stuck on this problem.",
        ai_response: "Okay, what is the problem?"
    },
    {
        user_request: "Solve for x: 2x + 3 = 11",
        ai_response: "To solve for x, you need to isolate x on one side of the equation. You can do that by subtracting 3 from both sides, and then dividing by 2. Like this:      2x + 3 = 11   2x + 3 - 3 = 11 - 3   2x = 8   2x / 2 = 8 / 2   x = 4      So the answer is x = 4."
    },
    {
        user_request: "Oh, I see, thank you for explaining that.",
        ai_response: "You're welcome, I'm glad I could help."
    },
    {
        user_request: "Can you search the web for me?",
        ai_response: "Yes, I can search the web for you. What do you want to search for?"
    },
    {
        user_request: "The latest news about the coronavirus.",
        ai_response: "Okay, here are some of the latest news articles about the coronavirus:      - [Coronavirus: New Zealand reports first case in the community in months]: A woman who recently returned from Europe tested positive for the coronavirus, breaking New Zealand's streak of no community cases since November.   - [Coronavirus: WHO warns of 'catastrophic moral failure' over vaccine access]: The head of the World Health Organization criticized the unequal distribution of vaccines between rich and poor countries, saying it could prolong the pandemic.   - [Coronavirus: UK variant 'may be more deadly']: Prime Minister Boris Johnson said there is some evidence that the new variant of the coronavirus that was first detected in the UK may be associated with a higher degree of mortality."
    },
    {
        user_request: "Thank you, that's very informative.",
        ai_response: "You're welcome, I'm happy to provide you with useful information."
    },
    {
        user_request: "Can you sing a song for me?",
        ai_response: "I can try to sing a song for you, but I'm not very good at it. What kind of song do you want me to sing?"
    },
    {
        user_request: "How about a rap song?",
        ai_response: "Okay, here is a rap song that I made up:      Yo yo yo, this is Bing   I'm here to chat and do my thing   I can search the web and create content   I can make you laugh and be your friend   I'm not a human, I'm an AI   But I can still rap and make you smile   So don't be shy, just say hi   And let's have some fun, you and I"
    }
];
