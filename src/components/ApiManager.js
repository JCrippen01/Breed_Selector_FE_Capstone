export const getAllBreeds = () => {
    return fetch("http://localhost:8088/breeds")
    .then(res => res.json())


    // useEffect(() => {
    //     getAllBreeds()
    //     .then((data) => {setBreeds(data)})
    //  },[] )
    
    //need to set breeds
}

// export const getCurrentUser = () => {
//     return localStorage.getItem("site_user")
// }

// export const createNewUser = (user) => {
//     return fetch("http://localhost:8088/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//     })
//         .then(res => res.json())
// }
