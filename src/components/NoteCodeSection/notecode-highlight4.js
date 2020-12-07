import {NoteImgSet4} from '../SliderSection/NoteImages4'

export const noteHighlight4 = {
    slides: NoteImgSet4,

    postCode:
`@Override
public MultipartRequest executeMulti(HttpServletRequest req) {

    MultipartRequest multi = null;
    String saveDirectory = "c:/Users/user/Desktop/workspace/webproject2020/WebContent/images";
    File file = new File(saveDirectory);
    if(!file.isDirectory()) {
        file.mkdir();
    }

    int maxPostSize = 1*1000*1000*1000; // 1GB
    String encoding = "UTF-8";

    try {
        multi = new MultipartRequest(req, saveDirectory, maxPostSize, encoding, new DefaultFileRenamePolicy());
    } catch (IOException e) {
        e.printStackTrace();
    }

    HttpSession session = req.getSession();

    WebDAO dao = WebDAO.getInstance();

    PostDTO dto = new PostDTO();
    Enumeration params = multi.getParameterNames();
    while (params.hasMoreElements()) {
        String paramname = (String) params.nextElement();
        if(paramname.equalsIgnoreCase("noticetext")) {
            String noticetext = multi.getParameter("noticetext");
            dto.setPost_Content(noticetext);
        }
    }
    dto.setAccount_Name((String)session.getAttribute("account_Name"));
    dto.setPost_Img(multi.getFilesystemName("filepath"));
    dao.uploadPost(dto);
    int postnum = dao.updatepost();
    dao.addflagcategorytable(postnum);

    return multi;

} // end executeMulti()`,

    postDesc:
    `게시물 작성을 하기 위해서는 꼭 사진을 첨부하여야 합니다. 위의 코드에서 보이듯이 이미지를
    선택하고 서버폴더에 저장을 하도록 합니다. 위와 같이 특정 경로로 파일을 저장하게끔 하였으나
    알아본 결과 보통 이렇게 경로를 지정해주거나 getRealPath()를 사용하여 특정경로를 가져올 경우
    WAR 파일을 이용하여 애플리케이션을 deploy 할 때 문제가 발생한다는 경우도 고려해야 될 것 같습니다.
    이미지를 첨부하여 form 데이터를 백엔드쪽으로 넘겨줄 때는 꼭 MultipartRequest 데이터 타입으로
    받아주어야 하며 같이 넘겨준 String 변수나 int 변수는 Enumeration과 while문을 사용하여
    변수값을 처리할 수 있도록 하였습니다.`,

}