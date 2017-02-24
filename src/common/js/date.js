export function setDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes()
  }
  for (let k in obj) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = obj[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : zero(str))
    }
  }
  return fmt
}

function zero (str) {
  return ('00' + str).substr(str.length)
}
