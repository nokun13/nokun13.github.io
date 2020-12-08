import {NoteImgSet2} from '../SliderSection/NoteImages2'

export const noteHighlight2 = {
    slides: NoteImgSet2,

    signupCode:
`$('#filepath').on('change', function(){
		var str = $('#filepath').val();

		// 이미지 첨부파일인지 체크
		var patt = /(.jpeg$|.jpg$|.gif$|.png$)/gi;
		var result = str.match(patt);

		if($("#filepath").val() === ""){
			alert("사진이 리셋되었습니다.")
			$('#profilepic').attr("src", "/usersettingview/images/person.png");
			return false;
		}

		if(!result){
			alert('jpeg, jpg, gif, png만 가능합니다.');
			return false;
		}

		// 파일첨부 사이즈 체크
		if(this.files[0].size > 100000000){
			alert('100MB 이하만 가능합니다.');
			$('#filepath').val("");
			return false;
		}

		// 파일을 읽기 위한 FileReader객체 생성
		var reader = new FileReader();

		// File내용을 읽어 dataURL형식의 문자열 저장
		reader.readAsDataURL(this.files[0]); // 배열 형식이기에 꼭 [i] 배열의 순서를 알려줘야한다.

		// 파일 일거들이기를 성공했을 때 호출되는 이벤트 메소드
		reader.onload = function(e){
			// img요소의 src속성에 읽어들인 File내용을 지정해준다.
			$('#profilepic').attr('src', e.target.result);
		};
	}); // end change()`,

    signupDesc:
    `회원가입 이후 프로필 설정을 입력하기 위한 페이지입니다. 프로필 이미지 첨부파일을 선택하기 위해서
    JavaScript로 여러가지 제약조건을 주었습니다. 먼저 첨부파일이 이미지 파일인것을 확인하기 위하여
    파일형식 (e.g. jpeg, png, etc.) 패턴을 정의하고 첨부되는 파일이 이 패턴에 해당되는지 확인합니다.
    확인한 후 그 다음 파일의 사이즈를 확인합니다 (형식상 1기가바이트로 제한했습니다). 마지막으로
    선택한 이미지가 사용자에게 보여질 수 있도록 <img />의 src를 선택한 이미지로 저장해줍니다.`,

}