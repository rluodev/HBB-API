export const required = ["firstName", "rejectReason", "uuid"];

export const template = ({ firstName, rejectReason, uuid }) => `Hello ${firstName}, <br/><br/> Unfortunately, your application has been rejected for the following reason:
<br/>
<br/>
<blockquote> ${rejectReason} </blockquote>
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
<small>If you would like to remove your contact information from our list, please visit <a href="https://hackbackbetter.live/cancelReg?regID=${uuid}">this link</a>.</small>`;

export const text = ({ firstName, rejectReason, uuid }) => `Hello ${firstName},

Unfortunately, your application has been rejected for the following reason:

${rejectReason}

Best,
Ruien & the HackBackBetter team
-----
We value your privacy and will never track whether you read or open our emails.
If you would like to remove your contact information from our list, please go to https://hackbackbetter.live/cancelReg?regID=${uuid}.`;

export const subject = () => `[IMPORTANT] Application rejected | HackBackBetter 2023`;

export default { template, subject, text, required }
