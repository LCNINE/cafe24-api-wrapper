export function queryMapToString(queryMap: Map<string, string|number|string[]|number[]>) {
  if (queryMap.size === 0) return ""
  let pairs: string[] = []
  queryMap.forEach((value, key) => {
    if (Array.isArray(value)) {
      pairs.push(`${key}=${value.join(",")}`)
    }
    else {
      pairs.push(`${key}=${value}`)
    }
  })
  return "?" + pairs.join("&")
}