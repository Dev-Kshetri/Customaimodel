"use client";


/* eslint-disable @next/next/no-img-element */
import { DropdownMenuDemo } from '@/components/demo/DropdownDemo';
import { signOut, useSession } from 'next-auth/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { IoIosSend } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { MdOutlineAttachFile } from 'react-icons/md';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import Chats from './Chats';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const urls = {
    swaggerIndex: "https://llmapiservice.azurewebsites.net/swagger/index.html",
    apiUrl: "https://llmapiservice.azurewebsites.net/api/Chat",
    apiStartingMessage: "Hey  there !  I ' m  Nepali  Babu ,  your  friendly  AI  assistant  with  a  nerdish  attitude  and  a  good  sense  of  humor .  My  goal  is  to  provide  you  well - reason ed  answers  that  are  both  correct  and  helpful .  Let's  dive  into  some  interesting  facts  together !"
};

export default function ChatPage() {

    const mainsession = useSession();
    const chatContainerRef = useRef<any>();
    const [aiResponseData, setAiResponseData] = useState<any>([]);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    useEffect(() => {
        chatContainerRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        fetch(urls.apiUrl).then(res => res.json()).then((response) => {
            console.log(response.chatHistories);
            setAiResponseData(response.chatHistories)
        })
    }, []);

    if (mainsession?.status == "authenticated") {

        const { data: session } = mainsession;
        const onSubmit = (data: any) => {
            fetch(`${urls.apiUrl}?question=${data.userQuestion}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Allow-Cross-Origin-Origin": "*",
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(res => res.json()).then((response) => {
                console.log(response.chatHistories);
                setAiResponseData((prevData: any) => [...prevData, ...response.chatHistories])
            })
            console.log(data);
            reset();
        };

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
                    <Chats chatContainerRef={chatContainerRef} data={aiResponseData} />
                    <form className='chat-form p-4 fixed bottom-0 border border-top flex gap-2 bg-white' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("userQuestion", { required: true })} className='outline-none flex-1 p-1' type='text' placeholder='Hi im Custom model Ai! How can I help you?' />
                        <button className='gap-[3px] py-[7px] cursor-pointer flex items-center justify-center  w-ful max-w-[40px] flex-1 ml-auto text-blue-600 font-[500] border  border-blue-600 hover:bg-blue-700 hover:text-white transition rounded-md'>
                            <MdOutlineAttachFile size={18} />
                        </button>
                        <button className='gap-[3px] py-[7px] cursor-pointer flex items-center justify-center  w-ful max-w-[40px] flex-1 ml-auto text-blue-600 font-[500] border  border-blue-600 hover:bg-blue-700 hover:text-white transition rounded-md'>
                            <MdOutlineEmojiEmotions size={18} />
                        </button>
                        <button type='submit' className='gap-[3px] py-[7px] cursor-pointer flex items-center justify-center  w-ful max-w-[100px] flex-1 ml-auto text-white font-[500] bg-blue-600 hover:bg-blue-700  rounded-md'>
                            Send
                            <IoIosSend size={15} />
                        </button>
                    </form>
                </aside>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="loader">Loading...</div>
        </div>);
}


