# 📸 oooifram 을 소개합니다!
> 사진과 글을 하나의 순간으로 기록하는 SNS

<br/>

## 📖 개요

* X(트위터)나 인스타그램과 유사한 **소셜 미디어 피드 서비스**를 구현했습니다.
* 사용자는 게시물을 확인하고, 좋아요/리트윗/댓글 같은 상호작용을 할 수 있으며, 친구 목록과 메시지를 관리할 수 있습니다.

<br/>

## ⚙️ 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# http://localhost:3000 접속
```

<br/>

## 🛠 기술 스택 및 선택 이유

* **Next.js (App Router)** : React 기반의 최신 풀스택 프레임워크, 라우팅 및 서버사이드 렌더링 지원
* **TypeScript** : 정적 타입 검사로 안정성과 유지보수성 향상
* **Tailwind CSS** : 유틸리티 기반 CSS로 빠른 UI 개발
* **Zustand** : 전역 상태 관리 (유저 Store, 친구 목록 Store, 포스트 Store)
* **Framer Motion** : 댓글, 모달 등 애니메이션 효과 구현
* **Lucide Icons** : 직관적인 아이콘 사용
* **Next/Image** : 이미지 최적화 및 반응형 처리

<br/>

## 📂 디렉토리 구조 (간략)

```
app/                       # Next.js App Router 기반
 ├─ (home)/contents/       # 메인 피드 페이지
 │   └─ feed.tsx
 ├─ (create)/create/       # 게시물 작성 페이지
 │   └─ page.tsx
 ├─ (friends)/friends/     # 친구 목록 / 검색 / 요청 페이지
 │   └─ page.tsx
 ├─ (messages)/messages/   # 채팅 페이지
 │   ├─ page.tsx           # 채팅 목록
 │   └─ detail/page.tsx    # 채팅 상세
 ├─ (profile)/profile/     # 마이페이지
 │   └─ page.tsx
 ├─ (settings)/settings/   # 설정 페이지
 │   └─ page.tsx
 ├─ not-found.tsx          # 404 페이지
 └─ layout.tsx             # 전체 레이아웃

components/                # UI 컴포넌트
 ├─ card/                  # 카드형 컴포넌트 (게시물 카드 등)
 ├─ loading/               # 로딩/스켈레톤 컴포넌트
 ├─ modal/                 # 모달 컴포넌트
 └─ searchbar.tsx          # 검색창 컴포넌트

data/                      # 더미 데이터, mock 데이터
hooks/                     # 커스텀 훅
store/                     # Zustand 상태 관리 (유저, 친구, 포스트 등)
types/                     # 타입 정의 (Post, User, Message 등)
utils/                     # 유틸 함수 (시간 포맷, 상태 색상 등)

public/                    # 정적 리소스 (이미지, 아이콘 등)

```

<br/>

## 📑 구현 기능 목록

### 1. 전체 공통

* 반응형 UI (모바일/데스크탑 대응)
* 이미지 최적화 (Next.js Image 활용)
* 404 Page 구현
* `metadata` 추가 및 favicon 변경

<p align="start">
  <img src="https://github.com/user-attachments/assets/1c68b551-5eb1-46a0-b9cc-9a2931a3f5cb" alt="feed-example" height="400" />
  <img src="https://github.com/user-attachments/assets/9277f8f7-08a1-4255-8a5c-b0141df3947d" alt="feed-mobile" height="400" />
</p>

<br/>

### 2. 게시물 피드 (`/`)

* 무한 스크롤 게시물 리스트
* 스켈레톤 로딩 UI
* 게시물 카드
  * 작성자 프로필, 닉네임, 인증 마크
  * 게시물 내용 (텍스트, 이미지, 카테고리)
  * 상대적 작성시간 (예: "1시간 전")
  * 우측 상단 도트메뉴 (본인 게시물일 경우에만 노출 및 삭제 가능)
* 상호작용
  * 좋아요 (토글 + 카운트 반영)
  * 리트윗 (토글 + 카운트 반영)
  * 댓글 개수 표시 + 댓글 영역 토글
  * 댓글 더보기 버튼 (남은 댓글 수 표시)
* 해시태그 하이라이팅

<p align="start">
  <img src="https://github.com/user-attachments/assets/8e8f8a77-bdbf-4b7f-b819-af958905d90b" alt="feed-example" height="400" />
  <img src="https://github.com/user-attachments/assets/13156504-ea53-437e-a927-c1ff75ae8b96" alt="feed-mobile" height="400" />
</p>

<br/>

### 3. 게시물 작성 (`/create`)

* 게시물 작성 페이지
* 텍스트 입력 (최대 280자, 실시간 글자 수 카운트)
* 이미지 첨부 (미리보기, 최대 4장)
* 카테고리 선택 (1개)
* 작성 완료 시 피드에 반영

<p align="start">
  <img src="https://github.com/user-attachments/assets/e97afa3b-e2b4-4472-aaa6-009cce1fb17b" alt="feed-example" height="400" />
  <img src="https://github.com/user-attachments/assets/5b539079-d5c7-491c-92ed-4b9f14076600" alt="feed-mobile" height="400" />
</p>

<br/>

### 4. 친구 목록 및 추천 (`/friends`)

* 검색 기능 : 이름으로 친구 검색 가능
* 친구 Store 관리 (Zustand, persist 적용)
  * 친구 추가(팔로우) / 삭제(언팔로우)
* 친구 추천
  * 최대 3명씩 표시 (팔로우하면 추천 목록에서 제거 후 새 친구 채워짐)
  * Follow 시 → 친구 Store에 저장, 친구 목록에서 조회 가능
  * Unfollow 시 → 친구 Store에서 삭제

<p align="start">
  <img src="https://github.com/user-attachments/assets/8f6508d4-0dfb-482b-a168-4b3a52738611" alt="feed-example" height="400" />
  <img src="https://github.com/user-attachments/assets/1147e21b-202d-4076-b6fe-ce59a799c74d" alt="feed-mobile" height="400" />
</p>

<br/>

### 5. 메시지 (`/messages`)

* 메시지 목록
  * 상대 이름, 프로필, 상태 표시
  * 마지막 메시지 미리보기
  * 상대적 시간 표시
  * 검색 기능
* 메시지 상세 (채팅창)
  * 대화 내용 표시
  * 메시지 입력창 하단 고정
  * 실시간 입력 → 전송 시 채팅에 반영 (저장 X)

<p align="start">
  <img src="https://github.com/user-attachments/assets/5d18d6c7-f7a2-4ca1-9878-f6e22774dc1e" alt="feed-example" height="400" />
  <img src="https://github.com/user-attachments/assets/25170d40-0bbf-4a34-8c21-f45ec090d64e" alt="feed-mobile" height="400" />
</p>

<br/>

### 5. 마이페이지 (`/profile`)

* 본인 프로필 정보 표시
* 팔로워 및 팔로잉 수 표시
* 게시물 조회 (상세조회 x)
  
<p align="start">
  <img src="https://github.com/user-attachments/assets/5ed8adbd-b475-47e0-92c0-1d2ae3b0a44b" alt="feed-example" height="400" />
  <img src="https://github.com/user-attachments/assets/cdd99de5-bbe9-4b60-b45d-542f59d0d42b" alt="feed-mobile" height="400" />
</p>

<br/>
