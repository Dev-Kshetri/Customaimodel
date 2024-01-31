"use client";
import { Login } from "@/components/custom/Login";
import ChatPage from "@/pages/ChatPage";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react";


export default function Home() {


  const session = useSession()

  if (session.status == "authenticated") {
    return (<ChatPage />)
  }

  if (session.status == "unauthenticated") {
    return (<Login />)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader">Loading...</div>
    </div>
  );

}


