import React, { useEffect, useRef, useState } from 'react'

function App () {
  const [isClicked, setIsClicked] = useState(false)
  const styled = {
    div: (styles, ...values) => {
      return function NewComponent (props) {
        const styleStrings = styles.reduce((accum, curStyle, i) => {
          accum.push(curStyle)
          // console.log(values)
          if (values[i]) {
            const isFunc = typeof values[i] === 'function'
            const value = isFunc ? values[i](props) : values[i]
            // console.log(value)
            accum.push(value.toString())
          }

          return accum
        }, [])

        const divRef = useRef(null)

        useEffect(() => {
          divRef.current.setAttribute('style', styleStrings.join(''))
        }, [styleStrings])
        return <div ref={divRef} {...props} />
      }
    }
  }

  const fakeColor = 'yellow'

  const StyledDIV = styled.div`
    width: 100px;
    color: ${props => (props.isClicked ? 'blue' : 'red')};
    background-color: ${fakeColor};
    border-radius: 5px;
    font-weight: 400;
    cursor: pointer;
  `

  return (
    <StyledDIV onClick={() => setIsClicked(st => !st)} isClicked={isClicked}>
      min styled component
    </StyledDIV>
  )
}

export default App
