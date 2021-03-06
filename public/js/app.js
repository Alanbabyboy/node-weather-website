console.log('client side javascript file is loaded.')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
  response.json().then((data)=>{
   console.log(data)
  })
})


const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
messageOne.textContent=''
document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
 const location=search.value
 messageOne.textContent='loading...'
 messageTwo.textContent=''
 fetch('/weather?address=' + location).then((response)=>{
    response.json().then((data)=>{
      if(data.error){
       messageOne.textContent=data.error
      }else{
          messageOne.textContent=data.location
          messageTwo.textContent=data.forecast
      }
    })
    })
})