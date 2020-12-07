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
`function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active')
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
}

let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");

window.addEventListener('scroll', function(){
	var valueMountain = window.scrollY - 2910;

	layer1.style.left = -valueMountain * 0.15 + 'px';
	layer2.style.left = valueMountain * 0.15 + 'px';
});`,

    loginDesc:
    `많은 유저들이 애용하는 인스타그램 SNS를 모티브하여 만든 note 웹 애플리케이션 프로젝트입니다. 회원가입한 유저는
    사진과 함께 글을 게시물로 등록할 수 있으며 팔로우한 회원들의 게시물을 메인 화면에서 볼 수 있습니다. JSP를
    활용하여 프론트엔드 페이지를 구성하였으며, Apache Tomcat을 서블릿 컨테이너로 사용하였고, 백엔드에서
    전달하는 데이터를 JSTL을 활용하여 처리하여 주었습니다.`,

    loginDesc2:
    `로그인 화면에서 로그인을 시도하면 loginCheck() 메소드를 활용하여 데이터베이스에 로그인 아이디가 존재하는지와 패스워드가
    맞는지를 확인합니다. 데이터베이스에 회원의 정보가 존재할 경우 cnt 값에 1을 리턴해주며 sessionScope에 회원의 정보들을 저장해줌으로써
    다른 페이지로 이동할 때 편의성 있게 회원의 정보를 액세스 할 수 있도록 합니다. 또한, setMaxInactiveInterval(30 * 60)을 활용하여서
    회원이 30분동안 아무 활동이 없는 경우 자동으로 로그아웃 해주게 합니다. 로그인 실패 시 또는 데이터베이스에 로그인 아이디 정보가 없거나
    패스워드가 잘못된 경우에는 cnt값을 0으로 리턴해주며 로그인 시도 한 아이디를 다시 리턴해주어 로그인이 실패했다는 알림창을 뜨게 해줍니다.`,

    loginDesc3:
    `JavaScript를 활용하여서 팝업창을 띄우는 버튼을 클릭 시 'blur' 아이디를 갖고 있는 배경화면을 흐리게 해주어서
    'popup' 아이디를 갖고 있는 팝업창을 더 주목시켜주는 효과를 줍니다. 또한, parallax 효과를 주기 위하여
    스크롤바를 내릴 때 layer1과 layer2가 (i.e. 양 옆의 산 이미지를 나타낸다) 각각 왼쪽, 오른쪽으로 0.15 픽셀씩 움직이도록
    하여 화면을 내리고 올릴 때 역동적인 css 효과를 나타내준다.`,
}