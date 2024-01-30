"use client";
import { Login } from "@/components/custom/Login";
import { ChatPage } from "@/pages/Chat.page";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react";


export default function Home() {


  const session = useSession()

  console.log("session", session)


  if (session.status == "authenticated") {
    return (<ChatPage />)
  }

  if (session.status == "unauthenticated") {
    return (<Login />)
  }
}


