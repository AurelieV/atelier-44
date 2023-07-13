export default (pageContext) => {
  const { urlOriginal } = pageContext
  return ['/'].includes(urlOriginal)
}
