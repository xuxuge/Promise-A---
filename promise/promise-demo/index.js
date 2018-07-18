let task1 = value => value+1
let task2 = value => value+2
let task3 = value => {console.log(value+3)}

Promise.resolve(1).then(task1).then(task2).then(task3)

Promise.resolve(1)
.then(value => {
  console.log(new Date())
  return value+1
})
.then(value => {
  return value + 2
})
.then(value => {
  setTimeout(() => {
    console.log(new Date(),value + 3)
  }, 6000)
})

function setTime(time) {
  return new Promise(resolve => {
    setTimeout(() =>{
      console.log(time, new Date())
      resolve(time)
    }, time);
  })
}

setTime(1000).then(value => {
  console.log(value)
})

setTime(1000).then(setTime(2000)).then(setTime(3000))
let startTime = Date.now()

Promise.all([setTime(1000), setTime(3000), setTime(5000)])
.then(value => {
  console.log(value)
  console.log(Date.now() - startTime)
})