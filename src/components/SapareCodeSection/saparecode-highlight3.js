import {SapareImgSet3} from '../SliderSection/SapareImages3'

export const sapareHighlight3 = {
    slides: SapareImgSet3,

    itemCode:
`<!-- 제목과 가격 틀-->
<div class="title-price-tle">
    <!-- 제목 -->
    <div class="title" id="itemName">
        {item.itemName}
        <c:if test="{fn:contains(item.itemStatus, 'n')}">
            &nbsp; *판매완료*
        </c:if>
        <input hidden="hidden" id="itemStatus" value="{item.itemStatus }" />
    </div>
    <input hidden="hidden" id="itemId" value="{item.itemId }" />
    <input hidden="hidden" id="memberName"
        value="{user.memberName }" />
    <input hidden="hidden" id="memberId" value="{member.memberId }" />
    <input hidden="hidden" id="mynameid" value="<%=(String) session.getAttribute("memberName")%>"/>
    <!-- 가격  틀-->
    <div class="price-tle">
        <!-- 가격 -->
        <div class="price" id="itemPrice">
            <fmt:formatNumber value="{item.itemPrice }" pattern="#,###,###,###" /><span>원</span>
        </div>
    </div>
</div>`,

itemCode2:
`$('.bt-tle').on('click', '.bt-heart', function(){
    var itemid = $('#itemId').val();
    var membername = $('#memberName').val();
    var sellername = $('#sellerName').val();
    var session = $('.session_id').val();
    var memberid = $("#memberId").val();
    var itemStatus = $("#itemStatus").val();
    if(session == ''){
        $('.modallogin').toggle();
        return false;
    }
    if(session == memberid){
        alert("본인의 상품은 찜 할 수 없습니다!");
        return false;
    }
    if(itemStatus == 'n'){
        alert("이미 판매완료된 상품입니다!");
        return false;
    }
    if (session != ''){
        if($('.bt-heart').is('#btNotWant')){
            $.ajax({
                type:'GET',
                dataType:'json',
                url:'clickWantProcess.do?memberName='+membername+'&sellerName='+sellername+'&itemId='+itemid,
                success: after_insert_want,
                error:function(request,status,error){
                    alert("code:"+request.status+"message:"+request.responseText+"error:"+error);
                }
            });
        }
        else if($('.bt-heart').is('#btWant')){
            $.ajax({
                type:'GET',
                dataType:'json',
                url:'unclickWantProcess.do?memberName='+membername+'&itemId='+itemid,
                success: after_remove_want,
                error:function(request,status,error){
                    alert("code:"+request.status+"message:"+request.responseText+"error:"+error);
                }
            });
        }
    } else{
        $('.modallogin').toggle();
        return false;
    }
});`,

    itemDesc:
    `상품이 판매중인지 판매완료인지를 판단하기 위해 데이터베이스에 char 데이터를 참조합니다. itemStatus 변수가 'n'이 리턴될
    때는 판매완료 이미지를 띄워줍니다. char 데이터 타입을 JSP에 넘겨줄 때는 JSTL의 fn prefix 기능을 이용하여
    위와 같이 fn:contains() 함수를 사용하여 char 데이터의 값을 체크합니다. 또, JSTL의 fmt prefix 기능을 이용하여
    데이터베이스에서 넘겨주는 Date 데이터 타입을 원하는 패턴/형식으로 바꿔줍니다.`,

    itemDesc2:
    `회원이 찜하기 버튼을 누를 경우 먼저 상품이 본인이 올린 상품인지 체크합니다. 본인이 올린 상품에는
    찜하기/채팅하기 버튼을 누를 수 없고 오른쪽 상단에 있는 수정/삭제 버튼을 이용하여 상품의 상태를 바꾸어 줄 수 있습니다.
    찜하기 버튼을 누르면 버튼의 상태를 비동기식으로 바꾸어 줄 수 있기 위해 AJAX 기능을 활용합니다.
    찜하기 버튼을 누르고 AJAX로 데이터베이스에 정보를 주고 받은 후 찜하기 버튼의 상태를
    바꾸어 주기 위하여 마지막으로 after_insert_want/after_remove_want 함수를 실행해 줍니다.`,

}