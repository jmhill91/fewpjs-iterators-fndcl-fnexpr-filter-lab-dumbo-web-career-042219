// Code your solution here



const findMatching = (arr, string) => {
  let driver = arr.filter(s => {
    return s.toLowerCase() === string.toLowerCase()
  })
  return driver
}



const fuzzyMatch = (arr, string) => {
  let driver = arr.filter(s => {
    return s.startsWith(string)
  })
  return driver
}


const matchName = (arr, string) => {
  let driver = arr.filter(s => {
    return string === s.name
  })
  return driver
}
