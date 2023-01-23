export const required = ["firstName", "imageLink"];

export const template = ({ firstName, imageLink }) => `A HackBackBetter ticket for ${firstName} has appeared! Your submitted forms have been verified.
<br/>
<br/>
<center>
<img src="${imageLink}" style="width: 500px; max-width: 100%;" />
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
<a href="https://hackbackbetter.live">
<img src="https://cdn.hackbackbetter.live/logo-full-light.png" width="100" />
</a>
<br/>
<br/>
<small>We value your privacy and we'll never track whether you read or open our emails.</small>`;


export const text = ({ firstName, imageLink }) => `A HackBackBetter ticket for ${firstName} has appeared! Your submitted forms have been verified.

You can download it here: ${imageLink}
This is your ticket, ${firstName}. Don't share it with anyone else!

You'll use this ticket to get into the event, so we recomend you take a screenshot or save the image.


Cheers,
Ruien & the HackBackBetter team

-----
We value your privacy and we'll never track whether you read or open our emails.`;

export const subject = () => `Your HackbackBetter ticket is here!`;


export default { template, subject, text, required }
