# 전제
-   왜 ? : 시발 리액트 잘 못 쓰니깐 숙달. state와 조건문, 그리고 LifeCycle.

-   npm패키지 : React, React Router DOM, graphQL, @apollo/client, react-apollo, moment, graphql-tag

# 논리 구조

## 전제
1. react : JS로도 되지만, 리렌더링 기능을 편하게 쓰기 위해 리액트를 쓴다.
2. react-router-dom : 3개에서 4개의 페이지가 있을 예정. 더 구체적으로.
3. @apollo/client : REST API가 아닌 graphQL API이다. 
4. graphql-tag : Query와 Mutation에 대한 정의를 따로 파일에다 해놓는다. 
5. graphql : graphQL의 방식으로 변환시켜야 하기 때문에 사용한다.
6. useQuery와 useMutation : data를 받아오는 함수를 각 component에서 쓴다. 
7. 날짜에 따라서 다른 input type을 필요로 하는 Query문이 있기 때문에, moment()로 편하게 날짜에 대한 정의를 내린다. 

## 전제 구체화
1. 우선 백엔드쪽의 링크와 연결한 다음, 개발자 도구를 이용해서 apollo쪽의 DOC과 Schema를 분석한다.
? : 문제점. 헤로쿠 서버가 안돌아가고 있다. 그래서 예전에 승환이가 만든 서버를 직접 돌려야 함...

2. 그 다음, 내 애플리케이션에서 어떤 Query문과 어떤 Mutation문이 필요할지 생각한다. data를 막 불러오는게 아니라, 내 계획과 우선순위에 따라서.
? : 문제점. class Component에선 useQuery Hook을 쓸 수 없다. 그럼 어떤 해결 방안이 있을까?
! : 첫번째. 단순히 component를 function식으로 바꾸면 된다. 두번째, function인 자식 혹은 부모component를 만들어서 그 data를 props로 전달한다. 세번째, 

? :문제점. useEffect 훅에서 useQuery를 써야 하는 것 같은데, 어떻게 쓰는지 모른다.
! : 잠깐만. useEffect를 왜 쓰는데? data라는 변수만 언급하면 훅처럼 useQuery가 실행되는거 아냐?
? : 문제점. useEffect를 잘 모른다. componentDidMount와 비슷한 개념이라고 하기는 하는데, 구체적인 문법을 모름.

3. Query문 `logsChecks` : 해당 날짜에 대한 직원,팀,온도,당번 다 불러옴.
4. map() : 불러온 data array속 애기들을 data를 나열하는데,
5. 자식 Component에다가 이름, 온도, 당번 data를 props로 전달한다.userName, teamName goToWork, lunch, goHome, pantry, prevention. 
6. 자식쪽에서 props를 갖고 논다. 
7.  Router DOM의 Link : 각 자식들은 특정 페이지로 이동한다.  
? : 문제점. 해당 페이지에서 링크를 통해 받아온 params로 id data에 접근할 수 있어야 하는데, 이 Query문에선 id자체가 안 나온다.
! : map()의 index를 이용해서 일단 구멍을 메꿔야겠다. 어차피 순서대로 나오니까 결과는 같다.

7. 온도체크 페이지. Mutation문 `editLog`를 써야 한다.

# 구상
1. logsChecks라는 Query문의 데이터를 받는다. 
2. 이 때 state : 날짜별로 데이터를 받아야 하는데, moment를 이용한 state로. 나중에 만들 날짜 버튼에서 써야 한다.
? : 근데 달력 input으로 하면 나중에 찾기 훨씬 편하지 않을까? 생각.
3. 전체 인원 : map()을 통해 전체 Array속 인원들을 띄운다. Component를 따로 만드는게 훨씬 이해 잘 될 듯. props로 data들을 보내주고,
4. 모달창 혹은 다른 페이지 component에다가 함수를 전달해주거나 새로운 Mutation문을 만들자.
5. 온도 : 조건문을 통해 저녁,점심,아침 순으로 로그 온도를 띄운다. 
6. 온도 입력 : 숫자 인풋으로. state 필요.
7. 여기서 Mutation문 : 온도 state와 현재 인원 state를 인풋값으로 넣어야 한다. 
8. 날짜버튼 : 날짜별로 Query문 리렌더링 될 수 있도록.









온도체크 및 방역,탕비실 관리 사이트. 
# 과제
## 온도체크 기능(인증 필요 없음)

## 방역, 탕비실 확인 기능(인증 필요 없음)

## 왜 인증이 필요 없는거?
- 이 사이트의 경우는 큰 문제가 안 되는 경우임.
- 매번 로그인하기 불편
- 엑셀 만들기 ㅈㄴ 귀찮

## 관리자 기능
-  방역/탕비실 추가 삭제 기능
-  팀/직원 CRUD 기능

## 왜 인증이 필요할까?
-   임의로 만들기에는 중요한 정보들. 민감함.
-   특정 사람만 이용하는 기능이기 때문.
-   시험 감독하는 인원에 대한 관리는 기획쪽에서 담당.

엑셀 파일과 오프라인 게시물 대신하는 사이트 !

홈페이지에서
1. 인원을 다 띄워
2. 눌렀을 때 일반 직원의 경우엔 온도? 탕비실? 일기?
3. 페이지 : 담당인 경우엔 너 오늘 해야 돼 !
5. 공용칸에는 미실시, 눌렀을 땐 완료

온도체크
1. 최대한 간단하게 시간대, 온도체크 여부
2. 팀 별로 이름을 띄워서 조금 더 눈이 덜 아프게
3. 현재시간을 가져옴 ifelse로 분기 처리함. 
4. 선택도 가능해야함 . onClick()
5. 유도리 원칙 : 출근 점심 퇴근을 선택할 수 있는것.
6. state로 반응


7. 관리자 경우엔 로그인 
8. 로그인 토큰 있을 땐 그 사람에 대한 관리 페이지로 이동해버리기
9. 