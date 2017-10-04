 $().ready(function(){
//Массив вопросов и ответа
var data_array = [
  ["1)По пути домой вы натыкаетесь на толпу народа, которая наблюдает за дракой между двумя людьми. Подойдя поближе вы обнаруживаете, что один из драчунов без сознания, а второй явно в неадекватном состоянии. Ваши действия:", "пройти мимо","накосылять тому, кто остался в сознании","помолиться","попытатся утихомирить драчуна и толпу людей", "оказать первую помощь пострадавшему", "позвонить в скорую и полицию"],
  ["2)К чему в первую очередь должен стремиться человек?","богатство","мир над головой","вера","развлечения", "здоровое тело и ум", "знания"],
  ["3)Кем ты хотел стать в детстве?","бизнесменом","генералом","богом","известным актером", "врачом", "ученым"],
  ["4)Как вы проводите свободное время?","у меня нет свободного времени, я всегда учусь/работаю","тренажорный зал, турники","помогаю другим людям, волонтерство","музыка, фильмы, игры", "гуляю на свежем воздухе", "читаю книги"],
  ["5)Государство по праву может называться великим, если","оно обладает большим запасом природных ресурсов","у государства самая мощная армия","оно является религиозной столицей мира","там живут счастливые люди", "продолжительность жизни людей выше, чем в какой-либо другой стране", "в нем родились великие ученые, которые открыли передовые технологии"],
  ["6)В какой стране вы бы хотели побывать?","США","Северная Корея","Ватикан","Нидерланды", "Япония", "Великобритания"],
  ["7)Какое качество восхищает вас в людях?","хитрость","надежность","доброта","креативность", "ответственность", "ум"],
  ["8)Ваше жизненное кредо","не делай бесплатно то, что можешь сделать за деньги","то, что нас не убивает, делает нас сильнее","в борьбе победа за тем, кто силен духом","деньги можно кидать на ветер, пока ветер дует в твою сторону", "быть счастливым счастьем других - вот настоящее счастье", "все победы начинаются с побед над самим собой"],
  ["9)Как вы настраиваете себя на важную встречу?","никак, я и так уверен в себе","подбодрю себя в духе: \"Я сделаю это!!!\"","молюсь","послушаю мотивирующую музыку", "выпью витаминку/успокоительное", "продумаю каждый свой шаг"],
  ["10)С кем из них вы бы пошли на разведку?","Стив Джобс","Александр Суворов","Папа Римский","Майкл Джексон", "Гиппократ", "Альберт Энштейн"],
];

var cur_answer = 0;
var estates_array = [0, 0, 0, 0, 0, 0];
var flag = false;
var width = 0;

$('#start').click(function(){
        
        $('.wrapper').css("display", "block");
        $('#welcome').css("display", "none");
        $('#start').css("display", "none");
        $('#next').css("display", "inline-block");
 
        $("#question").append("<p class=" + 'insertqw' + ">" + data_array[cur_answer][0] + "</p>");
        $("#option1").append("<p class=" + 'insert' + ">" + data_array[cur_answer][1] + "</p>");
        $("#option2").append("<p class=" + 'insert' + ">" + data_array[cur_answer][2] + "</p>");
        $("#option3").append("<p class=" + 'insert' + ">" + data_array[cur_answer][3] + "</p>");
        $("#option4").append("<p class=" + 'insert' + ">" + data_array[cur_answer][4] + "</p>");
        $("#option5").append("<p class=" + 'insert' + ">" + data_array[cur_answer][5] + "</p>");
        $("#option6").append("<p class=" + 'insert' + ">" + data_array[cur_answer][6] + "</p>");   

        $('#next').click(function(){
            flag = false;
            if ($('#answer1').prop("checked")) {cur_answer++; flag = true; estates_array[0]++; $('#answer1').prop('checked',false);}
            if ($('#answer2').prop("checked")) {cur_answer++; flag = true; estates_array[1]++; $('#answer2').prop('checked',false);}
            if ($('#answer3').prop("checked")) {cur_answer++; flag = true; estates_array[2]++; $('#answer3').prop('checked',false);}
            if ($('#answer4').prop("checked")) {cur_answer++; flag = true; estates_array[3]++; $('#answer4').prop('checked',false);}
            if ($('#answer5').prop("checked")) {cur_answer++; flag = true; estates_array[4]++; $('#answer5').prop('checked',false);}
            if ($('#answer6').prop("checked")) {cur_answer++; flag = true; estates_array[5]++; $('#answer6').prop('checked',false);}
            if (flag == false) {}
              else{
                width = width + 10;
                $('.progress-bar span').width(width + '%');
              }
            if (cur_answer < 10){
                $('.insert').remove();
                $('.insertqw').remove();
                $("#question").append("<p class=" + 'insertqw' + ">" + data_array[cur_answer][0] + "</p>");
                $("#option1").append("<p class=" + 'insert' + ">" + data_array[cur_answer][1] + "</p>");
                $("#option2").append("<p class=" + 'insert' + ">" + data_array[cur_answer][2] + "</p>");
                $("#option3").append("<p class=" + 'insert' + ">" + data_array[cur_answer][3] + "</p>");
                $("#option4").append("<p class=" + 'insert' + ">" + data_array[cur_answer][4] + "</p>");
                $("#option5").append("<p class=" + 'insert' + ">" + data_array[cur_answer][5] + "</p>");
                $("#option6").append("<p class=" + 'insert' + ">" + data_array[cur_answer][6] + "</p>");   
            }

            else{
                 $('.wrapper').css("display", "none");
                 $('#next').css("display", "none");
                var result = estates_array.indexOf(Math.max.apply(Math, estates_array));
                if (result == 0){
                  $('.merchant').css("display", "block");
                }
                if (result == 1){
                  $('.knight').css("display", "block");
                }
                if (result == 2){
                  $('.pop').css("display", "block");
                }         
                if (result == 3){
                  $('.bard').css("display", "block");
                }  
                if (result == 4){
                  $('.doctor').css("display", "block");
                }
                if (result == 5){
                  $('.alch').css("display", "block");
                }               
            }
        });
        
});
});