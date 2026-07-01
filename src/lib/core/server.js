

import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const authHeaders = async () => {

  const token = await getUserToken();
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return headers;
}


export const serverFetch = async (path) => {
   try {
     const res = await fetch(`${baseUrl}${path}`);
    // handle 401, 404, 403
    return await res.json();

   } catch (error) {
    console.log(error)
    return {}
   }
}

export const protectedFetch = async (path) => {
   try {
     const res = await fetch(`${baseUrl}${path}`, 
      {
        headers: await authHeaders()
        
      }
     );


    // handle 401, 404, 403
    return await res.json();

   } catch (error) {
    console.log(error)
    return {}
   }
}





export const serverDelete = async (path, data) => {
    const res = await fetch(`${baseUrl}${path}`, { method: "DELETE" }
      );

    // handle 401, 404, 403

    return await res.json();
}

export const serverMutation = async (path, data) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ... await authHeaders()
        },
        body: JSON.stringify(data),
    });

    // handle 401, 404, 403

    return await res.json();
}

export const serverPatch = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  return await res.json();
};


