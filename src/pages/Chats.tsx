/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from '@tanstack/react-query'


const urls = {
    swaggerIndex: "https://llmapiservice.azurewebsites.net/swagger/index.html",
    apiUrl: "https://llmapiservice.azurewebsites.net/api/Chat",
    apiStartingMessage: "Hey  there !  I ' m  Nepali  Babu ,  your  friendly  AI  assistant  with  a  nerdish  attitude  and  a  good  sense  of  humor .  My  goal  is  to  provide  you  well - reason ed  answers  that  are  both  correct  and  helpful .  Let's  dive  into  some  interesting  facts  together !"
};


export default function Chats({ chatContainerRef, data }: any) {

    const mainsession = useSession();
    if (mainsession?.status == "authenticated") {

        const { data: session } = mainsession;

        return (
            <div
                className="chat-box flex flex-col bg-gray-100 w-full h-full p-[2rem] pb-[5rem] min-h-[95vh] justify-end"
                ref={chatContainerRef}
            >
                {data.map((chat: any) => {
                    return (<>
                        {chat.role == "user"
                            ?
                            (<div className="flex items-start gap-2.5">
                                <img className="w-8 h-8 rounded-full" src={session?.user?.image || ""} alt="Jese image" />
                                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-200 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{session?.user?.name}</span>
                                    </div>
                                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{chat.content}</p>
                                </div>
                            </div>)
                            :
                            (<div className="flex items-start gap-2.5 ml-auto">
                                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-900 rounded-ee-xl rounded-es-xl rounded-ss-xl dark:bg-gray-700">
                                    <div className="space-x-2 flex">
                                        <span className="text-sm font-semibold text-white text-right ml-auto ">Friendly bot</span>
                                    </div>
                                    <p className="text-sm text-right font-normal py-2.5 text-white">{chat.content}</p>
                                </div>
                                <img className="w-8 h-8 rounded-full" src={"https://pics.craiyon.com/2023-07-06/a9dba59ce6e0430a9fe25cc0564f0078.webp"} alt="Jese image" />
                            </div>)
                        }
                    </>)
                })}
            </div>
        );
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="loader">Loading...</div>
        </div>);
};

/*
 
*/
{/* <div className="flex items-start gap-2.5">
                        <img className="w-8 h-8 rounded-full" src={session?.user?.image || ""} alt="Jese image" />
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-200 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{session?.user?.name}</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{chat.user_request}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2.5 ml-auto">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-900 rounded-ee-xl rounded-es-xl rounded-ss-xl dark:bg-gray-700">
                            <div className="space-x-2 flex">
                                <span className="text-sm font-semibold text-white text-right ml-auto ">Friendly bot</span>
                            </div>
                            <p className="text-sm text-right font-normal py-2.5 text-white">{chat.ai_response}</p>
                        </div>
                        <img className="w-8 h-8 rounded-full" src={"https://pics.craiyon.com/2023-07-06/a9dba59ce6e0430a9fe25cc0564f0078.webp"} alt="Jese image" />
                    </div> */}