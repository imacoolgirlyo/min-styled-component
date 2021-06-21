### Tagged template literal

```js
  function`your template ${foo}`
```

- tagged template literal이며, 첫번째 argument로 모든 string character들의 array를 받음
- 남는 argument들은 string interpolation으로 받는 값들과 일치한다.

```js
function taggedTemplate (strings, arg1, arg2, arg3, arg4) {
  console.log(strings) // [a, b, c, '']
  console.log(arg1, arg2, arg3, arg4) // 1,2,3, undefined
}

taggedTemplate`a${1}b${2}c${3}`
```

- [링크](https://stackoverflow.com/questions/29660381/backticks-calling-a-function)
