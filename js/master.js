let _span = document.querySelectorAll('main>div>span')
let inp = document.querySelector('input')
let answer = document.querySelector('.answer')
// console.log(_span);
_span.forEach((item , i)=>{
    let _inner = _span[i].innerText
    // console.log(_inner);
    item.addEventListener('click',()=>{
     if(_inner == 'c'){
        inp.value = ''
     }else if(_inner == '='){
        inp.value = eval(inp.value)
        

     }else{
        inp.value += _inner
     }
        // console.log(inp.value);
        

    })

})