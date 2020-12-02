import {MoneyImgSet1} from '../SliderSection/MoneyImages'

export const moneyHighlight = {
    slides: MoneyImgSet1,

    loginCode:
`public int loginCheck(String id, String pw) {
    String pwCheck = "";
    int chk = -1;
    try {
        conn = Jdbc.getInit();
        String sql = "select user_pw from bank_user_info where user_id = ?";
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, id);
        rs = pstmt.executeQuery();
        if (rs.next()) {
            pwCheck = rs.getString("user_pw");
            if (pwCheck.equals(pw)) {
                chk = 1;
            } else {
                chk = 0;
            }
        } else {
            chk = -1;
        }
    } catch (ClassNotFoundException | SQLException e) {
        e.printStackTrace();
    } finally {
        Jdbc.close(rs);
        Jdbc.close(pstmt);
        Jdbc.close(conn);
    }
    return chk;
}`,
    loginDesc:
    `프로그램을 실행하면 보여지는 로그인 화면입니다. ID 와 패스워드를 입력하여
    데이터베이스에서 입력된 아이디를 찾아봅니다. 아이디가 존재하지 않을 때 chk의 값에 -1을 부여하며
    알림창을 띄워줍니다. 아이디는 존재하지만 입력된 비밀번호가 틀렸을 경우 chk 값으로 0을, 일치할 때는 1의 값을
    주며 리턴되는 chk 값이 1인 경우에만 로그인을 성공적으로 할 수 있으며, 회원의 정보를 새로 생성된 UserInfo 인스턴스에 저장해 주고 페이지 이동과 CRUD 기능을
    활용할 때 이 인스턴스에 저장된 회원의 정보를 이용합니다.`,

    loginDesc2:
    `처음 회원가입을 할 경우 새로운 아이디와 비밀번호를 입력해주고 '회원가입' 버튼을
    눌러주면 데이터베이스에 똑같은 아이디가 존재하는지 체크 후, 없을 경우 성공적으로
    회원가입을 하며 데이터베이스에 새로운 회원의 정보를 저장합니다.`,

    loginDesc3:
    `하단의 메뉴바는 고정되어 있으며 성공적으로 로그인 후 (로그인 전에는 페이지 이동이 불가합니다) 페이지 이동 할 경우에
    중앙 패널의 내용물을 교체해주는 방식으로 개발하였습니다.`
}