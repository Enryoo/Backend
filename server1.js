const http = require('http')

const server = http.createServer((req, res)=>{
    const currentHour = moment().get('hour') 
    console.log('currentHour', currentHour)
    let message = 'Buenas Noches!'    
    if(currentHour >= 6 && currentHour <= 12){
        message = 'Buenos Días!'
    }else if (currentHour >= 13 && currentHour <= 19){
        message = 'Buenas tardes!'
    }
    res.end(JSON.stringify(message))
})

const connection = server.listen(3000, ()=>{
    console.log(`Listening app port ${connection.address().port}`)
})