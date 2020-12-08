import {SapareImgSet6} from '../SliderSection/SapareImages6'

export const sapareHighlight6 = {
    slides: SapareImgSet6,

    profileCode:
`// textarea 변경가능으로 바꾸고 소개글 뿌려주기, 확인 버튼 누르면 저장
function change_about_content(res){
    if(res.memberAbout === null){
        res.memberAbout = "";
    }
    $(".memberAbout").html('<textarea id="aboutContent" rows="8" cols="65" maxlength="80" style="background-color:white;border:1px solid black;cursor:auto;">'+res.memberAbout+'</textarea>')
    $(".aboutChangeBox").append('<button type="button" id="submitAbout" style="margin: 10px; cursor:pointer;">확인</button>');

    $("#changeAbout").hide();

    $("#submitAbout").click(function(){
        $.ajax({
            type:'GET',
            dataType:'json',
            url:'changeMemberAbout.do?memberName={member.memberName}&memberAbout='+$("#aboutContent").val(),
            success: after_about_change,
            error:function(request,status,error){
                alert("code:"+request.status+"message:"+request.responseText+"error:"+error);
            }
        });
    });

};

// 소개글 저장 후 textarea 복구, 버튼 복구
function after_about_change(res){
    if(res.memberAbout === null){
        res.memberAbout = "";
    }
    $("#submitAbout").remove();
    $("#changeAbout").show();
    $(".memberAbout").html('<textarea readonly id="aboutContent" rows="8" cols="65" maxlength="80">'+res.memberAbout+'</textarea>');
};`,

profileCode2:
`<c:if test="{fn:contains(dto.itemStatus, 'n') && dto.reviewNo == 0}">
<div class="writeReviewWrapper{dto.itemId }" style="display:none;width: 100%;height: 195px;background-color: #F0F8FF;flex-direction: row;margin-bottom: 3%;border-radius: 5px;">
<form name="reviewform" class="reviewInsert{dto.orderId }" method="post" action="reviewSubmit.do" style="width: 100%;display: flex;flex-direction:column;">
    <div id="reviewInsert{dto.orderId }" style="width:100%;display:flex;flex-direction:row;">
        <div class="reviewContent">
            <textarea class="writeReview" name="reviewContent" rows="5" cols="70" maxlength="75" placeholder="후기 내용을 입력해주세요."></textarea>
        </div>
        <div class="reviewInsertBox">
            <input type="hidden" name="memberName" value="{member.memberName }" />
            <input type="hidden" name="itemId" value="{dto.itemId }" />
            <input type="hidden" name="itemName" value="{dto.itemName }" />
            <input type="hidden" name="orderId" value="{dto.orderId }" />
            <button type="button" id="reviewInsert{dto.orderId }" class="reviewInsertBtn">후기 올리기</button>
        </div>
    </div>
    <div class="reviewStarBox">
            <!-- <input type="hidden" name="reviewStar" id="rate{dto.orderId }" value="0"/> -->
            <div class="review_rating">
                <div class="rating" style="padding:5px;border-radius:5px;margin-left:5px;">
                    <!-- 해당 별점을 클릭하면 해당 별과 그 왼쪽의 모든 별의 체크박스에 checked 적용 -->
                    <input type="radio" name="reviewStar" id="rating1{dto.orderId }" class="rate_radio" value="5" title="5점">
                    <label for="rating1{dto.orderId }"></label>
                    <input type="radio" name="reviewStar" id="rating2{dto.orderId }" class="rate_radio" value="4" title="4점">
                    <label for="rating2{dto.orderId }"></label>
                    <input type="radio" name="reviewStar" id="rating3{dto.orderId }" class="rate_radio" value="3" title="3점" >
                    <label for="rating3{dto.orderId }"></label>
                    <input type="radio" name="reviewStar" id="rating4{dto.orderId }" class="rate_radio" value="2" title="2점">
                    <label for="rating4{dto.orderId }"></label>
                    <input type="radio" name="reviewStar" id="rating5{dto.orderId }" class="rate_radio" value="1" title="1점">
                    <label for="rating5{dto.orderId }"></label>
                </div>
            </div>
        </div>
    </form>
</div>
</c:if>`,

    profileDesc:
    `회원의 프로필 화면에서는 판매상품 조회, 구매상품 조회, 찜한 상품 조회, 후기 조회, 회원정보수정을 할 수 있으며
    판매상품 화면에서는 회원이 판매한 상품들과 구매자에게 받은 별점을 확인할 수 있습니다. 구매상품 화면에서는
    회원이 구매한 상품과 함께 상품/판매자에게 별점 후기를 남길 수 있습니다. 찜 화면에서는
    회원이 찜하기 버튼을 누른 상품들을 확인 할 수 있으며 최신순, 찜이 많은 순, 가격순으로 정렬 가능합니다. 후기 화면에서는
    작성한 후기/받은 후기를 확인할 수 있습니다. 회원이 편의성을 고려하여 닉네임, 프로필 이미지, 소개글을 AJAX를 이용하여
    비동기식 변경 기능을 제공합니다. AJAX는 페이지 이동 없이 HTML 태그를 삭제하거나 변경하기에 용이하지만 변경하려는 태그를
    변수에 담아 JSP에 넘겨주어야 하기 때문에 많은 내용을 변경할 때에는 적절하지 않다고 느꼈습니다.`,

    profileDesc2:
    `별점 후기를 남길 때 별점을 클릭하거나 hover하면 fade in/out 이펙트를 주고 싶었지만 별 이미지를 활용하니 어색한 느낌만
    드러났습니다. 따라서 이미지를 사용하기 보다는 별에 hover 했을 때 opacity와 transition 속성을 이용하여
    별 무늬에 노란색을 입혀주는 효과를 주었습니다.`,

}