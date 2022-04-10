const errorHandler = (err) => {
  if (err.errors !== undefined) {
    let arr = []
    Object.values(err.errors).forEach((elem) => {
      arr.push(elem.msg)
    })
    return arr
  } else {
    return [err.msg]
  }
}

export default errorHandler
