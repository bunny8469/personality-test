function id(x){
    return document.getElementById(x)
}
var timer;
var lateAnswers = 0 ;
var safeMode = true

var list = [
    {
        quest: "What is important to you",
        ans1: "Money",
        img1: "https://live.staticflickr.com/8765/17121923990_ba6b3b8fe6_b.jpg",
        des1: "You chose money. Sometimes, you value comfort and security, as the most important thing to you is being secure and living a carefree life you may also value material things such as possessions or luxury experiences over emotions and feelings", 
        ans2: "Love",
        img2: "https://www.fairobserver.com/wp-content/uploads/2019/12/family-2.jpg",
        des2: "You chose Love. That means you know the true value of love and have a desire to find it your spiritual rather than materialistic and you’ll likely find that social someone."
    },
    {
        quest: "Would you rather",
        ans1: "See the future",
        img1: "https://c0.wallpaperflare.com/preview/747/632/926/smart-city-communication-network.jpg",
        des1: "You chose to see the future. That means You’re excited for what life will bring to you. You’re also more open and willing to adapt to new situations that come your way", 
        ans2: "Change the past",
        img2: "https://storage.needpix.com/rsynced_images/past-1201454_1280.jpg",
        des2: "You’re less spontaneous, but more practical you take every day as it comes and you’re inquisitive. You also feel better planning things out. You have regrets and may want to undo some things. You miss the old days and love nostalgia."
    },
    {
        quest:"What do you choose",
        ans1: "Everyone wiped off the face of the earth, except you",
        img2: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Crowd_at_Knebworth_House_-_Rolling_Stones_1976.jpg",
        des1: "You chose A. Then you’re confident and self-assured you don’t rely on others and are independent do you think more for yourself and less about others when making decisions relating to you. You don't mind being alone",
        ans2: "Be everyone including you is wiped off the face of the earth",
        img1: "https://cdn.pixabay.com/photo/2019/12/04/15/38/alone-4672965_960_720.jpg",
        des2: "You chose B. Then you are very social and don’t like to be alone you live for others and love seeing your friends and family. You may be less independent but you make up for that with how much you value others"
    },
    {
        quest:"Would you rather have",
        ans1: "Guaranteed $1,000",
        img1: "https://dl.dropbox.com/s/6sije2rz202zcxy/Add%20a%20heading%282%29.png",
        des1: "You picked to get guaranteed $1,000. That means you like to be secure, play it safe and are very sensible. You don’t like gambling for all or nothing and take more pleasure in knowing that you will be secure",
        ans2: "50/50 chance to win $1 Million",
        img2: "https://dl.dropbox.com/s/uq40ikkwnuenxgx/Add%20a%20heading%281%29.png",
        des2: "You chose option B then you live hard and fast but sometimes things don’t work out. You have an all-or-nothing mindset and are confident in your decisions. You like to gamble and would rather have it all and risk everything than play it safe"
    },
    {
        quest:"Would you rather",
        ans1: "Marry a good-looking person with a bad personality",
        img1: "https://dl.dropbox.com/s/d7ssdj43g7p0v7g/Good%20Looking%20and%20bad%20personality.png?",
        des1: "You chose to marry A, then you think on your feet. You may also rush into relationship and act on impulse in day-to-day situations",
        ans2: "Marry a bad looking person with a great personality",
        img2: "https://dl.dropbox.com/s/zemmou8j5o5l030/Good%20Looking%20and%20bad%20personality%281%29.png",
        des2: "You chose to marry B then you are good at weighing up situations. You ease into relationships and ensure that person’s right for you. You’re spiritually and emotionally in tune and have a deep understanding of the human condition"
    },
    {
        quest:"Would you rather",
        ans1: "Never leave your hometown",
        img1: "https://live.staticflickr.com/5202/5343326812_8454ab78b5_b.jpg",
        des1: "You picked to never leave your hometown, then you’re sentimental. You like the good old times and maybe a little traditional. You’re patriotic and the proud of your family and your roots",
        ans2: "Leave your hometown and never return",
        img2: "https://p0.pikrepo.com/preview/49/724/concept-photo-with-world-travel-theme-person-planning-trip-with-world-man-camera-and-passport.jpg",
        des2: "You choose B. Then you’re fascinated by the world. You love experiencing new things and throwing yourself into unfamiliar situations you’re great at adapting to changes in your life and career and you don’t hold on to anything too emotionally."
    },
    {
        quest:"Would you rather have",
        ans1: "No more Internet",
        img1: "https://freesvg.org/img/no-global-internet.png",
        des1: "You chose A. Then, you are outgoing and sociable you live for your friends and love to see them and your fondest memories likely come from being with your friends, rather than in an internet cafe",
        ans2: "Have no friends",
        img2: "https://goodmenproject.com/wp-content/uploads/2020/03/iStock-642792008.jpg",
        des2: "You chose B. Then you may be an introvert you like being alone with your thoughts in your own little world. You’re likely to be creative and can make your own fun if you need to you may be a bit sociable"
    },
    {
        quest:"Would you rather",
        ans1: "Know when you’re going to pass away",
        img1: "https://c1.wallpaperflare.com/preview/507/66/503/calendar-pay-number-year.jpg",
        des1: "You chose A. You are curious, sometimes too much for your own good. You’re not too emotional and take things as they come you live a busy life and if you are just sitting around this, it means you’re productive and live to get stuff done",
        ans2: "Know how you’re going to pass away",
        img2: "file:///tmp/mozilla_bunny0/accident-bicycle-bike-police-1751211.jpg",
        des2: "You picked B. then you’re a practical and pragmatic thinker. You thrive off a sense of security and enjoy the simple things in life feel good. It’s working through problems and you’re likely hard-boiled and tough"
    },
    {
        quest:"Pick one",
        ans1: "Amazing, luxurious and action fills life but die early",
        img1: "https://p0.piqsels.com/preview/880/110/362/5be981ce93dbf-thumbnail.jpg",
        des1: "You chose A. Then you have no fears and like to live a fast and frantic life. You live in the moment and don’t plan much for the future you act first and deal with what comes later whether it be good or bad",
        ans2: "Dull(no excitement) but longer life",
        img2: "https://live.staticflickr.com/3352/3547755145_ece863bd75_b.jpg",
        des2: "You chose B. Then you don’t feel the need to stand out in the crowd and are perfectly happy living a relaxed and good life you plan ahead. With your careful attitude you will likely have a long and promising future"
    },
    {
        quest:"Would you rather",
        ans1: "Let one person who is close to you, pass away",
        img1: "https://image.freepik.com/free-photo/two-men-sit-edge-tall-building-look-into-distance-mountains_94065-144.jpg",
        des1: "You chose A, then you’re pragmatic and unfazed by emotions. You think to the greater good and have a sense of right and wrong. You’re incredibly selfless and are willing to give things up for others",
        ans2: "Let 100 people who you don’t know pass away",
        img2: "https://cdn.pixabay.com/photo/2014/03/24/17/07/crowd-295069_960_720.png",
        des2: "You chose B, then you’re sentimental and have deep connections with people. You like things as they are and don’t get too involved with issues not relating to you you love and focus on your own life and make decisions to make it better"
    }
]

var presentQuestion = 0;

function nextQuestion(){
    presentQuestion++
    if (presentQuestion == 11){
        id("question-page").style.display = "none"
        id("end-page").style.display = "block"
    }
    var dict = list[presentQuestion-1]
    var question = dict.quest
    var opt1 = dict.ans1 
    id("text1").innerHTML = `<span>${opt1}</span>`
    id("images1").alt = opt1
    var opt2 = dict.ans2
    id("text2").innerHTML = `<span>${opt2}</span>`
    id("images2").alt = opt2
    var image1 = dict.img1
    id("images1").src = ""
    id("images1").src = image1
    var image2 = dict.img2
    id("images2").src = ""
    id("images2").src = image2
    id("main-box").style.display = "none"
    id("timer").innerText = "10"
    timer = setInterval(secondOver, 1000)
}

function option(x){
    clearInterval(timer)
    var dicts = list[presentQuestion-1]
    var desc1 = dicts.des1
    var desc2 = dicts.des2
    var newDiv = id("main-box")
    var oldDiv = id("alert-box")
    if(presentQuestion == 10){
        id("next-question").innerText = "Finish"
    }
    if(x == 1){
        oldDiv.innerHTML = `<p>${desc1}</p>`
        newDiv.style.display = "block"
    }
    else if (x == 2){
        oldDiv.innerHTML = `<p>${desc2}</p>`
        newDiv.style.display = "block"
    }  
}
function toggle(){
    id("rules").style.display = "block"
}
function start(){
    id("rules").style.display = "none"
    id("start").style.display = "none"
    id("question-page").style.display = "block"
    id("box1").style.width = "100vw"
    id("box1").style.height = "50vh"
    id("box2").style.top = "50vh"
    id("box2").style.left = "0"
    id("box2").style.width = "100vw"
    id("box2").style.height = "50vh"
    id("header").innerText = "Pick an option from below"
    nextQuestion()
}
function workOnOtherPages(){
    id("start").style.display = "none"
    id("question-page").style.display = "none"
}
function secondOver(){
    if(parseInt(id("timer").innerText) == 0){
        id("timer").innerText = "Time's Up! Choose Fast"
        lateAnswers++
        id("timer").style.fontSize = "130%"
        clearInterval(timer)
        decisionMaking = false
    }
    else{
        id("timer").innerText = parseInt(id("timer").innerText)-1
    } 
}

