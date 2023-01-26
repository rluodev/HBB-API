export const required = ["firstName", "uuid"];

export const template = ({ firstName, uuid }) => `A HackBackBetter ticket for ${firstName} has appeared! Your submitted forms have been verified.
<br/>
<br/>
<center>
<img src="https://quickchart.io/qr?text=${uuid}4&light=1e1682&dark=ca0e40&ecLevel=Q&size=300&centerImageUrl=https://cdn.hackbackbetter.live/small-logo.png" style="width: 300px; max-width: 100%;" />
<br />
<small>This is your ticket, ${firstName}. Don't share it with anyone else!</small>
</center>
<br/>
<br/>
You'll use this ticket to get into the event, so we recomend you take a screenshot or save the image.
<br/>
<br/>
Best,
<br/>
Ruien & the HackBackBetter team
<br/>
<br/>
<a href="https://hackbackbetter.live">
<img src="https://cdn.hackbackbetter.live/logo-full-light.png" width="100" />
</a>
<br/>
<br/>
<small>We value your privacy and will never track whether you read or open our emails.</small>
<small>If you would like to cancel your registration and be removed from receiving further updates, please visit <a href="https://hackbackbetter.live/cancelReg?regID=${uuid}">this link</a>. Note that this will invalidate your ticket.</small>`;


export const text = ({ firstName, uuid }) => `A HackBackBetter ticket for ${firstName} has appeared! Your submitted forms have been verified.

You can download it here: https://quickchart.io/qr?text=${uuid}4&light=1e1682&dark=ca0e40&ecLevel=Q&size=300&centerImageUrl=https://cdn.hackbackbetter.live/small-logo.png
This is your ticket, ${firstName}. Don't share it with anyone else!

You'll use this ticket to get into the event, so we recomend you take a screenshot or save the image.


Cheers,
Ruien & the HackBackBetter team

-----
We value your privacy and will never track whether you read or open our emails.
If you would like to cancel your registration and be removed from receiving further updates, please go to https://hackbackbetter.live/cancelReg?regID=${uuid}. Note that this will invalidate your ticket.`;

export const subject = () => `Your HackbackBetter ticket is here!`;


export default { template, subject, text, required }
