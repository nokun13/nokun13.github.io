import {MoneyImgSet3} from '../SliderSection/MoneyImages3'

export const moneyHighlight3 = {
    slides: MoneyImgSet3,

    mgrCode:
`public void selectMethod() {
    MoneyDAO dao = MoneyDAO.getInstance();
    AccountDTO dto = new AccountDTO();

    dto.setUserId(userInfo.getUserId());
    dto.setAccountNo(acc.tf.getText());
    dto.setAccountBal(0);
    dto.setBankName(acc.bankBox.getSelectedItem().toString());
    String badId = "";

    if (acc.tf.getText().contentEquals(badId) || acc.tf.getText().contentEquals("계좌번호를 입력하세요.")) {
        JOptionPane.showMessageDialog(acc, "계좌번호를 입력하세요.");
    } else if (dao.accountInfoCheck(dto) == 1) {
        JOptionPane.showMessageDialog(acc, "이미 존재하는 계좌 입니다.");
//			return;
    } else if (dao.accountNum(dto) >= MAX_ACCOUNT) {
        JOptionPane.showMessageDialog(acc, "계좌의 개수가 초과되었습니다.");
//			return;
    } else {
        dao.accountInsert(dto);
        JOptionPane.showMessageDialog(acc, "등록되었습니다.");
        acc.box.addItem(dto.getBankName() + " : " + dto.getAccountNo());
        init();
    }
    return;
}`,

    mgrCode2:
`public void deleteMethod() {
    // 콤보 박스에서 현재 선택된 item을 받아옴
    if(acc.box.getSelectedIndex() == -1){
        JOptionPane.showMessageDialog(acc, "삭제할 계좌가 없습니다.");
        return;
    }

    String str = acc.box.getSelectedItem().toString().split(" : ")[1];

    // delete item에 해당하는 delete 쿼리 실행, 액션
    MoneyDAO dao = MoneyDAO.getInstance();
    AccountDTO dto = new AccountDTO();
    dto.setAccountNo(str);
    int cnt = dao.accountDelete(dto);
    if (cnt == 1) {
        JOptionPane.showMessageDialog(acc, "삭제완료");
        acc.box.removeItem(acc.box.getSelectedItem());
    } else {
        JOptionPane.showMessageDialog(acc, "삭제실패");
    }
    return;
}`,
    mgrDesc:
    `메뉴바에서 지갑 아이콘을 클릭하면 새로운 계좌를 등록하거나 기존의 계좌를 삭제할 수 있는 계좌 관리 화면으로 이동합니다.
    계좌의 이름을 입력하고 총 6개의 은행옵션에서 선택을 한 다음 '+' 버튼을 누르면 새로운 계좌가 등록이 됩니다. 만약 이미 3개의 계좌가
    등록이 되어있거나 이름이 같은 계좌를 등록할 경우에는 알람창이 뜨고 계좌등록이 취소되어버립니다.`,

    mgrDesc2:
    `계좌를 삭제하기 위해서는 먼저 Dropdown 메뉴에서 유지하고 있는 계좌를 선택한 후 '-' 버튼을 클릭하면 선택한 계좌가 삭제됩니다. 동시에
    계좌의 입금/출금 기록들도 삭제가 되어버리기 때문에 조심하여야 합니다. split(":")[1]을 사용하여서 선택된 계좌의 이름을 ':' 콜론을 중심으로
    나누고 두 번째 자리, 즉 계좌의 이름을 스트링 변수에 저장 후 계좌이름과 회원의 이름을 참조하여서 데이터베이스에서 삭제하도록 합니다.`,
}