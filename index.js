(async function () {
  const { count, add } = await import('./num.js')
  console.log(count)
  add()
  console.log(count)
})()