import * as net from 'net'

const IP = '192.168.12.160'
const PORT = 9910

const client = new net.Socket()
client.connect(PORT, IP, function () {
  console.log('Connected')

  // Not sure how to connect to hologram fan
  client.write('0x7E')
  client.write('null,DataLength=0')
})

client.on('data', function (data) {
  console.log('data:: Received: ' + data)
  client.destroy() // kill client after server's response
})

client.on('readable', function (data) {
  console.log('readable:: Received: ' + data)
  client.destroy() // kill client after server's response
})

client.on('close', function () {
  console.log('Connection closed')
})
