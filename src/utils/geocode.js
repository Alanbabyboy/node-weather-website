const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxhbmxsb3lkejExIiwiYSI6ImNsM3Y4OGhoZTA1bmkzZXF3M3poMHVpNmIifQ.AQlfv3H3QtfQuXwvKKKjFg&limit=1'
  
    request({url,json:true},(error,{body})=>{
      if(error){
       callback('unable to connect to location services.',undefined)
      }else if(body.features.length===0){
        callback('unable to find location try another search.',undefined)
      }else{
        callback(undefined,{
            longtitude:body.features[0].center[1],
            latitude:body.features[0].center[0],
            location:body.features[0].place_name
        })
      }
    })
  }
  module.exports=geocode