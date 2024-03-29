### 🤔 학습 목표

## 6-1. React에서 사용자 입력 처리하기

- 세부 목표
  - 한줄 입력 처리하기
  - 여러줄 입력 처리하기
  - 선택 박스 입력 처리하기
  - 사용자 입력 데이터 핸들링하기

## 6-2. React에서 DOM에 조작하기 - useRef

- 세부 목표
  - 일기 저장 버튼을 클릭했을 때 작성자와 일기가 정상적으로 입력되었는지 확인하고 아니라면 focus 하기

## 6-3. React에서 리스트 사용하기

- 세부 목표
  - 배열을 이용하여 React에서 List를 렌더링 해보고 개별적인 컴포넌트로 만들어보기

## 6-4. React에서 배열 사용하기 2 - 데이터 추가하기

- 세부 목표
  - 배열을 이용한 React의 List에 아이템을 동적으로 추가해보기
  - With React처럼 생각하기
  <!-- - React는 단방향으로만 데이터가 흐른다. -->

## 6-5. React에서 배열 사용하기 3 - 데이터 삭제하기

- 세부 목표
  - 삭제하기 버튼을 클릭했을 때 해당 일기만 List에서 삭제하기

## 6-6. React에서 배열 사용하기 4 - 데이터 수정하기

- 세부 목표
  - 배열을 이용한 React의 List에 아이템을 동적으로 수정 해보기 With 조건부 렌더링

## 6-7. React Lifecycle 제어하기 - useEffect

- Lifecycle , React 컴포넌트의 생명 주기

  - 화면에 나타나는 것 Mount / ex) 초기화 작업
    - ComponentDidMount (Class React Component Only)
  - 업데이트 (리렌더) Update / ex) 예외 처리 작업
    - ComponentDidUpdate
  - 화면에서 사라짐 UnMount / ex) 메모리 정리 작업
    - ComponentWillUnmount

- React Hooks 2019년 6월 정식 출시

  - Class형 컴포넌트의 길어지는 코드 길이 문제
  - 중복 코드, 가독성 문제 등등을 해결하기 위해 동작함

- useEffect
  - Callback 함수, Dependency Array(의존성 배열)
  - 이 배열 내에 들어있는 값이 변화하면 콜백 함수가 수행된다.

## 6-8. React에서 API 호출하기

- 세부 목표

  - useEffect를 이용하여 컴포넌트 Mount 시점에 API를 호출하고 해당 API의 결과값을 일기 데이터의 초기값으로 이용하기
  - https://jsonplaceholder.typicode.com/

## 6-9. React developer tools

- Chrome의 확장 도구 / facebook 직접 제작
- 도구 더보기 - 확장 프로그램 - React developer tools 체크 설정
- 세부 정보 > 사이트 액세스 (모든 사이트) > 파일 URL에 대한 액세스 허용 (ON)
- 주황색 표시 : This page is using the development build of React. 🚧

- 관리자 도구
  - Components
    - 앱 컴포넌트가 가지고 있는 state, hooks , props, key 값 조회 가능
  - Profiler
    - Highlight updates when components render. : 리렌더 되는 컴포넌트 표시

## 6-10. 최적화 1 - useMemo

- 세부 목표

  - 현재 일기 데이터를 분석하는 함수를 제작하고 해당 함수가 일기 데이터의 길이가 변화하지 않을 때 값을 다시 계산하지 않도록 하기

- Memoization
  - 이미 계산 해 본 연산 결과를 기억 해 두었다가 동일한 계산을 시키면, 다시 연산하지 않고 기억 해 두었던 데이터를 반환 시키게 하는 방법 (연산 과정 최적화)

## 6-11. 최적화 2 - React.memo

- React.memo 공식문서 : 메모이제이션된 값을 반환

- 객체를 비교하는 방법
  - 객체의 주소에 의한 비교 (얕은 비교)
