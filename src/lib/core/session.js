import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export const getUserSession = async () => {
    try{
        const session = await auth.api.getSession({
        headers: await headers() // some endpoints might require headers
    })

    return session?.user || null;
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