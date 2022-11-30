//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click',function(){

        // 3개중 한개만 토글이 가능
        // questions.forEach(function(item){
        //     if(item !== questions){
        //         item.classList.remove("show-text");
        //     }
        // })

        question.classList.toggle('show-text');
    });
});


// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });