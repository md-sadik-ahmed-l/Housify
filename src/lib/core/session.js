"use server"

import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export const getUserSession = async () => {
    try{
        const session = await auth.api.getSession({
        headers: await headers() // some endpoints might require headers
    })
    // console.log("session", session)

    return session?.user || null;
    }
    catch(error){
        console.log(error)
        return {}
    }


}

export const getUserToken = async () => {
    try{
        const session = await auth.api.getSession({
        headers: await headers() // some endpoints might require headers
    })
    // console.log("session", session)

    return session?.session?.token || null;
    }
    catch(error){
        console.log(error)
        return {}
    }
}


export const ownerRole = async (role) => {
    const user = await getUserSession();
    if(user.role !== role ){
        return redirect('/unauthorized')
    }
}