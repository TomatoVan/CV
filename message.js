const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
// create reusable transporter object using the default SMTP transport
const nodemailer = require('nodemailer')

let port = process.env.PORT || 3000
let smtp_login = process.env.SMTP_LOGIN || '---'
let smtp_password = process.env.SMTP_PASSWORD || '---'

app.use(cors({ origin: 'https://tomatovan.github.io/CV' }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: smtp_login, // generated ethereal user
    pass: smtp_password, // generated ethereal password
  },
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/sendMessage', async (req, res) => {
  let { name, email, message } = req.body.data

  console.log(res.body)

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    to: '<tomatovan13@gmail.com>', // list of receivers
    subject: 'Message from CV form ✔', // Subject line
    html: `<b>Letter from CV:</b>
	<div>name: ${name}</div>
	<div>contacts: ${email}</div>
	<div>message: ${message}</div>`,
  })

  console.log(info)
})

app.listen(port, () => {
  console.log(`Example app listening!, ${port}`)
})
