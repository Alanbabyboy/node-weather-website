const request=require('request')
const forecast=(latitude,longtitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=e8a1551a82fcece8fbebfaf10cc78997&query=' + longtitude + ',' + latitude + '&units=f'
request({url,json:true},(error,{body})=>{
  if(error){
   callback('Unable to connect to weather service.',undefined)
  }else if(body.error){
   callback('Unable to find location.',undefined)
  }else{
   callback(undefined, body.current.weather_descriptions[0] + '.It is currently ' +body.current.temperature + ' degrees. There is a ' + body.current.precip + '% chance of rain.')
  }
})
}
module.exports=forecast