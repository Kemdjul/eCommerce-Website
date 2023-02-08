const mail = require('@sendgrid/mail');

mail.setApiKey(`${process.env.NEXT_PUBLIC_SENGRID_API_KEY}`);

export default (req, res) => {
    const body = JSON.parse(req.body);

    const data = {
        to: 'kemalasanov25@gmail.com',
        from: 'prodaja@odaberizdravlje.hr',
        subject: 'Pozz',
        text: 'Pozdrav brate',
        html: '<p>Pozdrav brate</p>'
    }

    mail.send(data)
        .then(() => console.log('Email sent'))
        .catch((error) => console.error(error))

    res.status('200').json({ status: 'Ok' })
}