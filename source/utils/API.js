if( process.env.NODE_ENV === 'development' ) var url = 'http://localhost:4002'
if( process.env.NODE_ENV === 'production' )  var url = 'http://35.241.141.40:4002'
import store from '../store/store'
const API = {
    get: function( coll ) {
        fetch(`${url}/${coll}`).then( res => {
            if( res.status !== 200 ) {
                console.log('Status Code: ' + res.status)
                return
            }
            var Coll = capitalize(coll)
            res.json().then( data => {
                store.dispatch( `set${Coll}` , data )
            })
        })
        .catch(err => {
            console.log('Fetch Error :-S', err)
        })
    },
    save: function() {
        const args = (arguments === 1 ? [arguments[0]] : Array.apply( null, arguments ))
        const coll   = args.shift() || null
        const data   = args.shift() || null

        fetch(`${url}/${coll}s`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, same-origin, *omit
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            })
            .then( res => {
                if( res.status !== 200 ) {
                    console.log('Status Code: ' + res.status)
                    return
                }
                res.json().then( d => {
                    if( d.err ) {
                        console.log( d.err )
                        return
                    }
                    var Coll = capitalize(coll)
                    store.dispatch( `add${Coll}`, d)
                })
            })
            .catch(err => {
                console.log('Fetch Error :-S', err)
            })
    },
    del: function() {
        const args = (arguments === 1 ? [arguments[0]] : Array.apply( null, arguments ))
        const coll = args.shift() || null
        const id   = args.shift() || null

        fetch(`${url}/${coll}s/${id}`, {
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, same-origin, *omit
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
            })
            .then( res => {
                if( res.status !== 200 ) {
                    console.log('Status Code: ' + res.status)
                    return
                }
                var Coll = capitalize(coll)
                store.dispatch( `del${Coll}`, id )
            })
            .catch(err => {
                console.log('Fetch Error :-S', err)
            })
    },
    update: function() {
        const args = (arguments === 1 ? [arguments[0]] : Array.apply( null, arguments ))
        const coll = args.shift() || null
        const obj  = args.shift() || null


        fetch(`${url}/${coll}s/${obj._id}`, {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, same-origin, *omit
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                redirect: "follow", // manual, *follow, error
                referrer: "no-referrer", // no-referrer, *client
                body: JSON.stringify(obj), // body data type must match "Content-Type" header
            })
            .then( res => {
                if( res.status !== 200 ) {
                    console.log('Status Code: ' + res.status)
                    return
                }
            })
            .catch(err => {
                console.log('Fetch Error :-S', err)
            })

    }
}
export default API

function capitalize( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
