# Uniswap - Swap 페이지 클로닝

DEMO: https://uniswap-clone-snowy.vercel.app/

## 기술 스택

- React (18.2.0)
- TypeScript
- Tailwind CSS
- Framer-motion
- vite

## 기능 구현

### Context api와 useReducer를 활용한 Drawer 상태 관리

`Navbar` 컴포넌트와 `Swap` 컴포넌트에서 `Drawer`의 상태가 필요하여, Props drilling을 피하고 상태 관리를 하기 위해 `Context api`와 `useReducer`를 사용하였습니다.

### 커스텀 훅

#### useClickOutside

모달과 드롭다운 컴포넌트 사용 시 외부 클릭을 감지하기 위해 `useEffect`와 `ref`를 사용해 커스텀 훅을 생성하였습니다. 이때, 컴포넌트가 언마운트될 시 부착된 이벤트 핸들러를 클린업하는 함수를 추가하였습니다.

#### useInput

`SwapInput`의 경우 인풋 값으로 숫자만 요구되는데, 이 동작을 구현하기 위해 `useInput` 훅을 생성하였습니다. 이때 숫자 유효성 검증은 정규식을 활용하였습니다.

#### useToggle

토글을 요하는 상태가 많아, 재사용성과 가독성을 위해 `useToggle` 훅을 생성하였습니다.

### 유틸 함수

#### calculatePrice

`SwapInput`의 인풋 값을 받아 선택된 토큰 가격의 크기를 비교하여, `bottomTokenPrice`를 계산하는 유틸 함수를 생성하였습니다.

### formatter & formatNumber

`Intl.NumberFormat`를 활용하여 천 단위에 콤마와 달러 사인을 추가하는 포맷터를 생성하였습니다.
또 `formatNumber` 유틸 함수를 생성하여 단위에 따라서 유닛(m, b, t)를 추가하도록 하였습니다.
