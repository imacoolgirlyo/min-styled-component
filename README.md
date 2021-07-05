## Mini Styled component

- [x] styled 함수를 만들어서, div tag 인 경우 style을 추가해주자
- [x] props를 전달해서 conditional styles을 만들 수 있다.
- [ ] 모든 html tag에 style을 추가할 수 있다.

### 간단한 동작 순서

- `styled.h1('style strings')` styled.h1이라는 함수에 style strings들이 전달된다.
- styled.h1 내부에서는 먼저 이 style을 나타내는 class 이름을 만들기 위해 unique한 hash 값을 생성한다.
- CSS를 Stylis라는 CSS Preprocessor를 통해 실행시킨다.
- 새로 만든 CSS class를 page 내에 삽입한다. head 에 `<style></style>`로 추가되는데 classname에는 2번에서 생성한 unique hash 값을 사용한다.
- 컴포넌트는 이 classname을 사용하여 스타일을 적용시킨다.

* styled components는 Lazy CSS Injection을 사용하고 있기 때문에 실질적으로 컴포넌트가 rendering 될 때 Css style이 inject 된다.

### 참고

- [Demystifying styled-components](https://www.joshwcomeau.com/react/demystifying-styled-components/?ck_subscriber_id=887763118)
- [How styled-components works: A deep dive under the hood](https://medium.com/styled-components/how-styled-components-works-618a69970421)
- [How does styled-components work under the hood?](https://medium.com/@_jmoller/how-does-styled-components-work-under-the-hood-28cb035d48c6)
