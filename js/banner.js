/**
 * Created by qiang on 2016/10/6.
 */
//banner���ֵĶ�Ч
var ban_top=getid("top");
var ban_down=getid("down");
flag=true;    //��ǰ״̬Ϊ��ʱ
var ban_cnt1MoveTime;
var ban_cnt1MoveTime_out;
var banner_moveTime;
var ban_cnt1=getid('ban_cnt1');
var ban_cnt2=getid('ban_cnt2');
var ban_cnt1_div=ban_cnt1.getElementsByTagName('div');
var ban_cnt1_div2=ban_cnt2.getElementsByTagName('div');
banner_moveTime=setInterval(banner_move,5000);
ban_cnt1MoveTime=setTimeout(ban_cnt1_p11,500);//��һ�������ݳ���ʱ�����ȴ�ʱ��
var ban_cnt1MoveTime_out1=setTimeout(ban_cnt1_p11_out,4500);//��һ�������ݳ���ʱ�����ȴ�ʱ��
function banner_move(){
    if(flag){
        ban_cnt1_p11_out();
        ban_down.className='';
        ban_top.className='';
        ban_down.style.left='1349px';
        ban_down.zIndex=0;
        ban_top.zIndex=1;
        ban_down.className='ban_move1';
        ban_top.className='ban_move';
        ban_cnt1_p21Time=setTimeout(ban_cnt1_p21,500);//�ڶ��������ݳ���ʱ�����ȴ�ʱ��
        flag=false;
    }else{
        ban_cnt1_div2[0].className='';
        ban_cnt1_div2[1].className='';
        ban_cnt1_div2[2].className='';
        ban_cnt1_div2[3].className='';
        ban_cnt1_div2[4].className='';
        ban_cnt1_div2[5].className='';
        ban_cnt1_div2[6].className='';
        ban_cnt1_div2[7].className='';
        ban_cnt1_div2[8].className='';
        ban_cnt1_div2[9].className='';
        ban_cnt1_div2[10].className='';
        ban_down.className='';
        ban_top.className='';
        ban_top.style.left='1349px';
        ban_down.zIndex=1;
        ban_top.zIndex=0;
        ban_top.className='ban_move1';
        ban_down.className='ban_move';
        ban_cnt1MoveTime=setTimeout(ban_cnt1_p11,500);//��һ�������ݳ���ʱ�����ȴ�ʱ��
        ban_cnt1MoveTime_out=setTimeout(ban_cnt1_p11_out,4500);//��һ�������ݳ�quʱ�����ȴ�ʱ��
        flag=true;
    }
}
//          ���ݲ��֣���������������



//��һ�������ݳ���ʱ����
function ban_cnt1_p11(){
    ban_cnt1_div[0].className='ban_cnt1_h3';
    ban_cnt1_div[1].className='ban_cnt1_p1';
    ban_cnt1_div[2].className='ban_cnt1_p2';
    ban_cnt1_div[3].className='ban_cnt1_p3';
    ban_cnt1_div[4].className='ban_cnt1_btn1';
    ban_cnt1_div[5].className='ban_cnt1_btn2';
}
//��һ�������ݳ�ȥʱ����
function ban_cnt1_p11_out(){
    ban_cnt1_div[0].className='ban_cnt11_h3';
    ban_cnt1_div[1].className='ban_cnt11_p1';
    ban_cnt1_div[2].className='ban_cnt11_p2';
    ban_cnt1_div[3].className='ban_cnt11_p3';
    ban_cnt1_div[4].className='ban_cnt11_btn1';
    ban_cnt1_div[5].className='ban_cnt11_btn2';
}
//�ڶ��������ݳ���ʱ����
function ban_cnt1_p21(){
    ban_cnt1_div2[0].className='ban_cnt2_img1';
    ban_cnt1_div2[1].className='ban_cnt2_img2';
    ban_cnt1_div2[2].className='ban_cnt2_img3';
    ban_cnt1_div2[3].className='ban_cnt2_tite1';
    ban_cnt1_div2[4].className='ban_cnt2_tite2';
    ban_cnt1_div2[5].className='ban_cnt2_tite3';
    ban_cnt1_div2[6].className='ban_cnt2_h51';
    ban_cnt1_div2[7].className='ban_cnt2_h52';
    ban_cnt1_div2[8].className='ban_cnt2_h53';
    ban_cnt1_div2[9].className='ban_cnt2_h54';
    ban_cnt1_div2[10].className='ban_cnt2_h55';
}


//����Ϊ�������banner�ǵĲ�������
var banner=getid('banner');
var turnLeft=getid("turnLeft");
var turnRight=getid("turnRight");

banner.onmouseover=function(){
    clearInterval(banner_moveTime);
    clearTimeout(ban_cnt1MoveTime_out1);
    clearTimeout(ban_cnt1MoveTime_out);
}
banner.onmouseout=function(){
    banner_moveTime=setInterval(banner_move,5000);
}
turnRight.onmousedown=function(){
    if(flag){
        setTimeout(banner_move,500);
        ban_cnt1_p11_out();
    }else{
        ban_cnt1_div2[0].className='';
        ban_cnt1_div2[1].className='';
        ban_cnt1_div2[2].className='';
        ban_cnt1_div2[3].className='';
        ban_cnt1_div2[4].className='';
        ban_cnt1_div2[5].className='';
        ban_cnt1_div2[6].className='';
        ban_cnt1_div2[7].className='';
        ban_cnt1_div2[8].className='';
        ban_cnt1_div2[9].className='';
        ban_cnt1_div2[10].className='';
        ban_down.className='';
        ban_top.className='';
        ban_top.style.left='1349px';
        ban_down.zIndex=1;
        ban_top.zIndex=0;
        ban_top.className='ban_move1';
        ban_down.className='ban_move';
        ban_cnt1MoveTime=setTimeout(ban_cnt1_p11,500);//��һ�������ݳ���ʱ�����ȴ�ʱ��
        flag=true;
    }
}
turnLeft.onmousedown=function(){
    if(flag){
        setTimeout(banner_move,500);
        ban_cnt1_p11_out();
    }else{
        ban_cnt1_div2[0].className='';
        ban_cnt1_div2[1].className='';
        ban_cnt1_div2[2].className='';
        ban_cnt1_div2[3].className='';
        ban_cnt1_div2[4].className='';
        ban_cnt1_div2[5].className='';
        ban_cnt1_div2[6].className='';
        ban_cnt1_div2[7].className='';
        ban_cnt1_div2[8].className='';
        ban_cnt1_div2[9].className='';
        ban_cnt1_div2[10].className='';
        ban_down.className='';
        ban_top.className='';
        ban_top.style.left='1349px';
        ban_down.zIndex=1;
        ban_top.zIndex=0;
        ban_top.className='ban_move1';
        ban_down.className='ban_move';
        ban_cnt1MoveTime=setTimeout(ban_cnt1_p11,500);//��һ�������ݳ���ʱ�����ȴ�ʱ��
        flag=true;
    }
}








function getid(a){
    return document.getElementById(a);
}
