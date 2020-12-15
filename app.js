let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let result = document.querySelector('#result')
let ans = document.querySelector('#ans')
let ansbtn = document.querySelector('.ansbtn')
let resetbtn = document.querySelector('.reset')
let rnum1 = Math.ceil(Math.random() * 10)
let rnum2 = Math.ceil(Math.random() * 10)

function reset() {
  rnum1 = Math.ceil(Math.random() * 10)
  rnum2 = Math.ceil(Math.random() * 10)
  num1.innerHTML = rnum1
  num2.innerHTML = rnum2
  result.innerHTML = ' '
}
reset()
ansbtn.addEventListener('click', () => {
  if (rnum1 + rnum2 === Number(ans.value)) {
    result.innerHTML = ' ✔'
  } else {
    result.innerHTML = ' ✘'
  }
})

resetbtn.addEventListener('click', reset)

//(h) Write a JavaScript program to dynamically bold, italic and underline words and phrases
// based on user actions.
let boldbtn = document.querySelector('.boldbtn')
let italicbtn = document.querySelector('.italicbtn')
let underlinebtn = document.querySelector('.underlinebtn')
let changetxt = document.querySelector('.changetxt')

boldbtn.addEventListener('click', () => {
  changetxt.style.fontWeight = 'bold'
})
underlinebtn.addEventListener('click', () => {
  changetxt.style.textDecoration = 'underline'
})
italicbtn.addEventListener('click', () => {
  changetxt.style.fontStyle = 'italic'
})

// (g) Write a JavaScript program to change background color after 5 seconds of page load.
setTimeout(() => {
  document.querySelector('body').style.backgroundColor = '#bedcfa'
}, 5000)
