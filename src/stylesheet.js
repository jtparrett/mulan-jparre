const rootStyles = document.createElement('style')
let selectorIndex = 0

document.head.appendChild(rootStyles)

export default (styles) => {
  return Object.keys(styles).reduce((classes, key) => {
    if(key === '@global'){
      Object.keys(styles[key]).map((k) => {
        rootStyles.innerHTML += `${k}{${styles[key][k]}}`
      })
      return classes
    }
    
    const className = `s${selectorIndex}`
    classes[key] = className
    rootStyles.innerHTML += `.${className}{${styles[key]}}`
    selectorIndex++

    return classes
  }, {})
}