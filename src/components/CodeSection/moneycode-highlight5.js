import {MoneyImgSet5} from '../SliderSection/MoneyImages5'

export const moneyHighlight5 = {
    slides: MoneyImgSet5,

    recordCode:
`public void refreshData() {
    MoneyDAO dao = MoneyDAO.getInstance();
    UserDTO dto1 = new UserDTO();
    dto1.setUserId(userInfo.getUserId());
    List<TransactionDTO> aList = dao.transactionSelectAll(dto1);
    List<CategoriesDTO> categories = dao.categoriesSelectAll();

    data = null;
    data = new String[aList.size()][columnNames.length];

    int t_index = 0;
    // 테이블에 자료 붙여줌
    for (TransactionDTO dto : aList) {
        // data[t_index][0] = String.valueOf(dto.getTransactionNo());// int
        data[t_index][0] = dto.getUseDate().split(" ")[0];// date
        if (dto.getInOrOut() == '0') {
            data[t_index][2] = "입금";
        } else {
            data[t_index][2] = "출금";
        }
        data[t_index][1] = dto.getAccountNo();// string
        data[t_index][3] = categories.get(dto.getCategoryId() - 1).getCategoryName();
        // data[t_index][4] = String.valueOf(dto.getCategoryId());// string
        data[t_index][4] = String.valueOf(dto.getUseAmount());
        data[t_index][5] = dto.getUseContents();// string
        t_index++;

    }
    this.setWholeData();
}`,

    recordCode2:
`public void setWholeData() {
    emptyBtn.setSelected(true);

    model.setRowCount(0);
    int sum = 0;
    for (int i = 0; i < data.length; i++) {
        model.addRow(data[i]);
        if (data[i][2] == "입금") {
            sum += Integer.parseInt(data[i][4]);
            ;
        } else {
            sum -= Integer.parseInt(data[i][4]);
            ;
        }
    }
    totalTxt.setText(String.valueOf(sum) + " 원");
}`,

    recordCode3:
`// 카테고리 열붙이기 및 총합 구하기 메소드
void categoryFilter(String inOrOut, String category) {
    recordPage.model.setRowCount(0);
    int sum = 0;
    for (int i = 0; i < recordPage.data.length; i++) {
        String inOutStr = recordPage.data[i][2];
        String categoryName = recordPage.data[i][3];
        if (categoryName.equals(category)) {
            if (inOutStr.equals(inOrOut)) {
                recordPage.model.addRow(recordPage.data[i]);
                if (inOutStr.equals("입금")) {
                    sum += Integer.parseInt(recordPage.data[i][4]);
                } else {
                    sum -= Integer.parseInt(recordPage.data[i][4]);
                }
            }
        }
    }
    recordPage.totalTxt.setText(String.valueOf(sum) + " 원");
}`,

    recordDesc:
    `메뉴바에서 돋보기 아이콘을 클릭하면 내역 화면으로 이동합니다. 데이터베이스에서 회원의 정보를 참조하여 날짜의 내림순으로 list로 가져오며 list의
    size를 참조하여 중앙에 위치한 테이블의 총 행 갯수를 만들어 주고 각 행에 입금/출금 내역의 정보를 list에서 한 개 한 개씩 빼내어 넣어줍니다. 또한,
    1주일, 1개월, 6개월 동안의 내역만을 보고 싶으면 테이블 위의 각 버튼을 이용하여 현재 날짜에서 각각 7일, 30일, 180일 전 날에 해당되는 내역들만
    테이블에 뿌려주게끔 할 수 있습니다.`,

    recordDesc2:
    `입금/출금 내역의 총 금액을 구하기 위하여 for문을 이용하여 각 행의 내역이 입금인지 출금인지 확인하여 줍니다. 만약 입금일 경우 sum이라는 변수에
    금액을 더해주고 출금일 경우에는 sum에서 빼줍니다. 위의 refreshData() 메소드와 setWholeData() 메소드는 내역을 기간별로 구분하거나
    분류별로 구분할 때 다시 실행되어서 테이블에 새로운 내역을 뿌려주고 새로운 내역의 총 합계금액을 계산하여 보여주는데 재사용되기도 합니다.`,

    recordDesc3:
    `오른쪽 상단의 '상세' 버튼을 누르면 새로운 창이 나오며 입금과 출금의 toggle 버튼이 보이고 아래에는 각자에 해당하는 분류
    버튼들이 나옵니다. 분류 버튼을 하나씩 눌러주면 그 분류를 category 변수에 저장시키고 categoryFilter() 메소드에 인자값으로 보내줍니다. category
    변수를 참조하여 그 분류에 해당하는 내역 데이터들만 테이블에 보이게끔 하여줍니다.`,
}