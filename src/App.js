import React from 'react'

function App () {
  const styled = {
    div: (styles, ...values) => {
      const styleStrings = styles.reduce((accum, curStyle, i) => {
        accum.push(curStyle)
        if (values[i]) {
          accum.push(values[i].toString())
        }
        return accum
      }, [])

      // styleStrings.join('')

      return function NewComponent (props) {
        const className = 'abc'
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
