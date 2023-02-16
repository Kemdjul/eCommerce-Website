import Logo from '../../assets/logo.png';

const mail = require('@sendgrid/mail');

mail.setApiKey('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');

export default async (req, res) => {
    const { _id, imePrezime, email, brojTel, adresa, napomena, proizvodi } = req.body;

    let ukupno = 0;

    proizvodi.map((proizvod) => {
        if (proizvod.cijenaSPopustom) {
            ukupno += proizvod.cijenaSPopustom * proizvod.quantity;
        } else {
            ukupno += proizvod.cijena * proizvod.quantity;
        }
    })

    const data = {
        to: email,
        from: 'prodaja@odaberizdravlje.hr',
        subject: 'Vaša Odaberi zdravlje narudžba je zaprimljena!',
        html: `<div className="flex flex-col justify-center items-center">
        <Image src=${Logo} alt="odaberi zdravlje logo.png" className="w-32" />
        <div className="w-[1000px] border-2 border-gray-400">
            <h4 className="text-5xl bg-primary w-full text-center text-white py-10">Hvala Vam na narudžbi</h4>
            <div className="px-8 py-10 flex flex-col gap-4 text-[#636363]">
                <p>Poštovanje ${imePrezime},</p>
                <p>Samo da vas obavijestimo — Vaša narudžba #${_id} je zaprimljena i trenutno se obrađuje:</p>
                <p>Plaćanje gotovinom prilikom dostave</p>
                <h5 className="text-2xl text-primary font-[600]">[Narudžba #${_id}] (12 veljače, 2023)</h5>
                <table className="grid px-4 py-1 flex flex-col">
                    <tr className="flex justify-between">
                        <th className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">Proizvod</th>
                        <th className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">Količina</th>
                        <th className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">Cijena</th>
                    </tr>
                    {proizvodi.map((proizvod) => (
                    <tr className="flex justify-between" key={proizvod._id}>
                        <td className="border-[1px] border-gray-400 h-full w-full px-2 py-1">{proizvod.naziv} {proizvod.velicina ? proizvod.velicina : ''} {proizvod.boja ? proizvod.boja : ''}</td>
                        <td className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">{proizvod.quantity}</td>
                        <td className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">{proizvod.cijenaSPopustom ? proizvod.cijenaSPopustom : proizvod.cijena}€</td>
                    </tr>
                    ))}
                    <tr className="flex justify-between">
                        <th className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">Dostava:</th>
                        <td className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">${ukupno < 70 ? '4,00 €' : '0,00 €'}</td>
                    </tr>
                    <tr className="flex justify-between">
                        <th className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">Način plaćanja:</th>
                        <td className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">Platiti pouzećem</td>
                    </tr>
                    <tr className="flex justify-between">
                        <th className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">Ukupno:</th>
                        <td className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">${ukupno}€</td>
                    </tr>
                    <tr className="flex justify-between">
                        <th className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center text-primary text-2xl">Adresa za naplatu</th>
                        <th className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center text-primary text-2xl">Adresa za dostavu</th>
                    </tr>
                    <tr className="flex justify-between">
                        <td className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">
                            <p>${imePrezime}</p>
                            <p>${adresa}</p>
                            <p>${brojTel}</p>
                            <p>${email}</p>
                        </td>
                        <td className="border-[1px] border-gray-400 h-full w-full px-2 py-1 text-center">
                            <p>${imePrezime}</p>
                            <p>${adresa}</p>
                            <p>${brojTel}</p>
                            <p>${email}</p>
                        </td>
                    </tr>
                </table>

                <p>Hvala što koristite odaberizdravlje.hr!</p>
            </div>
        </div>
    </div>`
    }

    await mail.send(data)


 
    res.json({success: true});
}