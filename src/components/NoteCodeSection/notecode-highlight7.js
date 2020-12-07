import {NoteImgSet7} from '../SliderSection/NoteImages7'

export const noteHighlight7 = {
    slides: NoteImgSet7,

    searchCode:
`<c:forEach items="{requestScope.aList3}" var="dto" varStatus="status">
<c:if test="{dto.account_Name == 'admin' && requestScope.aList3.size()==1}">
      <p> 검색된 결과가 없습니다. 다시 검색해주세요</p>
</c:if>

<c:if test="{dto.account_Name == sessionScope.account_Name && requestScope.aList3.size()==1}">
      <p> 검색된 결과가 없습니다. 다시 검색해주세요</p>
</c:if>

<c:if test="{dto.account_Name == 'admin' && dto.account_Name == sessionScope.account_Name && requestScope.aList3.size()==2}">
      <p> 검색된 결과가 없습니다. 다시 검색해주세요</p>
</c:if>
<c:if test="{dto.account_Name != 'admin'}">
<c:if test="{dto.account_Name != sessionScope.account_Name }">
    <td rowspan="3" width="80px" height="50" id="td2">
        <img src="/webproject2020/images/{dto.account_Img}" id="searchpro"/>
    </td>
    <td width="200px">닉네임 : {dto.account_Name}</td>
    <td rowspan="3" width="100px" id="followbtn">

        <c:url var="cpageF" value="followF">
            <c:param name="num" value="{dto.account_Num}"/>
            <c:param name="name" value="{dto.account_Name}"/>
            <c:param name="searchWord" value="{requestScope.search}" />
        </c:url>
        <c:url var="cpageT" value="followT">
            <c:param name="num" value="{dto.account_Num}"/>
            <c:param name="name" value="{dto.account_Name}"/>
            <c:param name="searchWord" value="{requestScope.search }" />
        </c:url>

         <c:if test='{requestScope.followlist[status.index]== "1"}'>
             <a href="{cpageF}" class="follbtnF"  style="background-color: white ; color: black; font-size: 11px";>언팔로우</a>
         </c:if>
          <c:if test='{requestScope.followlist[status.index]== "0"}'>
              <a href="{cpageT}" class="follbtnT"  style="background-color: #5d5d5a ; color: white" >팔로우</a>
         </c:if>
    </td>
</tr>
<tr>
    <td>팔로워: {requestScope.fList[status.index]}</td>
</tr>
<tr>
    <td  colspan="3" height="40px" class="enter"></td>
</tr>
<tr><td></td></tr>
</c:if>
</c:if>
</c:forEach>`,

    searchDesc:
    `상단의 메뉴바의 검색창에 유저의 아이디를 입력하면 검색 화면으로 전환되며 검색 결과를
    볼 수 있습니다. 본인의 아이디와 관리자의 아이디는 검색되지 않게 하였으며 검색된
    유저의 프로필 이미지, 아이디, 팔로워 수를 볼 수 있으며 옆의 버튼을 눌러서 팔로우/언팔로우
    할 수 있습니다.`,

}