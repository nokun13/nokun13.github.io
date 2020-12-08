import {SapareImgSet7} from '../SliderSection/SapareImages7'

export const sapareHighlight7 = {
    slides: SapareImgSet7,

    adminCode:
`google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization(){
    var data =google.visualization.arrayToDataTable([
        ['카테고리','제품수'],
        <c:forEach var='counts' items='{count}' varStatus='status'>
            ["{counts.itemBigCat}","{counts.itemId}"],
        </c:forEach>
        ]);

    console.log(data);

    var options ={
        title:"카테고리별 물품수",
        subtitle:"어떤 상품이 많이 등록될까요~?",
        hAxis:{ title:"카테고리",},
        vAxis:{ title:"제품수"},
        isStacked:true,
        colors:['#28AEFF'],
        bar:{groupWidth:"30%"}
    };


var chart =new google.charts.Bar(document.getElementById('countChart'));`,

    adminDesc:
    `관리자는 신고된 상품/회원을 관리할 수 있는 관리자페이지를 헤더에 있는 버튼을 통해
    이동할 수 있으며 신고 정보를 확인할 수 있습니다. 신고 정보 확인 후, 상품/회원을
    삭제/제재하면 상품이 조회 불가능해지고 회원은 신고처리가 되어 로그인을 할 수 없게 됩니다.`,

    adminDesc2:
    `관리자 화면에서는 사파리 웹사이트에서 판매되고 있는 상품을 카테고리별로 분류하여
    현재 무슨 종류의 상품이 제일 많이 팔리고 있는지 확인할 수 있는 google chart가 구현되어 있습니다. `,

}