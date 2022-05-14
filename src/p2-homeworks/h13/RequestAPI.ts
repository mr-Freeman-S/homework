const requestOptions =(value:boolean)=> ({
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify({success:value})
})

export const RequestAPI  = {
    postCheckBoxValue(value:boolean){
          return fetch("https://neko-cafe-back.herokuapp.com/auth/test",requestOptions(value))
    }
}