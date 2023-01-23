export const required = ["firstName"];

export const template = ({ firstName }) => `Thanks for registering, ${firstName}! <br/><br/> We'll reach out to you soon to sign the event liability waiver. In the meantime, join our <a href="https://discord.hackbackbetter.live>Discord server</a>!
<br/>
<br/>
Best,
<br/>
Ruien & the HackBackBetter Team
<br/>
<a href="https://hackbackbetter.live">
<img src="https://cdn.hackbackbetter.live/logo-full-light.png" width="300" />
</a>
<br/>
<br/>
<small>We value your privacy and we'll never track whether you read or open our emails.</small>`;

export const text = ({ firstName }) => `Thanks for registering, ${firstName}!

We'll reach out to you soon to sign the event liability waiver. In the meantime, join our Discord server (https://discord.hackbackbetter.live)!
Best,
Ruien & the HackBackBetter team
-----
We value your privacy and we'll never track whether you read or open our emails.`;

export const subject = () => `Thanks for registering for HackBackBetter 2023!`;

export default { template, subject, text, required }
