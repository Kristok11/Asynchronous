//const button = document.querySelector('button')
//button.addEventListener('click', () => {
//  let count = 0
//for (let i = 0; i < 1000000000; i++) {
//  count++
//}
//console.log(count)

//const text = document.createElement('h1')
//text.innerHTML = 'This has nothing to do with the count',document.body.appendChild(text) 
//})


// function showImage(url, type, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.responseType = type

//     xhr.onload = function () {
//         callback(xhr.response)
//     }
//     xhr.send()
// }
// function createImage(blob) {
//     const objectURL = URL.createObjectURL(blob)
//     const imageElement = document.createElement('img')
//     imageElement.src = objectURL
//     document.body.appendChild(imageElement)
// }

// showImage('apple.jpg','blob', createImage)
        //Async javaScipt promises
// const flag = document.createElement('img')
// document.body.appendChild(flag)

// console.log('Lets go')

// fetch('https://restcountries.eu/rest/v2/all')
// .then(response => {
//     return response.json ()
// }).then(json => {
//     flag.src = json [0].flag
//     console.log('flag added!')
// }).catch(err => {
//     console.log('errors:' + err.message)
// })

// console.log('Done! With image' + json[0].flag)

// Async and await part5

async function getData() {
    const response = await fetch('https.//restcountries.eu/rest/v2/all')
    const data = await response.json()
    return data
}
getData().then(data => console.log(data))
.catch(err => console.log('errors:' + err.messages))