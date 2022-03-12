const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    bar.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



    var MainImg = document.getElementById("MainImg");
    var smallImg = document.getElementsByClassName("small-img");

    smallImg[0].onclick = function(){
        MainImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function(){
        MainImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function(){
        MainImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function(){
        MainImg.src = smallImg[3].src;
    }

    // function takevalue(){
    //     var value1 = document.getElementById("quantity");
    //     document.getElementById("myText").innerHTML = value1;
    // }

    
//    $("#jq").click(function(){
//        alert("HIIIIIIIIIIIIIIIII");
//    });


// fetch('./data.json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//     // for(i=0; i<data.length; i++){
//         document.getElementById("FirstLine").innerHTML += `${data[0].FirstLine}`
//         document.getElementById("SecondLine").innerHTML += `${data[0].SecondLine}`
//         document.getElementById("ThirdLine").innerHTML += `${data[0].ThirdLine}`
//         document.getElementById("FourthLine").innerHTML += `${data[0].FourthLine}`
//     // }
// })


