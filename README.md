# [Wanted Pre Onboarding FE 5th] 팀 과제 #  4-2

- 주제: Engall 기업과제

- 프로젝트 기간: 2022.07.28 ~ 2022.07.30

<br />

## **1. 팀원 소개 **

### # <a href="https://github.com/chaengs">심채영</a>
### # <a href="https://github.com/leejiho9898">이지호</a>
### # <a href="https://github.com/godcl1623">이치행<a>
### # <a href="https://github.com/devMarco14">임종혁</a>
### # <a href="https://github.com/HyeonJu-C">천현주</a>

<br />

## **2. 기술 스택**

`react` `type-script` `tailwindcss` `react query` `axios` `json server`

<br />

## **3. 프로젝트 소개**
![스크린샷 2022-07-29 오후 5 02 53](https://user-images.githubusercontent.com/99126860/181713633-906b0a99-975c-4f6d-83e5-502f21bf17a2.png)
![스크린샷 2022-07-29 오후 5 02 34](https://user-images.githubusercontent.com/99126860/181713708-784826b7-7df3-4e3b-8a3f-5916efc923b1.png)
![스크린샷 2022-07-29 오후 5 01 30](https://user-images.githubusercontent.com/99126860/181713726-cebd9d91-e2c1-4ba6-9f4a-22f8607cbb0b.png)
![스크린샷 2022-07-29 오후 5 02 10](https://user-images.githubusercontent.com/99126860/181713736-4fc5bc58-4ec6-4ae8-88df-10f556a1ac6b.png)


<br />

## **4. 프로젝트 구조**

```
📦src
 ┣ 📂asstes
 ┃ ┗ 📂imgs
 ┃ ┃ ┣ 📜engall.png
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┗ 📜Header.tsx
 ┣ 📂database
 ┃ ┗ 📜database.json
 ┣ 📂hooks
 ┃ ┣ 📜httpRequest.ts
 ┃ ┗ 📜useScheduleForm.ts
 ┣ 📂libs
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜schedule.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📜Constants.ts
 ┣ 📂pages
 ┃ ┣ 📂addSchedulePage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜AMPM.tsx
 ┃ ┃ ┃ ┣ 📜DayOfWeek.tsx
 ┃ ┃ ┃ ┣ 📜Option.tsx
 ┃ ┃ ┃ ┗ 📜SelectBox.tsx
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜AddSchedulePage.tsx
 ┃ ┗ 📂schedulePage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Dayslot.tsx
 ┃ ┃ ┃ ┗ 📜Timeslot.tsx
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useWeekList.ts
 ┃ ┃ ┗ 📜SchedulePage.tsx
 ┣ 📂routes
 ┃ ┣ 📜Path.ts
 ┃ ┗ 📜Routing.tsx
 ┣ 📂types
 ┃ ┣ 📜customTypes.d.ts
 ┃ ┣ 📜imgges.d.ts
 ┃ ┗ 📜schedule.d.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```

<br />

## **5. 컨벤션**

### # 협업을 위한 git 커밋 컨벤션 설정

| 커밋명   | 내용                                                   |
| -------- | ------------------------------------------------------ |
| feat     | 새로운 기능을 추가                                     |
| fix      | 버그 수정                                              |
| design   | CSS 등 사용자 UI 디자인 변경                           |
| docs     | 문서 생성, 추가, 수정(README.md)                       |
| refactor | 코드 리팩토링                                          |
| chore    | 간단한 코드 변경, 로직에 큰 영향을 주지 않는 작은 변경 |
| test     | 테스트 코드 추가 및 리팩토링                           |
| rename   | 파일 혹은 폴더명을 수정, 이동                          |
| !HOTFIX  | 치명적인 버그의 긴급한 수정                            |

<br />

## **6.구현된 기능**

- 입력페이지에서 로고 클릭시 예약확인 페이지로 이동(저장하지 않으면 페이지 이동 방법이 없어서 추가)
- 시간 선택 시 시는 00~23시 분은 5분 간격, 수업 시간은 40분으로 고정함.
- 시간 선택 후 여러개의 요일을 선택 시 같은 시간 선택 되어 진 요일들 전부 입력이 가능함
- 저장 된 수업 삭제시 바로 삭제가 아닌 선택확인 창을 한번 더 출력 하여 삭제 할 수 있게 함.
- 수업 일정이 없는 요일은 확인 페이지에서 보이지 않도록 비활성화 함.
- 이미 선택 되어 진 시간 선택 시 중복 확인하여 저장 불가하게 함.
- json-server 사용하여 백엔드와 함.
- 모바일 반응형

<br />

## **7. 발생 에러**

- AM에서 PM으로 넘어 갈 때 01:00 형태가 아닌 13:00의 형태로 저장되어 지는 것을 확인하여 다음과 같이 로직을 수정함

```
// 12시 40분 시작 13시 20분 종료 로직 
export const getClassEndTime = (startTime: { hour: number; minute: number }) => {
    const endMinute = startTime.minute + CLASS_DURATION;
    if (endMinute >= 60) {
        return { hour: startTime.hour + 1, minute: endMinute % 60 };
    }
    return { hour: startTime.hour, minute: endMinute };
};

// 12시 40분 시작 1시 20분 종료 로직
export const getClassEndTime = (startTime: { hour: number; minute: number }) => {
    const endMinute = startTime.minute + CLASS_DURATION;

    if (endMinute >= 60) {
        const endHour = startTime.hour + 1;
        return { hour: endHour > 12 ? 1 : endHour, minute: endMinute % 60 };
    }
    return { hour: startTime.hour, minute: endMinute };
};
 ```   

<br />

## **8. 시간이 더 있으면 넣고 싶었던 기능**
- 로그인 페이지는 구성하여 로그인 하는 아이디에 따라 다른 예약확인 하는 페이지 구현 프론트엔드의 과제이다 보니 
데이터모델링보다 기능 구현에 힘쓴 편이었으나 시간이 더 있다면 모델링도 구현해보고 싶은 기능임.
구현 할 수 있는 방법은 백엔드의 데이터 모델링 하는 방법을 구글링을 통해 검색 한 후 비슷한 예제를 찾아 적용을 해볼 수 있음.
- 테스트 코드 작성. 아직 사용 해본 적이 없어서 기한 내에 끝내기에는 어려움이 있어보여 기능에 넣지 않음.
추 후 테스트코드에 대해 스터디 후 사용 할 정도의 지식을 습득 한 후 적용해 볼 수 있음.

<br />

## **9. 프로젝트 설치 · 실행 방법**

### # 프로젝트 클론

```
$ git clone https://github.com/Wanted-Pre-Onboarding-Team1/Engall_Schedule
```

### # 패키지 설치

```
$ yarn add
```

### # develop 서버 실행

```
$ yarn start
```

### # branch에서 작업

```
$ git checkout -b feature/page
```
