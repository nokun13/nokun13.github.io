import {NoteImgSet1} from '../SliderSection/NoteImages'

export const noteHighlight = {
    slides: NoteImgSet1,

    loginCode:
`@Override
public void execute(HttpServletRequest req) {

    WebDAO dao = WebDAO.getInstance();

    // 변수 지정/가져오기
    String fid = req.getParameter("fid");
    String fpass = req.getParameter("fpass");

    // 변수 dto에 저장
    AccountDTO dto = new AccountDTO();
    dto.setAccount_Id(fid);
    dto.setAccount_Password(fpass);

    // 로그인 체크 확인
    cnt = dao.loginCheck(dto);

    HttpSession session = null;

    if (cnt == 1) {

        // 아이디 확인 후 아이디 관련된 정보를 모두 가져옴.
        AccountDTO pdto = dao.viewMethod(fid);

        // sessionScope에 개인정보 (id, password, etc.) 넘겨준다.
        session = req.getSession();
        session.setMaxInactiveInterval(30 * 60);
        session.setAttribute("account_Id", fid);
        session.setAttribute("account_Password", fpass);
        session.setAttribute("account_Num", pdto.getAccount_Num());
        session.setAttribute("account_Name", pdto.getAccount_Name());
        session.setAttribute("account_About", pdto.getAccount_About());
        session.setAttribute("account_Email", pdto.getAccount_Email());
        session.setAttribute("account_Img", pdto.getAccount_Img());
        session.setAttribute("account_Phone_Num", pdto.getAccount_Phone_Num());
        session.setAttribute("account_Flag", pdto.getAccount_Flag());

    } else {
        req.setAttribute("id", fid);
    }
} // end execute()`,

    loginCode2:
`$(document).ready(function(){
	$('.content a').click(function(){
		return false;
	});
	$('#popup a').click(function(){
		return false
	});
});

function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active')
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
}`,
    loginDesc:
    `많은 유저들이 애용하는 인스타그램 SNS를 모티브하여 만든 note 웹 애플리케이션 프로젝트입니다. 회원가입한 유저는
    사진과 함께 글을 게시물로 등록할 수 있으며 팔로우한 회원들의 게시물을 메인 화면에서 볼 수 있습니다. JSP를
    활용하여 프론트엔드 페이지를 구성하였으며, Apache Tomcat을 서블릿 컨테이너롤 사용하고, JSTL을 활용하여 백엔드에서
    전달하는 데이터를 처리하여 주었습니다.`,

    loginDesc2:
    `처음 회원가입을 할 경우 새로운 아이디와 비밀번호를 입력해주고 '회원가입' 버튼을
    눌러주면 데이터베이스에 똑같은 아이디가 존재하는지 체크 후, 없을 경우 성공적으로
    회원가입을 하며 데이터베이스에 새로운 회원의 정보를 저장합니다.`,

    loginDesc3:
    `하단의 메뉴바는 고정되어 있으며 성공적으로 로그인 후 (로그인 전에는 페이지 이동이 불가합니다) 페이지 이동 할 경우에
    중앙 패널의 내용물을 교체해주는 방식으로 개발하였습니다.`,
}