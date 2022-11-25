import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://b612-used-products-resale-server-side.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {

                    if (data.accessToken) {
                        localStorage.setItem('accessToken12', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;