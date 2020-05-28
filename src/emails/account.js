const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arpitdalalm@gmail.com',
        subject: 'Welcome to Task manager application',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arpitdalalm@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}. Let us know if we could have done anything better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}