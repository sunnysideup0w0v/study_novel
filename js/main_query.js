let gnbli = document.querySelector("#gnb .gnbList");
let lang = document.querySelectorAll("#header .util .language a")
// $("#gnb .gnbList > li").on("mouseenter",function(){
//     $("#header").addClass("on")
// });
// $("#gnb .gnbList > li").on("mouseleave",function(){
//     $("#header").removeClass("on")
// });
// 수정 전

gnbli.addEventListener('mouseover',function(){
    document.querySelector("#header").classList.add('on');
    console.log("header")
})
gnbli.addEventListener('mouseout',function(){
    document.querySelector("#header").classList.remove('on');
})

// $("#header .util .language a").on("click",function(){
//     $(this).toggleClass("on")
// })
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
            // typeerror: console로 얻어지는 값의 형태가 배열이기 때문에 class가 존재하지 않았음 > 따라서 에러 발생함.
            //  해결: 배열 원소 접근, class제거
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
    let iconMove = setInterval(function(){
        num++;
        num = num%8;
        let onIcon = iconsArr[num]
        onIcon.classList.add('on');
        for(i=0;i<getSiblings(onIcon).length;i++){
            getSiblings(onIcon)[i].classList.remove('on')
        }
    },2000)
    // $("#process .icons li").eq(num).addClass("on"); 
    //     let iconMove = setInterval(function(){
    //         num++;
    //         num=num%8;
    //         $("#process .icons li").eq(num).addClass("on"); 
    //         $("#process .icons li").eq(num).siblings().removeClass("on"); 
    //     },2000);
    // 수정 전
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

$(window).on("scroll",function(){
    let stJs = window.scrollY;
    let summaryJs = -(document.querySelector("#summary").getClientRects()[0].top);
    let processJs = -(document.querySelector("#process").getClientRects()[0].top);
    

    if(stJs>0){
        if(!$("#header").hasClass("scroll")){
            $("#header").addClass("scroll")
        } 
    } else {
        if($("#header").hasClass("scroll")){
            $("#header").removeClass("scroll")
        }
    };
    if(st>summary-300){
        if(!$("#summary").hasClass("scroll")){
            $("#summary").addClass("scroll");
            summaryMotion.restart();
        }
    };
    if(st>process-300){
        if(!$("#process").hasClass("scroll")){
            $("#process").addClass("scroll");
            processMotion.restart();
        }
    }
});

$(window).on("resize",function(){
    let w = $(window).width()+17;
    if(w<=1240){
        if(!$("body").hasClass("mobile")){
            $("body").addClass("mobile")
        }
        $("#sitemap").hide();
        //hide=displaynone
        $("body").removeClass("overHidden")
    } else {
        if($("body").hasClass("mobile")){
            $("body").removeClass("mobile")
            $("#gnb").removeClass("on")
            $("#header .btnALl").removeClass("on")
            $("#gnb .gnbList > li .depth02").removeAttr("style");
        }
    }
})
$(window).trigger("resize");
$(window).trigger("scroll")

$(".btnAll").on("click",function(){
    if(!$("body").hasClass("mobile")){
        $("#sitemap").fadeIn(250);
        $("body").addClass("overHidden")
    } else {
        $("#gnb").toggleClass("on")
        $(this).toggleClass("on")
    }
    return false
})
$("#sitemap .btnClose").on("click",function(){
    $("#sitemap").fadeOut(250);
    $("body").removeClass("overHidden")
    return false
})
$("#gnb .gnbList > li .depth01").on("click",function(){
    if($("body").hasClass("mobile")){
        $(this).next(".depth02").stop().slideToggle();
        $(this).parent().siblings().find(".depth02").stop().slideUp();
        $(this).toggleClass("on");
        $(this).parent().siblings().find(".depth01").removeClass("on");
        return false;
    }
})