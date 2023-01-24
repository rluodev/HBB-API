import crypto from 'crypto';

export const required = ["email"];

export const template = ({ email }) => `Thanks for subscribing to HackBackBetter! Our registrations are open, and you can visit <a href="https://hackbackbetter.live/register">this link</a> to register. You can also <a href="https://discord.hackbackbetter.live/">join our Discord server</a> and chat with other participants.
<br/>
<br/>
Best,
<br/>
The HackBackBetter team
<br/>
<br/>
<a href="https://hackbackbetter.live">
<img src="https://cdn.hackbackbetter.live/logo-full-light.png" width="100" />
</a>
<br/>
<br/>
<small>We value your privacy and will never track whether you read or open our emails.<br /><a href="https://hackbackbetter.live/unsubscribe/">Unsubscribe</a></small>`;


export const text = ({ email }) => `Thanks for subscribing to HackBackBetter! We're almost ready to open up registrations, so expect an email from us in the near future. For now, you can join our Discord server (https://discord.hackbackbetter.live/) and chat with other participants.

Best,

Ruien & the HackBackBetter team

-----
We value your privacy and will never track whether you read or open our emails.
Unsubscribe: https://hackbackbetter.live/unsubscribe/`;


export const subject = () => `An epic return is brewing in San Jose!`;


export default { template, subject, text, required }
