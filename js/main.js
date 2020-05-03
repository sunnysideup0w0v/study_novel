let gnbli = document.querySelector("#gnb .gnbList");
let lang = document.querySelectorAll("#header .util .language a");
let body = document.body;

gnbli.addEventListener('mouseover',function(){
    document.querySelector("#header").classList.add('on');
    console.log("header")
})
gnbli.addEventListener('mouseout',function(){
    document.querySelector("#header").classList.remove('on');
})


var getSiblings = function (elem) {
    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    
    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
for(var i=0;i<lang.length;i++){
    lang[i].addEventListener('click',function(e){
        e.preventDefault();
        if(!this.classList.contains("on")){
            this.classList.add("on");
            var siblings = getSiblings(this);
            console.log(siblings);
            siblings[0].classList.remove("on");
        }else {
            this.classList.remove('on')
        }
    })
}




// let subTxt = new SplitText("#mainVisual .sub",{type:"words,chars"});
// let mainTxt = new SplitText("#mainVisual .main",{type:"words,chars"});
Splitting();

let mainVisual = new Swiper("#mainVisual .mask",{
    effect:"fade",
    speed:1500,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    navigation:{
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext",
    },
    loop: true,
    on:{
        slideChange:function(){
            if(this.realIndex===0){
                time01.restart();
            } else if(this.realIndex===1) {
                time02.restart();
            } else if(this.realIndex===2) {
                time03.restart();
            }
        }
    }
});

let time01 = gsap.timeline();
let time02 = gsap.timeline({paused:true});
let time03 = gsap.timeline({paused:true})
time01.from("#mainVisual .visual01 .txtBox .sub .char",{
    duration: 1,
    opacity: 0,
    x:100,
    ease:"back.out",
    delay:1,
    stagger:{
        each :0.05
    }
})
.from("#mainVisual .visual01 .txtBox .main .char",{
    duration: 1,
    opacity: 0,
    x:100,
    ease:"back.out",
    stagger:{
        each :0.05
    }
});
time02.from("#mainVisual .visual02 .txtBox .sub .char",{
    duration: 1,
    opacity: 0,
    x:100,
    ease:"back.out",
    delay:1,
    stagger:{
        each :0.05
    }
})
.from("#mainVisual .visual02 .txtBox .main .char",{
    duration: 1,
    opacity: 0,
    x:100,
    ease:"back.out",
    stagger:{
        each :0.05
    }
});
time03.from("#mainVisual .visual03 .txtBox .sub .char",{
    duration: 1,
    opacity: 0,
    x:100,
    ease:"back.out",
    delay:1,
    stagger:{
        each :0.05
    }
})
.from("#mainVisual .visual03 .txtBox .main .char",{
    duration: 1,
    opacity: 0,
    x:100,
    ease:"back.out",
    stagger:{
        each :0.05
    }
});

//product
let productDesc = new Swiper("#product .descBox .mask",{
    speed:1000,
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: false,
    navigation:{
        prevEl:"#product .btnPrev",
        nextEl:"#product .btnNext"
    },
})
let product = new Swiper("#product .productBox .mask",{
    speed:1000,
    loop: true,
    centeredSlides: true,
    slidesPerView:1,
    spaceBetween: 50,
    // allowTouchMove: false,
    navigation:{
        prevEl:"#product .btnPrev",
        nextEl:"#product .btnNext"
    },
    thumbs:{
        swiper: productDesc,
    },
    breakpoints: {
        // when window width is >= 640px
        1100: {
          slidesPerView: "auto",
          spaceBetween: 250,
        }
   }
});
// 
let summaryMotion = gsap.timeline({paused:true});
summaryMotion.from("#summary .contentsBox:nth-child(1)",{
    duration:1,
    opacity:0,
    x:"-100%",
    ease:"power4.out"
})
.from("#summary .contentsBox:nth-child(2) .contents:nth-child(1) .imgBox",{
    duration:1,
    opacity:0,
    x:"-100%",
    ease:"power4.out"
},"-=0.8")
.from("#summary .contentsBox:nth-child(2) .contents:nth-child(1) .infoBox",{
    duration:1,
    opacity:0,
    x:"-100%",
    ease:"power4.out"
},"-=0.8")
.from("#summary .contentsBox:nth-child(2) .contents:nth-child(2) .infoBox",{
    duration:1,
    opacity:0,
    x:"-100%",
    ease:"power4.out"
},"-=0.8")
.from("#summary .contentsBox:nth-child(2) .contents:nth-child(2) .imgBox",{
    duration:1,
    opacity:0,
    x:"-100%",
    ease:"power4.out"
},"-=0.8");

let processMotion = gsap.timeline({paused:true,onComplete:function(){
    let num=0;
    let iconsArr = document.querySelectorAll("#process .icons li");
    iconsArr[0].classList.add('on')
    iconMove = setInterval(function(){
        num++;
        num = num%8;
        let onIcon = iconsArr[num]
        onIcon.classList.add('on');
        for(i=0;i<getSiblings(onIcon).length;i++){
            getSiblings(onIcon)[i].classList.remove('on')
        }
    },2000)
}});
processMotion.from("#process li",{
    duration:1,
    opacity:0,
    x:"-100%",
    ease:"power4.out",
    stagger: {
        each:0.1
    }
})

window.addEventListener('scroll',function(){
    let stJs = window.scrollY;
    let summaryJs = document.querySelector("#summary").getClientRects()[0].top;
    let processJs = document.querySelector("#process").getClientRects()[0].top;
    let header = document.querySelector("#header");
    let summary = document.querySelector("#summary")
    let process = document.querySelector("#process")

    if(stJs>0){
        if(!header.classList.contains('scroll')){
            header.classList.add('scroll')
        } 
    } else {
        if(header.classList.contains('scroll')){
            header.classList.remove('scroll')
        }
    };
    if(stJs>summaryJs-300){
        if(!summary.classList.contains('scroll')){
            summary.classList.add('scroll');
            summaryMotion.restart();
        }
    };
    if(stJs>processJs-200){
    //     console.log("stJs:",stJs,"processJs:",processJs)
        if(!process.classList.contains('scroll')){
            process.classList.add('scroll');
            processMotion.restart();
        }
    }
})

window.addEventListener('resize',function(){
    let w = window.innerWidth;
    let sitemap = document.querySelector("#sitemap");
    let gnb = document.querySelector("#gnb");
    let btnAll = document.querySelector("#header .btnAll");
    let depth02 = gnb.querySelectorAll(".gnbList > li .depth02")

    if(w<=1240){
        if(!body.classList.contains('mobile')){
            body.classList.add('mobile');
        }
        sitemap.style.display='none';
    } else {
        if(body.classList.contains('mobile')){
            body.classList.remove('mobile');
            gnb.classList.remove('on');
            btnAll.classList.remove('on');
            depth02.removeAttribute('style');
        }
    }
})
window.dispatchEvent(new Event('resize'));
window.dispatchEvent(new Event('scroll'));
// $(window).trigger("resize");
// $(window).trigger("scroll");

document.querySelector("#header .btnAll").addEventListener('click',function(){
    if(!body.classList.contains('mobile')){
        console.log("say hi")
        document.querySelector("#sitemap").classList.add('show');
        body.classList.add('overHidden');
    } else {
        document.querySelector("#gnb").classList.toggle('on');
        this.classList.toggle('on');
    }
    return false;
})

document.querySelector("#sitemap .btnClose").addEventListener('click',function(){
    document.querySelector("#sitemap").classList.remove('show');
    body.classList.remove('overHidden');
    return false;
})

let depth01 = document.querySelectorAll("#gnb .gnbList > li .depth01");
for(i=0;i<depth01.length;i++){
    depth01[i].addEventListener('click',function(e){
        console.log("hi")
        if(document.querySelector('body').classList.contains('mobile')){
            e.preventDefault();
            console.log(this)
            let parentSiblings = getSiblings(this.parentElement);
            console.log("child:",parentSiblings.children);
        }
    })
}
// // 아직 안 끝남!!!
// $("#gnb .gnbList > li .depth01").on("click",function(){
//     if($("body").hasClass("mobile")){
//         $(this).next(".depth02").stop().slideToggle();
//         $(this).parent().siblings().find(".depth02").stop().slideUp();
//         $(this).toggleClass("on");
//         $(this).parent().siblings().find(".depth01").removeClass("on");
//         return false;
//     }
// })