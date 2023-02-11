const mail = require('@sendgrid/mail');

mail.setApiKey('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');

export default async (req, res) => {
    const { imePrezime, email, brojTel, adresa, napomena, proizvodi } = req.body;

    const data = {
        to: email,
        from: 'prodaja@odaberizdravlje.hr',
        subject: 'Prodaja',
        html: '<p>Dobio si mail sa stranice :) Cujemo se navecer</p>'
    }

    await mail.send(data)



    res.json({success: true});
}