import nodemailer from 'nodemailer';
import express from 'express';
import dotenv from 'dotenv';
import crypto from 'crypto';
import fetch from 'node-fetch';
import cors from 'cors';
/*const nodemailer = require('nodemailer')
const express = require('express')
const dotenv = require('dotenv')
const crypto = require('crypto')
const fetch = require('node-fetch')
const cors = require('cors')*/

dotenv.config(process.env.ENV_PATH ? {path:process.env.ENV_PATH} : undefined)


import { exec } from 'child_process';
import { runInThisContext } from 'vm';
import { create } from 'domain';
import { readdirSync } from 'fs';
/*const { exec } = require('child_process')
const { runInThisContext } = require('vm')
const { create } = require('domain')
const { readdirSync } = require('fs')*/

const config = {
    accountName: 'HackBackBetter',
    accountEmail: 'noreply@hackbackbetter.live',
    accountPassword: process.env.EMAIL_PASSWORD,
    mailServer: {
        host: 'mail.hackbackbetter.live',
        post: 465,
        secure: true
    },
    replyTo: 'info@hackbackbetter.live',
    messages: {}
}

const transporter = nodemailer.createTransport({
    auth: {
        user: config.accountEmail,
        pass: config.accountPassword
    },
    ...config.mailServer
})

async function send (data, { template, subject, text }) {
    let info = await transporter.sendMail({
        from: `"${config.accountName}" <${config.accountEmail}>`,
        to: data.email, // list of receivers
        subject: subject(),
        text: text(data),
        html: template(data),
        replyTo: config.replyTo
    });
    return info;
}

const app = express();
app.use(express.json({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hi there! I\'m the HackBackBetter Mailroom. I power all of our email services, like our mailing list, registrations, and forms verification.');
});
app.get('//', (req, res) => {
    res.send('Hi there! I\'m the HackBackBetter Mailroom. I power all of our email services, like our mailing list, registrations, and forms verification.');
});

app.use('//v1/authed', (req, res, next) => {
    const auth = req.header('Authorization');
    const valid = auth?.startsWith('Bearer hoc-m-') && ('HOC-M-' + crypto.createHash('sha512').update(auth.substring(13)).digest('hex')).toUpperCase() == 'HOC-M-BF12DDF078949BA5AC196FFF7D63F4EA2EE3065E09C4C1B6C7505C7C991D857E04373731A5E1D02966CF5DD006312FD8CD835BCCCEA3C69881837E2BBB080C83';
    if (!valid) return res.status(401).send('Unauthorized');
    next();
});

app.get('//v1/authed', (req, res) => {
    res.send('Authed');
});

app.get('//v1/authed/templates', (req, res) => {
	res.json(Object.keys(config.messages));
});

app.get('//v1/authed/templates/:template', (req, res) => {
	const { template } = req.params;
	if (!config.messages[template]) return res.json({ error: "Template not found" });

	return res.json({ required: config.messages[template].required });
});

app.post('//v1/authed/deliver/:message', async (req, res) => {
    const { message } = req.params;
    if (!config.messages[message]) return res.status(404).send('Message not found');
    const template = config.messages[message];
    const { data } = req.body;
    if (!data) return res.status(400).send('Missing "data" property on JSON');
    const results = await send(data, template);
    res.json(results);
});

app.get('//v1/unauthed', (req, res) => {
    res.send('No authentication needed.');
});

app.get('//v1/unauthed/subscribe/webhook', async (req, res) => {
    /*
    const response = await fetch('https://api.airtable.com/v0/tblqroLcEaTDlhdtc/Emails?maxRecords=3&view=Grid%20view&sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=100&pageSize=100', {
        headers: {
            Authorization: 'Bearer ' + process.env.AIRTABLE_KEY
        }
    });
    const { records } = await response.json();
    let emailsSent = 0;
    for (const record of records.filter(record => !record?.fields?.Notification)) {
        const email = record?.fields?.Email;
        const id = record?.id;
        try {
            await send({ email }, config.messages.subscribe);
            emailsSent += 1;
            const output = await fetch('https://api.airtable.com/v0/tblqroLcEaTDlhdtc/Emails', {
                method: 'PATCH',
                headers: {
                    Authorization: 'Bearer ' + process.env.AIRTABLE_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: [
                        {
                            id,
                            fields: {
                                Notification: true
                            }
                        }
                    ]
                })
            });
            await output.json();
        } catch (err) {
            console.error(err);
        }
    }
    res.send(`${emailsSent} email(s) sent out.`);
    */
   res.send("This webhook is not working.");
});

app.get('//v1/webhook', (req, res) => {
    res.redirect(`http://api.hackbackbetter.live/mail/v1/unauthed/subscribe/webhook`);
});

(async () => {
    const templates = readdirSync('./templates').filter(template => template.endsWith('.js'));
    for (const template of templates) {
        config.messages[template.substring(0, template.length - 3)] = await import('./templates/' + template);
    }
    app.listen(process.env.PORT ?? 8081, () => {
        console.log(`Listening on *:${process.env.PORT ?? 8081}`);
    });
})();