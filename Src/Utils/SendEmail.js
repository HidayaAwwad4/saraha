export async function sendEmail(to) {
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.EMAILSENDER,
            pass: process.env.PASSWORDSENDER,
        },
    });
    const info = await transporter.sendMail({
        from: `HISTA <${process.env.EMAILSENDER}>`,
        to,
        subject,
        html
    });
}