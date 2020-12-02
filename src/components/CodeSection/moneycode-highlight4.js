import {MoneyImgSet4} from '../SliderSection/MoneyImages4'

export const moneyHighlight4 = {
    slides: MoneyImgSet4,

    inputCode:
`public InputLogic(MoneyPage moneyPage) {
    this.moneyPage = moneyPage;
    inputPage = new InputPage();
    inputPage.inputBtn.addActionListener(this);

    MoneyDAO dao = MoneyDAO.getInstance();
    // accountNo Setting
    List<AccountDTO> account = dao.accountSelectAll();
    for (int i = 0; i < account.size(); i++) {
        if (account.get(i).getUserId().equals(userInfo.getUserId()))
            inputPage.accountCob.addItem(account.get(i).getBankName() + " : " + account.get(i).getAccountNo());
    }

    // category Setting
    categories = dao.categoriesSelectAll();
    for (int i = 0; i < categories.size(); i++) {
        if(categories.get(i).getInOrOut() == '0')
            inputPage.categoryCob.addItem(categories.get(i).getCategoryName());
    }

    inputPage.dateText.addFocusListener(this);
    inputPage.depositBtn.addActionListener(this);
    inputPage.withdrawBtn.addActionListener(this);
}`,

    inputCode2:
`private void inputData() {
    // DAO 가져오기
    MoneyDAO dao = MoneyDAO.getInstance();

    //제약조건
    if (!inputPage.dateText.getText().trim().matches("^\\d{4}-\\d{2}-\\d{2}$")) {
        JOptionPane.showMessageDialog(inputPage, "날짜 형식을 맞춰주세요.(YYYY-MM-DD)");
        inputPage.dateText.requestFocus();
        inputPage.dateText.setText("");
        return;
    }
    if (!inputPage.amountText.getText().trim().matches("^[\\d]+$")) {
        JOptionPane.showMessageDialog(inputPage, "금액은 숫자만 입력해주세요.");
        inputPage.amountText.requestFocus();
        inputPage.amountText.setText("");
        return;
    }

    // 입력 데이터 가져오기
    char inOrOut = inputPage.depositBtn.isSelected() ? '0' : '1';
    String useDate = inputPage.dateText.getText().trim();
    String accountNo = inputPage.accountCob.getSelectedItem().toString().split(" : ")[1];
    int categoryId = 0;
    if(inOrOut == '0')
        categoryId = inputPage.categoryCob.getSelectedIndex() + 13;
    else
        categoryId = inputPage.categoryCob.getSelectedIndex() + 1;
    int useAmount = Integer.parseInt(inputPage.amountText.getText().trim());
    String useContents = inputPage.contentText.getText().trim();
    TransactionDTO dto = new TransactionDTO();
    dto.setAccountNo(accountNo);
    dto.setCategoryId(categoryId);
    dto.setInOrOut(inOrOut);
    dto.setUseAmount(useAmount);
    dto.setUseContents(useContents);
    dto.setUseDate(useDate);

    // DB INSERT
    int cnt = dao.transactionInsert(dto);
    List<AccountDTO> account = dao.accountSelectAll();
    int accountBal = 0;
    for (int i = 0; i < account.size(); i++) {
        if (account.get(i).getAccountNo().equals(accountNo)) {
            accountBal = account.get(i).getAccountBal();
        }
    }
    if (cnt >= 0) {
        int sum = 0;
        if (inOrOut == '0') {
            sum = accountBal + useAmount;
        } else {
            sum = accountBal - useAmount;
        }
        // 금액 변경
        int accountCnt = dao.accountUpdate(sum, accountNo);
        JOptionPane.showMessageDialog(inputPage, "저장 성공");
        // data refresh
        moneyPage.recordPage.refreshData();
    } else {
        JOptionPane.showMessageDialog(inputPage, "저장 실패");
    }
    clearData();
}`,

    inputDesc:
    `메뉴바에서 깃펜 아이콘을 클릭하면 입금/출금 화면으로 이동합니다. 화면 전환과 동시에 현재 로그인한 회원의 정보를 참조하여 보유하고 있는
    계좌의 정보와 입금에 해당하는 분류(category) 또는 출금에 해당하는 분류를 가져와서 일치하는 드롭다운 박스에 리스트로 넣어줍니다. 상단의
    '입금'과 '출금'의 toggle 버튼을 클릭하여 입금/출금 화면을 전환시킬 수 있습니다.`,

    inputDesc2:
    `입금/출금 기록을 계좌에 저장하기 위해서는 먼저 모든 내용을 입력 또는 선택해주어야 합니다. 또한, 날짜 정보를 입력할 경우 정규식을 이용하여서
    YYYY-MM-DD 형식으로만 입력이 가능하게끔 하였으며 금액 또한 정규식을 이용하여 숫자만 저장이 가능하게끔 하였습니다.`,

    inputDesc3:
    `모든 제약조건을 만족하고 입력하기 버튼을 눌러주면 현재 눌러져 있는 입금/출금의 toggle 버튼을 참조하여 '입금'이 활성화 되어있으면 inOrOut 변수의 값이 1인 것을 확인 후
    categoryId에 13을 더해주고 '출금'이 활성화 되어있으면 categoryId에 1을 더해줍니다. categoryId는 선택된 분류의 인덱스 값을 저장하고 있으며 데이터베이스에 구축된
    분류 테이블(BANK_CATEGORIES)의 13행부터 18행은 입금에 해당하는 분류가, 1부터 12까지는 출금에 해당하는 분류로 이루어져 있습니다. 따라서, 출금 toggle 버튼을
    누르고 출금에 해당하는 분류를 선택, 모든 내용을 입력하고 '입력하기' 버튼을 누르면 데이터베이스에 있는 분류의 행을 참조하여 무슨 분류를 선택했는지
    기록합니다.`,
}