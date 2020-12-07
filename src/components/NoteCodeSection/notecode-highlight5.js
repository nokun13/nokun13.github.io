import {NoteImgSet5} from '../SliderSection/NoteImages5'

export const noteHighlight5 = {
    slides: NoteImgSet5,

    profileCode:
`$('#button1').click( function() {
    if( $(this).val() == '접기' ) {
      $(this).val('더보기');
      $('#pictureview').css({
            'height': '680px'
        })
        $('#profile').css({
            'height' : '1135px'
        })
        $( 'html, body' ).stop().animate( { scrollTop : '0' } )
    }
    else {
      $(this).val('접기');
      $('#pictureview').css({
            'height': 'auto',
           'overflow': 'hidden'
        })

        $('#profile').css({
            'height' : 'auto'
        })
    }
});`,

    profileDesc:
    `유저의 프로필 화면을 들어가면 그 유저가 올린 게시물, 팔로워, 팔로우하고 있는 유저 수를
    볼 수 있으며, 그 유저가 올린 게시물을 아래에서 볼 수 있습니다. 만약 올린 게시물의 개수가
    6개 이상이면 '더보기' 버튼을 보여주며 버튼을 누르면 JavaScript를 이용하여 게시물을 담고 있는
    div의 height값을 auto로 바꿔주어 모든 게시물을 볼 수 있도록 해줍니다.`,

    profileDesc2:
    `본인의 프로필 페이지에서는 오른쪽 상단에 톱니바퀴 아이콘을 눌러 회원정보 수정 페이지로
    들어갈 수 있습니다. 정보수정 페이지에서는 본인의 프로필 이미지, 소개글, 이메일, 전화번호를
    변경할 수 있습니다.`,
}