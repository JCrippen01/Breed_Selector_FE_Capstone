export const getAllBreeds = () => {

}

export const FetchBreedsByName = (props)=>{
    return fetch(`http://localhost:8088/breedsByName?breedId=${props.name}`)
    .then(res => res.json())
}

export const PostCandyOrder = (object)=>{
    return fetch(`http://localhost:8088/purchases`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
}