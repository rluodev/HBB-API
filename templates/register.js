export const required = ["firstName", "uuid"];

export const template = ({ firstName, uuid }) => `Thanks for registering, ${firstName}! <br/><br/> Due to capacity restrictions, we're waitlisting registrants. We'll email you when/if we have available capacity. In the meantime, join our <a href="https://discord.hackbackbetter.live">Discord server</a>!
<br/>
<br/>
Best,
<br/>
Ruien & the HackBackBetter Team
<br/>
<br/>
<a href="https://hackbackbetter.live">
<img src="https://cdn.hackbackbetter.live/logo-full-light.png" width="100px" />
</a>
<br/>
<br/>
<small>We value your privacy and will never track whether you read or open our emails.</small>
<small>If you would like to cancel your registration and be removed from receiving further updates, please visit <a href="https://hackbackbetter.live/cancelReg?regID=${uuid}">this link</a>.</small>`;

export const text = ({ firstName, uuid }) => `Thanks for registering, ${firstName}!

Due to capacity restrictions, we're waitlisting registrants. We'll email you when/if we have available capacity. In the meantime, join our Discord server (https://discord.hackbackbetter.live)!
Best,
Ruien & the HackBackBetter team
-----
We value your privacy and will never track whether you read or open our emails.
If you would like to cancel your registration and be removed from receiving further updates, please go to https://hackbackbetter.live/cancelReg?regID=${uuid}.`;

export const subject = () => `Thanks for registering for HackBackBetter 2023!`;

export default { template, subject, text, required }
