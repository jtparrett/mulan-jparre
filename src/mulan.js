export const renderNode = (el, template) => {
  el.innerHTML = template(el).replace(/undefined/g, '')
  return el.childNodes
}

export const encode = (data) => encodeURIComponent(JSON.stringify(data))

export const decode = (data) => JSON.parse(decodeURIComponent(data))