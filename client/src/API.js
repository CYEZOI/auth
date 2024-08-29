class API {
    static Post = async (Name, { APIParams: Params, }) => {
        return fetch(`http://localhost:5002/api/${Name}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Params,
                Auth: {
                    Token: localStorage.getItem("Token"),
                    Username: localStorage.getItem("Username"),
                },
            }),
        })
            .then((ResponseData) => ResponseData.json())
            .then((JSONData) => {
            })
            .catch((error) => error);
    }
}

export default API;