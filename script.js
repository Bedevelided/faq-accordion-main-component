const btns = document.querySelectorAll('.question a');

// btns.forEach(function(btn){
//     btn.addEventListener('click' , function(item){
//         console.log(item.currentTarget.parentElement)
//         btns.forEach((current) => {
//             if(current != item){
//                 current.parentElement.classList.remove("revealed")
//             }
//         })
//         item.currentTarget.parentElement.classList.add("revealed")
//     })
// })


btns.forEach(btn => {
    btn.addEventListener('click' , function(e){
        btns.forEach(btns => {
            if(e.currentTarget === btns){
                e.currentTarget.parentElement.classList.toggle("revealed")
            }else{
                btns.parentElement.classList.remove("revealed")
            }
        })
       
    })

})