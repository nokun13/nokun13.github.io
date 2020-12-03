import {MoneyImgSet7} from '../SliderSection/MoneyImages7'

export const moneyHighlight7 = {
    slides: MoneyImgSet7,

    chattingCode:
`public synchronized void broadcast(String message) {
    Enumeration<ChatHandler> enu = userVec.elements();
    while(enu.hasMoreElements()) {
        ChatHandler handler = enu.nextElement();
        try {
            handler.dataOut.writeUTF(message);
            handler.dataOut.flush();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}`,

    chattingCode2:
`@Override
public void run() {
    while (!Thread.interrupted()) {
        try {
            String message = dataIn.readUTF();
            String name = message.split(" : ")[0];
            String msg = message.split(" : ")[1];
            if (msg.equals("@계산기") || msg.equals("@현재잔액")) {
                chatFunction(msg, name);
                continue;
            }
            if (name.equals(userName)) {
                chatPage.addMyMessage(message);
            } else {
                if (pageInfo.getPageNum() != 5 && pageInfo.getAlarm() == 1) {
                    Object[] options = {"채팅방 이동", "확인"};
                    int result = JOptionPane.showOptionDialog(chatPage, message, "채팅 알람", JOptionPane.YES_NO_OPTION, JOptionPane.QUESTION_MESSAGE, null, options, options[0]);
                    if(result == JOptionPane.YES_OPTION) {
                        moneyPage.changeChatPage();
                    }
                }
                chatPage.addOtherMessage(message);
            }
            // taOutput.append(message);
        } catch (IOException e) {
            // taOutput.append("-----서버종료됨-----");
            if (th != null) {
                th.interrupt();
                th = null;
            }
            // e.printStackTrace();
        }
    }
}`,

    chattingDesc:
    `메뉴바에서 말풍선 아이콘을 누르면 채팅 화면으로 전환됩니다. 채팅 화면을 띄워 주기 전 먼저 회원의 아이디를 userVec이라는 vector 변수에
    저장해 줍니다. 또 다른 회원이 moneymoney 프로그램을 실행시키고 로그인 하여 채팅 화면으로 들어가서 (마찬가지로 이 회원의 아이디가
    userVec 변수에 저장됩니다) 채팅을 입력하면 현재 userVec에 저장되어 있는 모든 회원들에게 채팅창에 채팅이 보여지게 됩니다. 이 때, 채팅이
    본인이 입력한 경우에는 오른쪽에 나열하며 다른 회원이 채팅을 입력할 경우에는 왼쪽에 표시되도록 하였습니다.`,

    chattingDesc2:
    `오른쪽 상단에 위치한 벨 아이콘을 클릭하여 채팅 알람을 활성화/비활성화 할 수 있습니다. 회원이 다른 화면에 있을 때 채팅이 전해지는 경우
    알림창이 띄워지며 어떤 회원이 무슨 채팅을 쳤는지가 확인 가능하며 버튼을 눌러 바로 채팅창으로 이동하거나 확인하고 본래의 화면에 계속 머무를수 있습니다.
    채팅 알람이 비활성화 되어 있는 경우에는 채팅의 알림창이 오지 않게 되지만 채팅의 기록은 그대로 남아있어 채팅화면으로 전환 할 시 전해진 채팅들을
    읽을 수 있습니다.`,

    chattingDesc3:
    `채팅 화면에서 '@계산기'를 입력하면 계산기 프로그램을 실행시켜 주며 '@현재잔액'을 입력해 주면 본인만 볼 수 있는 계좌의 총 금액이 채팅창에
    입력됩니다.`,

}