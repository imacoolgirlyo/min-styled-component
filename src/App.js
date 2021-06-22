import React from 'react'

function App () {
  const styled = {
    div: (styles, ...values) => {
      console.log(styles)
      const styleStrings = styles.reduce((accum, curStyle, i) => {
        accum.push(curStyle)
        if (values[i]) {
          accum.push(values[i].toString())
        }
        return accum
      }, [])

      // styleStrings.join('')

      return function NewComponent (props) {
        // const className = 'abc'
        // className을 주입해주고
        // html style tag에 해당 style을 추가해줌
        // https://medium.com/@_jmoller/how-does-styled-components-work-under-the-hood-28cb035d48c6
        return <div styles={styleStrings.join('')}>{props.children}</div>
      }
    }
  }

  const fakeColor = 'blue'

  // const Nav = styled.div`
  //   color: ${fakeColor};
  //   background-color: red;
  //   border-radius: ${1}px;
  // `

  // console.log(styled.div`
  //   color: ${fakeColor};
  //   background-color: red;
  //   font-weight: 400;
  // `)

  const StyledDIV = styled.div`
    color: ${fakeColor};
    background-color: red;
    font-weight: 400;
  `

  return <StyledDIV>min styled component</StyledDIV>
}

export default App
