const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            info:null,
            id: null,
            rating:null,
            name: null,
            contact: null,
            address: null,
        },
        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            getInfo: url => {
                fetch(url, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        info: data
                    });
                }).catch(error => {
                    console.log(error)
                })
            },
        }
    }
}
export default getState;
