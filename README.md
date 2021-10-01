# Nwitter

Twitter (mini)clone with React and Firebase

### 2.3 create-react-app

- npx : 일회성으로 노드 패키지를 설치해주는 도구. 한 번만 사용할 경우, npx로 설치 가능하다.

### 2.4 setting firebase

- secret key 숨기기
  - .env 파일을 만들어, 비밀키 변수를 등록하여 비밀키가 필요한 다른 파일에 비밀키 변수(환경 변수)를 불러 참조한다.
  - CRA로 만든 리액트 프로젝트에서 .ENV 파일에 환경 변수를 정의하려면 변수 맨 앞에 `REACT_APP_`를 붙여야 한다.
  - .gitignore 파일에 .env를 추가한다.
  - 다른 파일에서 환경 변수를 사용할 경우, 환경 변수 앞에 `process.env.`를 붕여야 한다. .env 파일을 읽어 파일 안에 있는 변숫값을 불러온다는 의미이다.
