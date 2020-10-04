var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');

var count = 1;

button.addEventListener('click', clickButton);
todayIs();
 
function todayIs() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; // Jan is 0
    var yyyy = today.getFullYear();

    if(dd<10){
        dd = '0'+dd
    }
    if(mm<10){
        mm = '0'+mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    //alert(today);
    document.getElementById("date").innerHTML = today;
    //$('#date').text(today);
} 


function clickButton(){
    var li = document.createElement('li');

    li.setAttribute("id", "li"+count);
    li.setAttribute("class", "list-group-item"); 

    li.innerHTML = input.value; //input을 받은 값을 li안의 html 코드에 넣어주겟다.
    li.innerHTML += "<button onClick='revise("+count+")'>수정</button>"
    li.innerHTML += "<button onclick='remove("+count+")'>삭제</button>"
   

    list.appendChild(li);

    input.value = "";

    count = count+1; //count++
}

function remove(count) {
    var li=document.getElementById("li"+count);
    list.removeChild(li);
}
// 수정한 부분
function revise(count){
    
    //값 가져오기
    var innerText=document.getElementById("li"+count).innerText;
    //값 Text에 집어 넣기
    input.value=innerText;
    //값 삭제
    remove(count);

   // document.getElementsByClassName('list-group-item')[count-1].innerHTML= "Aragorn";
}