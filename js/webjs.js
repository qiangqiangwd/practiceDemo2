/**
 * Created by qiang on 2016/10/4.
 */
//内容2的悬停特效
var pie=getid("pie");
var pie_div=pie.getElementsByTagName('div');
var content2_cnt=getid('content2_cnt');
var iconfont2=document.getElementsByClassName('iconfont2');
//var content2_cnt=getid('content2_cnt').getElementsByTagName('h3');
var content2_cntArry=new Array()
content2_cntArry[0]='<h3>Shortcodes</h3>'+'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'+
'has been the industry s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
"printer took a galley of type and scrambled it to make a type specimen book.</p>";
content2_cntArry[1]='<h3>Premium Sliders</h3>'+'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'+
'has been the industry s standard dummy text ever since the 1500s, when an unknown'+
"printer took a galley of type and scrambled it to make a type specimen book.</p>";
content2_cntArry[2]='<h3>Unlimited Colors</h3>'+'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'+
'Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry s standard dummy text ever since the 1500s, when an unknown'+
"Lorem Ipsum is simply dummy text of the printing and typesetting industry printer took a galley of type and scrambled it to make a type specimen book.</p>";
content2_cntArry[3]='<h3>Valid HTML Files</h3>'+'<p> Lorem Ipsum'+
'has been the industry s standard dummy text ever since the 1500s, when an unknown'+
"printer took a galley of type and scrambled it to make a type specimen book.</p>";
content2_cntArry[4]='<h3>Google Fonts</h3>'+'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'+
'has been the industry s standard dummy text ever since the 1500s, when an unknown'+
"printer took a galley of type and scrambled it to make a type specimen book.</p>";
content2_cntArry[5]='<h3>After Sale Support</h3>'+'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'+
'has been the industry s standard dummy text ever since Lorem Ipsum is simply dummy text of the 1500s, when an unknown'+
"printer took a galley of type and scrambled it to make a type specimen book.</p>";
for(var i=0;i<6;i++){
    pie_div[i].onmouseover=function(){
        var e=window.event || arguments[0];
        for(var i=0;i<6;i++){
            pie_div[i].style.backgroundColor='';
            pie_div[i].style.transition='all linear .25s';
            iconfont2[i].style.color='';
            if(e.target==pie_div[i]){
                //console.log(content2_cnt[i])
                iconfont2[i].style.color='#0088cc';
                pie_div[i].style.backgroundColor='#ffffff'
                pie_div[i].style.Color='#0088cc;'
                content2_cnt.innerHTML=content2_cntArry[i];
            }
        }
    }
}

//    内容3部分的动态效果！1！！！！！
var content3_li=document.getElementsByClassName('content3_li');
var imgchange=document.getElementsByClassName('imgchange');
var imgchange_circle=document.getElementsByClassName('imgchange_circle');
for(var i=0;i<imgchange.length;i++){
    content3_li[i].style.transition='all ease-out .5s'
    imgchange[i].onmouseover=function(){
        var e=window.event || arguments[0];
        for(var i=0;i<imgchange.length;i++){
            if(e.target!=imgchange[i]&&e.target!=imgchange_circle[i]){
                content3_li[i].style.width='268px';
            }
        }
        //console.log(e.target)
        for(var j=0;j<imgchange.length;j++){
            if(e.target==imgchange[j]){
                content3_li[j].style.width='566px';
            }
        }
    }
}

//    内容4部分的轮播动画效果！！！！
var button_cnt1=getid('button_cnt1');
var button_cnt2=getid('button_cnt2');
var content4_ban_in=getid('content4_ban_in');
var content4_ban_img=content4_ban_in.getElementsByTagName('img');
var flag111=false;
button_cnt2.onclick=function(){
    content4_ban_in.style.transition="all linear .5s";
    content4_ban_in.style.marginLeft="-840px";
    for(var i=0;i<4;i++){
        content4_ban_img[i].style.transition="";
    }
    flag111=true;
}
button_cnt1.onclick=function(){
    if(flag111){
        for(var i=0;i<4;i++){
            content4_ban_img[i].style.opacity='0';
            content4_ban_img[i].style.transform='scale(.5)';
        }
    }
    content4_ban_in.style.transition="all linear .5s";
    content4_ban_in.style.marginLeft="0px";
    if(flag111){
        setTimeout(imgChange1,800);
        setTimeout(imgChange2,1000);
        setTimeout(imgChange3,1200);
        setTimeout(imgChange4,1400);
    }
    flag111=false;
}
function imgChange1(){
        for(var i=0;i<4;i++){
            content4_ban_img[i].style.transition="all linear .1s";
        }
    content4_ban_img[0].style.opacity='1';
    content4_ban_img[0].style.transform='scale(1)';
}
function imgChange2(){
    content4_ban_img[1].style.opacity='1';
    content4_ban_img[1].style.transform='scale(1)';
}
function imgChange3(){
    content4_ban_img[2].style.opacity='1';
    content4_ban_img[2].style.transform='scale(1)';
}
function imgChange4(){
    content4_ban_img[3].style.opacity='1';
    content4_ban_img[3].style.transform='scale(1)';
}
      //内容4部分后部分的轮播动画效果！！！！
var content4_ban2=getid('content4_ban2');
var content4_li=content4_ban2.getElementsByTagName('li');
var flag1=true;
var i=0;
setInterval(content4_liChange,5000);
content4_li[1].style.left='400px'
function content4_liChange(){
    if(flag1){
        content4_li[1].style.left='360px'
        content4_li[0].zIndex=1;
        content4_li[1].zIndex=-1;


        content4_li[0].className="classMove2";
        content4_li[1].className="classMove1";
        flag1=false;
    }else{
        content4_li[0].style.left='360px'
        content4_li[1].zIndex=1;
        content4_li[0].zIndex=-1;


        content4_li[1].className="classMove2";
        content4_li[0].className="classMove1";
        flag1=true;
    }
}

//回到顶部的按钮设置！！！！！！！
var r_back=getid('return');
var r_backMoveTime;
var r_top;
var flag2=true;
var trun_backTime=setInterval(trun_back,100)
r_back.style.transition='all linear .25s'
function trun_back(){
    if(document.body.scrollTop>100){
        r_back.style.opacity=1;
    }else{
        r_back.style.opacity=0;
    }
}
r_back.onclick=function(){
    if(flag2){
        r_backMoveTime=setInterval(r_backMove,10);
        r_top=document.body.scrollTop
        flag2=false;
    }
}
function r_backMove(){
    if(document.body.scrollTop>0&&r_top==document.body.scrollTop){
        document.body.scrollTop=document.body.scrollTop-30;
    }else{
        clearInterval(r_backMoveTime);
        flag2=true;
    }
    r_top=document.body.scrollTop;
}






    function getid(a){
        return document.getElementById(a);
    }