const API_URL = "https://dev-trudes-api.onrender.com/api";

export const loginRequest = async (data) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

export const getContacts = async (token) => {
    const res = await fetch(`${API_URL}/contact/`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.json();
}

export const postContacts = async (data) => {
    const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
    })

    return res.json();
}