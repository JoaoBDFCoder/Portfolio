const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express()
app.use(bodyParser.json());
const port = process.env.PORT || 3030;

app.post('/api/send-email', (req, res) => {

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d636b022b358a1",
      pass: "1c8d807becd9a6"
    }
  });

  const { from, to, subject, text, html } = req.body;
  const mailOptions = {
    from,
    to,
    subject,
    text,
    html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ mensagem: 'Ocorreu um erro ao enviar o e-mail' });
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.json({ message: 'E-mail enviado com sucesso' })
    }
  });
});

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))