
# HIKERS

hikers 레파지토리입니다.

<<<<<<< HEAD

## Commit message 규칙
기본적으로 commit message 는 제목, 본문, 꼬리말로 구성합니다.
제목은 필수사항이며, 본문과 꼬리말은 선택사항입니다.

"type" : "subject"

"body"

=======
## Commit message 규칙

기본적으로 commit message 는 제목, 본문, 꼬리말로 구성합니다. <br>
제목은 필수사항이며, 본문과 꼬리말은 선택사항입니다.

"type" : "subject" <br><br>
"body" <br><br>
>>>>>>> home-page
"footer"

**Type** <br>
feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정 <br>
fix : 기능에 대한 버그 수정 <br>
build : 빌드 관련 수정 <br>
chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore <br>
ci : CI 관련 설정 수정 <br>
docs : 문서(주석) 수정 <br>
style : 코드 스타일, 포맷팅에 대한 수정 <br>
<<<<<<< HEAD
refactor : 기능의 변화가 아닌 코드 리팩터링 ex ) 변수 이름 변경  <br>
test : 테스트 코드 추가/수정 <br>
release : 버전 릴리즈 <br>

**Subject**  <br>
Type 과 함께 헤더를 구성합니다. 예를들어, 로그인 API 를 추가했다면 다음과 같이 구성할 수 있습니다.

=======
refactor : 기능의 변화가 아닌 코드 리팩터링 ex ) 변수 이름 변경 <br>
test : 테스트 코드 추가/수정 <br>
release : 버전 릴리즈

**Subject** <br>
Type 과 함께 헤더를 구성합니다. 예를들어, 로그인 API 를 추가했다면 다음과 같이 구성할 수 있습니다. <br><br>
>>>>>>> home-page
ex) feat: Add login api

**Body** <br>
헤더로 표현이 가능하다면 생략이 가능합니다. 아닌 경우에는 자세한 내용을 함께 적어 본문을 구성합니다.

**Footer** <br>
어떠한 이슈에 대한 commit 인지 issue number 를 포함합니다.그리고 close #1 처럼 close 를 통해 해당 이슈를 닫는 방법도 있습니다.

<<<<<<< HEAD
**작성예시**<br>

git commit -m "fix: Safari에서 모달을 띄웠을 때 스크롤 이슈 수정

모바일 사파리에서 Carousel 모달을 띄웠을 때,
모달 밖의 상하 스크롤이 움직이는 이슈 수정.
=======
**작성예시** <br><br>
git commit -m "fix: Safari에서 모달을 띄웠을 때 스크롤 이슈 수정 <br><br>
모바일 사파리에서 Carousel 모달을 띄웠을 때, <br>
모달 밖의 상하 스크롤이 움직이는 이슈 수정. <br><br>
resolves: #1137
>>>>>>> home-page