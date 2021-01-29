// import styled from 'styled-component'

// const Nav = styled.div`
//   color: #000;
//   background-color: ${red};
// `

// str ['color: #000;\n', ...]

const styled = {
  div: (styles, ...values) => {
    console.log(styles)
    console.log(values)
    // const evaluted = styles.reduce((acc, curStr, i) => {

    // }, [])
  }
}

const fakeColor = 'red'

// const Nav = styled.div`
//   color: ${fakeColor};
//   background-color: red;
//   border-radius: ${1}px;
// `

console.log(styled.div`
  color: ${fakeColor};
  background-color: red;
  border-radius: ${1}px;
`)
