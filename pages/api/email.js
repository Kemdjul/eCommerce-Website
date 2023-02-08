const mail = require('@sendgrid/mail');

mail.setApiKey('process.env.NEXT_PUBLIC_SENGRID_API_KEY');

export default (req, res) => {
    const body = JSON.parse(req.body);
    
    const message = `
    Name: ${body.ime + body.prezime}\r\n
    Email: ${body.email}\r\n
    Message: Pozdrav brate
    `;

    const data = {
        to: 'kemalasanov25@gmail.com',
        from: 'prodaja@odaberizdravlje.hr',
        subject: 'Pozz',
        text: message,
        html: message.replace(/\r\b/g, '<br>')
    }

    mail.send(data);

    res.status('200').json({ status: 'Ok' })
}