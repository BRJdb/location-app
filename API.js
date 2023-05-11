const BASE_URL = "https://gifted-red-gopher.cyclic.app";

export const API = {
    submitDriverData(data){
        const _data = data;
        const options = {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify(_data)
        }
        fetch(BASE_URL+"/create", options)
        .then(result => console.log(result))
        .catch(err=> console.error(err))
    },
}
