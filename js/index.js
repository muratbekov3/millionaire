//var name = prompt( " ведите ваше имя"
//)

//if(name == "akyl " || name == "aibek" || name== "oroz"){
   //alert("student")
//}

//else if( name=="tilek") {
   // alert("baikesha")
//}
//else if (name=="tilek"){
 //   alert("baikesha")
//}
//else if(name=="baatyr"){
   // alert("bratish")
//}
//else{
  //  alert("unknown")
//}

/*var name = prompt("ведите ваше имя")
var age = prompt("ведите ваш возраст")
if(name=="adam" && age == 21){
    alert("совершеналетний")}*/


    /*var num = 123
    if(num !==12){
        alert(true)
    }else{
        alert(false)
    }*/
//     var name = prompt('write your name ')
//     alert('hello ' +name+ ' answer the question' )
//     var question1 = prompt('who is owner of apple?  1 - stive jobs, 2 - jeff bezos, 3 - biil geits, 4 - ilon mask'  )
//     if(question1 == 1 ){
//         alert( 'well done ' +name )
//     }
//     else(
//         alert( 'unfourtunetly you are wrong')
//     )
//     alert( name+  '  answer the next question ' )
//     var question2 = prompt('who is owner of microsoft? 1 - ilon mask, 2 - jeff bezos, 3 - bill geits, 4 - leonardo di kaprio')
//     if(question2 == 3){
//         alert( 'you are smart ' +name)
//     }
//     else(
//         alert(' unfourtunetly  you are wrong  ' +name)
//     )
//     alert('okey ' +name+ ' lets go the next question' )
//     var question3 = prompt( 'who is the reachest man in the world? 1 - Ronaldo, 2 - Putin, 3 - Trump, 4 - jeff bezos')
//     if(question3==4){
//         alert( ' you are absolutly right')
//     }
//     else(
//         alert( ' wrong answer')
//     )
//     alert(name+ '  answer the next question')
//     var question4 = prompt( '2 + 2 / 4 * 5 what is the output? 1 - 12, 2- 5, 3 - 10, 4 - 20')
//     if(question4 == 1){
//         alert( ' right answer')
//     }
//     else(
//         alert('wrong answer' )
//     )
// alert( 'okey ' +name+ '  next question will be lastest question')
// var question5 = prompt( ' who is the most popular in instagram? 1 - kyle jenner, 2 - kim kardashian, 3 - kendall jenner,  4 - ariana grande')
// if(question5 == 1){
//     alert( ' you are so smart  ' +name )
// }
// else(
//     alert( 'wrong answer try again')
// )
 
var questions = ["столица Кыргызстана? ", "Кто изображен на 100$? ", "сколько пальцев на руке? ", "Столица Грузии", "Столица России"]
var answers = ["Шанхай, Душанбе, Баткен, Бишкек", "Адам, Бенжамин, супермен, Сооронбай", "5, 10, 250, 1", "Шанхай, Тбилиси, Баткен, Бишкек", "Шанхай, Тбилиси, Москва, Бишкек"]
var quesAns = ["Бишкек", "Бенжамин", 5, "Тбилиси", "Москва"]

var sumsOfQestions = [] // пустой список для подсчета сумм

for (var a = 1; a<questions.length+1; a++){
    sumsOfQestions.push(500*a)
} // цикл считающий суммы 

var name = prompt("Введите ваше имя")


var sum = prompt("Введите несгораемую сумму "+ sumsOfQestions)

var count, allSum, i , otvet // перечисление переменных 
count=0 //количество правельных ответов
allSum=0 //общая сумма выйигрыша

for(i=0; i<questions.length; i++){  // цикл переберающий вопросы
    otvet= prompt("уважаемый "+name+ " ответьте на следующий вопрос "+ questions[i] + answers[i])
    if(otvet == quesAns[i]){
        alert("Cool")
        count++
        allSum = allSum+500
    }else{
        alert("Извините но вы проиграли")
        alert("вы ответили на "+ count +" вопроса из "+ questions.length)
        if(allSum>=sum){ //проверка на то что наша несгороемая сумма соответсвует выйигрышу
            alert("ваш выйигрыш = " + sum)
        }else{
            alert("ваш выйигрыш = 0")
        }
       
        break
    }
}

alert("Поздравляю "+name+"Вы выйграли максимальную сумму денег в размере "+ allSum)
