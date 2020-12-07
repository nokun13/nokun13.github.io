import {NoteImgSet3} from '../SliderSection/NoteImages3'

export const noteHighlight3 = {
    slides: NoteImgSet3,

    mainCode:
`<img class="article_img" src="/webproject2020/images/{dto2.post_Img}"/>

<div class="article_likeline" style="display: inline-flex;">

<c:url var="unlike" value="unlike.do">
    <c:param name="post_Num" value="{dto2.post_Num}"/>
    <c:param name="height" value=""/>
</c:url>

<c:url var="like" value="like.do">
    <c:param name="post_Num" value="{dto2.post_Num}"></c:param>
</c:url>

<c:if test="{requestScope.aList3[i.index] == 1}">
        <a href="{unlike}" >
        <img src="/webproject2020/images/fullheart.png" class="article_likeline_unlikebtn" ></a>
</c:if>

<c:if test="{requestScope.aList3[i.index] == 0}">
        <a href="{like}" >
        <img src="/webproject2020/images/emptyheart.png" class="article_likeline_likebtn"	></a>
</c:if>
    <form action="list.do" method="post">
        <input type="hidden" value="{dto2.post_Num}" name="post_Num">
        <input type="hidden" value="{dto2.account_Name}" name="account_Name">
        <input type="hidden" value="{dto2.account_Img}" name="account_Img">
        <input type="hidden" value="{dto2.post_Like}" name="post_Like">
        <input type="hidden" value="{dto2.post_Img}" name="post_Img">
        <input type="hidden" value="{dto2.post_Content}" name="post_Content">
        <input type="hidden" value="{dto2.post_Sysdate}" name="post_Sysdate">
        <input type="image" style="position:relative;left:16px;" src="/webproject2020/images/comment.png" class="article_likeline_commentbtn">
    </form>
</div>

<div class="article_likecnt"><label>좋아요 {dto2.post_Like} 개</label></div>

<div class="article_content"><a href="" class="article_content_name">{dto2.account_Name}</a><label> {dto2.post_Content}</label></div>
<div class="article_date">{dto2.post_Sysdate}</div>`,

    mainDesc:
    `메인 화면에서는 회원이 올린 게시물들과 회원이 팔로우하고 있는 유저들의 게시물이 최신 순서로 나열되는 것을
    볼 수 있습니다. 오른쪽 옆에는 회원이 팔로우하고 있는 유저들을 볼 수 있으며 클릭하여 그 유저의 프로필 페이지로 이동할 수 있도록 하였습니다.
    JSTL이 제공하는 <c:forEach>, <c:if>, <c:url> 과 같은 다양한 태그들을 활용하여
    데이터베이서에서 가져온 리스트를 배열하도록 하였고 또한 조건식에 따라 '좋아요' 이미지를 바꾸어주게 하였습니다.`,

}