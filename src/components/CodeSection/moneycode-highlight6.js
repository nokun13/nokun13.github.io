import {MoneyImgSet6} from '../SliderSection/MoneyImages6'

export const moneyHighlight6 = {
    slides: MoneyImgSet6,

    chartCode:
`void drawChartIncome() { // 차트를 그린다

    int sum = 0; // 초기값 0
    for (int i = 0; i < recordPage.data.length; i++) { // 데이터 값만큼 루프
        if (recordPage.data[i][2].equals("입금")) {
            sum += Integer.parseInt(recordPage.data[i][4]);
        }
    }
    if (sum == 0)
        return;

    int[] categorySum = new int[6];
    String[] categoryName = {"월급", "부수입", "용돈", "상여", "금융수익", "기타"};
    this.categoryName = categoryName;
    arcAngle = new int[categoryName.length];

    for (int i = 0; i < recordPage.data.length; i++) {
        if (recordPage.data[i][2].equals("입금")) {
            switch (recordPage.data[i][3]) {
            case "월급": categorySum[0] += Integer.parseInt(recordPage.data[i][4]); break;
            case "부수입": categorySum[1] += Integer.parseInt(recordPage.data[i][4]); break;
            case "용돈": categorySum[2] += Integer.parseInt(recordPage.data[i][4]); break;
            case "상여": categorySum[3] += Integer.parseInt(recordPage.data[i][4]); break;
            case "금융수익": categorySum[4] += Integer.parseInt(recordPage.data[i][4]); break;
            case "기타": categorySum[5] += Integer.parseInt(recordPage.data[i][4]); break;

            default: break;
            }
        }
    }

    for (int i = 0; i < categorySum.length; i++) {
        arcAngle[i] = (int) Math.round(categorySum[i] / (double) sum * 360);
        chartPanel.repaint(); // 차트패널의 PAINT호출
    }
}`,

    chartCode2:
`class ChartPanel extends JPanel { // 차트 표시 패널

    public void paintComponent(Graphics g) {

        super.paintComponent(g);// 부모 패인트호출

        int startAngle = 0;
        int gap = 0;
        if(categoryName != null) {
            for (int i = 0; i < categoryName.length; i++) {
                gap += 30;
                g.setFont(new Font("JetBrains Mono", Font.PLAIN, 18));
                g.setColor(color[i]);
                g.drawString(categoryName[i] + " " + Math.round(arcAngle[i] * 100 / 360) + "%", 50, 30 + gap);
            }
            for (int i = 0; i < categoryName.length; i++) {
                g.setColor(color[i]);
                g.fillArc(230, 70, 250, 250, startAngle, arcAngle[i]);
                startAngle = startAngle + arcAngle[i];
            }
        }

    }
}`,

    chartDesc:
    `계좌 내역 화면에서 '통계' 버튼을 누르면 새로운 창이 뜨고 계좌의 통계 그래프를 볼 수 있는 화면이 나옵니다. 아래의
    입금/출금 toggle 버튼을 눌러주면 분류별로 차지하는 비율의 퍼센트와 이의 비중을 원형차트로 보여줍니다.
    위의 drawChartIncome 메소드는 입금 버튼을 눌렀을 때 데이터베이스에 저장되어 있는 회원의 내역 정보를
    가져와 분류별로 구분하여 categorySum 배열에 각각 금액들을 저장해줍니다. 분류별로 금액들을 배열에
    더해준 후 다시 한 번 for문을 이용하여 categorySum 배열의 각 분류 금액이 총 금액에서 얼마만큼의 비율을
    차지하는지 계산해주어 arcAngle 배열에 저장해주고 chartPanel 클래스의 repaint() 메소드를 호출하여 원형차트를 그려줍니다.`,

    chartDesc2:
    `drawChartIncome 메소드에서 계산한 분류별의 비율이 담긴 arcAngle을 사용하여 원형차트를 그려주며 각 분류와
    색깔을 매칭해줍니다.`,

}