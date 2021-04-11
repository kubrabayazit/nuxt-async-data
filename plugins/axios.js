export default function ({$axios}) {
  $axios.setHeader('AUTHORISATION', 'test')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
