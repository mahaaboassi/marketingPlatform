const host = "http://localhost:5000/api"

export const apiRoutes = {
    auth :{
        signIn : `${host}/auth/signIn`,
        logout : `${host}/auth/logout`,
        check : `${host}/auth/check`
    },
    user :{
        list : `${host}`,
        add : `${host}`,
        edit : (id)=>(`${host}/${id}`),
        delete : (id)=>(`${host}/${id}`),
        getOne : (id)=>(`${host}/${id}`)
    },
    company :{
        list : `${host}`,
        add : `${host}`,
        edit : (id)=>(`${host}/${id}`),
        delete : (id)=>(`${host}/${id}`),
        getOne : (id)=>(`${host}/${id}`)
    },
    event :{
        list : `${host}`,
        add : `${host}`,
        edit : (id)=>(`${host}/${id}`),
        delete : (id)=>(`${host}/${id}`),
        getOne : (id)=>(`${host}/${id}`)
    },
    markedDay :{
        list : `${host}`,
        add : `${host}`,
        edit : (id)=>(`${host}/${id}`),
        delete : (id)=>(`${host}/${id}`),
        getOne : (id)=>(`${host}/${id}`)
    },
    magazine :{
        list : `${host}`,
        add : `${host}`,
        edit : (id)=>(`${host}/${id}`),
        delete : (id)=>(`${host}/${id}`),
        getOne : (id)=>(`${host}/${id}`)
    },
    video :{
        list : `${host}`,
        add : `${host}`,
        edit : (id)=>(`${host}/${id}`),
        delete : (id)=>(`${host}/${id}`),
        getOne : (id)=>(`${host}/${id}`)
    },
    ads :{
        list : `${host}`,
        add : `${host}`,
        edit : (id)=>(`${host}/${id}`),
        delete : (id)=>(`${host}/${id}`),
        getOne : (id)=>(`${host}/${id}`)
    },
    history :{
        list : `${host}`,
        add : `${host}`,
        edit : (id)=>(`${host}/${id}`),
        delete : (id)=>(`${host}/${id}`),
        getOne : (id)=>(`${host}/${id}`)
    },
}