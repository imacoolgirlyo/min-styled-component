function App () {
  const styled = {
    div: (styles, ...values) => {
      console.log(styles)
      console.log(values)
      const evaluted = styles.reduce((acc, curStr, i) => {
        acc.push(curStr)
        if (values[i]) {
          acc.push(values[i].toString())
        }
        return acc
      }, [])
      console.log(evaluted)
      console.log(evaluted.join(''))
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

  return <div className='App'>min styled component</div>
}

export default App
