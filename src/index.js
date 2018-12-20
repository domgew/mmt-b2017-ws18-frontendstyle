import './sass/style.scss'
// If you need images optimized that are not referenced in you source code, uncomment the following line:
// require.context("./images/", true, /\.(png|svg|jpg|gif)$/);

// example code
var message = 'Supports Babel!'
console.log(`Important message: ${message}`)

const babo = {
  isFunny: true,
  name: 'Tarik',
  weight: '120 kg'
}

console.log({ ...babo })
