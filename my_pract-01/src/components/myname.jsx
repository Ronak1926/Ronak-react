import { useEffect } from "react"

export function MyName({ name }) {

    /* useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
        }).then((Response) => {
            if (!Response.ok) {
                throw new Error("Network response was not ok");
            }
            return Response.json()
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err.message);
        })
    }) */

    useEffect(() => {
         const controller = new AbortController(); // 1. Create controller
        const signal = controller.signal;
        async function fetchData(){
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/usersa", {
                    method: "GET",
                    signal: signal // 2. Pass the signal to fetch
                });
                if (!response.ok) {
                    throw new Error(`The actual network response is ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data);
            } catch(err){
                console.log(err.message)
            }
            }
            fetchData();
              return () => {
                controller.abort();
            };
        })

    return (
        <div>
            <b>hello my name is {name}!</b>
        </div>
    )
}