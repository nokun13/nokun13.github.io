import {NoteImgSet6} from '../SliderSection/NoteImages6'

export const noteHighlight6 = {
    slides: NoteImgSet6,

    postViewCode:
`$(".content").on('click', function(){
    var content = this.innerText;
    var newContent = content.replace(/[#]/g, '@');
    $("#getText").val(newContent + '  ');
    document.getElementById("getText").focus();
    return false;
});

$("#text2 form").on("submit", function(){

    var content = document.getElementById('getTag').innerHTML; // html 안에 'content'라는 아이디를 content 라는 변수로 정의한다.

    var splitedArray = content.split(' '); // 공백을 기준으로 문자열을 자른다.
    var linkedContent = '';
    for(var word in splitedArray)
    {
      word = splitedArray[word];
       if(word.indexOf('@') == 0) // # 문자를 찾는다.
       {
          word = '<a href="#">'+word+'</a>';
       }
       linkedContent += word+' ';
    }
    document.getElementById('getTag').innerHTML = linkedContent;

});`,

    postViewDesc:
    `메인 화면에서 게시물을 클릭하여 게시물 화면으로 들어갈 수 있습니다. 게시물에는 하트 아이콘을 눌러
    '좋아요'를 표시할 수 있으며 댓글을 달 수 있는 기능이 있습니다. 댓글을 달았을 때 유저의 아이디를 앞에
    '@'문자와 함께 나타내어 아이디 링크를 클릭하여 그 유저의 프로필 화면으로 들어갈 수 있게 하였습니다.`,

}