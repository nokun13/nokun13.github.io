import { MoneyImgSet2 } from '../SliderSection/MoneyImages2';

export const moneyHighlight2 = {
    slides: MoneyImgSet2,

    mainCode:
`public void showAccountBal() {

    List<AccountDTO> aList = dao.getAccountBal(dto);
    if (aList.isEmpty()) {
        return;
    } else {

    int sum = 0;

    for(int i = 0 ; i < aList.size() ; i++) {
        sum += aList.get(i).getAccountBal();

        if(i == 0) {
            mp.mainPage2.amountFirstBorder = new TitledBorder(aList.get(0).getBankName());
            mp.mainPage2.amountFirstBorder.setBorder(new LineBorder(Color.black, 2));
            mp.mainPage2.amountFirstBorder.setTitleFont(new Font("JetBrains Mono", Font.PLAIN, 18));
            mp.mainPage2.amountFirst.setBorder(mp.mainPage2.amountFirstBorder);
            mp.mainPage2.amountFirst.setText(aList.get(0).getAccountNo() +  " : " + aList.get(0).getAccountBal() + "원");
            mp.mainPage2.amountFirst.setVisible(true);
        } else if (i == 1) {
            mp.mainPage2.amountSecondBorder = new TitledBorder(aList.get(1).getBankName());
            mp.mainPage2.amountSecondBorder.setBorder(new LineBorder(Color.black, 2));
            mp.mainPage2.amountSecondBorder.setTitleFont(new Font("JetBrains Mono", Font.PLAIN, 18));
            mp.mainPage2.amountSecond.setBorder(mp.mainPage2.amountSecondBorder);
            mp.mainPage2.amountSecond.setText(aList.get(1).getAccountNo() + " : " + aList.get(1).getAccountBal() + "원");
            mp.mainPage2.amountSecond.setVisible(true);
        } else if (i == 2) {
            mp.mainPage2.amountThirdBorder = new TitledBorder(aList.get(2).getBankName());
            mp.mainPage2.amountThirdBorder.setBorder(new LineBorder(Color.black, 2));
            mp.mainPage2.amountThirdBorder.setTitleFont(new Font("JetBrains Mono", Font.PLAIN, 18));
            mp.mainPage2.amountThird.setBorder(mp.mainPage2.amountThirdBorder);
            mp.mainPage2.amountThird.setText(aList.get(2).getAccountNo() + " : " + aList.get(2).getAccountBal() + "원");
            mp.mainPage2.amountThird.setVisible(true);
        }
    }
    mp.mainPage2.amountTotal.setText("총 : " + sum +"원");

}

} // end showAccountBal()`,

    mainDesc:
    `로그인 후 보여지는 메인 화면입니다. 회원가입 이후 로그인 한 회원은 '총 잔액' 박스만 볼 수 있습니다. 회원은 총 3개의 계좌를 등록할 수 있습니다.
    데이터베이스에서 회원의 계좌 정보를 가져오고 for문 안에서 각 계좌의 잔액을 sum 변수에 더해줍니다. 또 계좌의 size에 따라 if문을 통하여 계좌가 1개이면 1개의 계좌잔액만, 2개면
    2개의 계좌잔액을, 3개면 3개 전부의 계좌잔액을 보이게끔 하였습니다. `,

}