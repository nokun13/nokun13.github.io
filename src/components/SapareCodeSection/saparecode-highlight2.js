import {SapareImgSet2} from '../SliderSection/SapareImages2'

export const sapareHighlight2 = {
    slides: SapareImgSet2,

    loginCode:
`<%
String fid = (String) session.getAttribute("logOk");
String id = (String) session.getAttribute("id");
System.out.println(id);
boolean logok = false;
boolean admin = false;
System.out.println(fid);
if (fid != null)
    if (fid.equals("ok")) {
        logok = true;
        if (id.equals("admin@gmail.com")) {
            admin = true;
            System.out.println("admin");
        }
}
%>`,

    loginCode2:
`function chkemail(str) { //이메일
    var Reg_email = /^([a-zA-Z0-9_.+-])+(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    if (!Reg_email.test(str)) {

        return false;
    }
    return true;
}

function chkpw(str) { //비밀번호 제약조건
    var Rex_pw = /^[A-Za-z0-9]{6,15}$/;

    if (!Rex_pw.test(str))
        return false;

    return true;
}

    // 엔터 기능 추가
    var pw_input1 = document.getElementById("email_sign");
    var pw_input2 = document.getElementById("password_input");

    pw_input1.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("login_btn").click();
        }
    });

    pw_input2.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("login_btn").click();
        }
    });
});`,

    loginDesc:
    `헤더에 있는 로그인 버튼을 누르거나 회원만 가능한 기능을 실행시킬 시 (찜하기 버튼, 채팅하기 버튼 누르기 등) 로그인
    모달이 나타납니다. 이메일과 비밀번호 정보를 입력하여 데이터베이스에 확인할 때 데이터베이스에
    존재하지 않거나 비밀번호가 틀렸을 경우 id 변수를 JSP에 넘겨주며 로그인 실패 알람창을 뜨게 해줍니다.`,

    loginDesc2:
    `위와 같이 정규식을 사용하여 회원가입 하려는 이메일/아이디에 조건을 줍니다. 또한 편의성을 고려하여
    회원가입이나 로그인을 할 경우 마우스 클릭 대신 입력창에서 엔터 버튼으로 '확인'이 클릭이 될 수 있게
    하였습니다.`,

}