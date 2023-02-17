export const required = ["contactName", "companyName", "lead", "yourFirstName", "yourFullName", "yourSchool"];

export const template = ({ contactName, companyName, lead, yourFirstName, yourFullName, yourSchool }) => `<div style="font-size: 10pt; font-family: Verdana,Geneva,sans-serif">
<p><span style="font-weight: 400">Hi ${contactName}</span><span style="font-weight: 400">!</span></p>
<p><span style="font-weight: 400">My name is </span><span style="font-weight: 400">${yourFirstName}</span><span style="font-weight: 400">, and I’m a </span><span style="font-weight: 400">${yourSchool}</span><span style="font-weight: 400"> student. I wanted to reach out to see if </span><span style="font-weight: 400">${companyName}</span><span style="font-weight: 400"> would be interested in helping to sponsor HackBackBetter, a nonprofit community-based hackathon in the Bay Area aimed at inspiring local youth and increasing diversity in STEM, in April of this year. Our website is at </span><a href="https://hackbackbetter.live/" target="_blank" rel="noreferrer"><span style="font-weight: 400">https://hackbackbetter.live/</span></a><span style="font-weight: 400">. We’ve partnered with a local 501(c)3 nonprofit, CompassPoint Mentorship, to bring our hackathon to local underrepresented/underserved communities.</span></p>
<p><span style="font-weight: 400">Our mission is to use hackathons to inspire people to code and join the field of STEM. Ever since I touched my first piece of code, I’ve wanted to find ways to network and collaborate with other programmers. However, hackathons weren’t an option for me because of the high barriers to entry in terms of money and skill. With this hackathon, we want to provide an opportunity for students interested in CS to experience a real-life programming environment.</span></p>
<p><span style="font-weight: 400">However, a few of our contingencies are that we, as high schoolers, don’t have access to a large enough space to host the hackathon and that we do not have sufficient funding. To make sure that our hackathon goes off without a hitch, we’ll need financial resources. Would you be able to help us with this?</span></p>
<p><span style="font-weight: 400">Best Regards,</span><span style="font-weight: 400"><br></span><span style="font-weight: 400">${yourFullName}</span><span style="font-weight: 400"><br></span><span style="font-weight: 400">${lead}Organizer @ HackBackBetter</span></p>
<p><span style="font-weight: 400">P.S. Our sponsorship prospectus is available </span><a href="https://hackbackbetter.live/prospectus" target="_blank" rel="noreferrer"><span style="font-weight: 400">here</span></a><span style="font-weight: 400"> if you'd like to take a look. Please send an email my way if you have any questions or would like to discuss further the possibility of a sponsorship!</span></p>

</div>`;

export const text = ({ contactName, companyName, lead, yourFirstName, yourFullName, yourSchool }) => `Hi ${contactName}! 

My name is ${yourFirstName}, and I'm a ${yourSchool} student. I wanted to reach out to see if ${companyName} would be interested in helping to sponsor HackBackBetter, a nonprofit community-based hackathon in the Bay Area aimed at inspiring local youth and increasing diversity in STEM, in April of this year. Our website is at https://hackbackbetter.live/ [1]. We've partnered with a local 501(c)3 nonprofit, CompassPoint Mentorship, to bring our hackathon to local underrepresented/underserved communities. 

Our mission is to use hackathons to inspire people to code and join the field of STEM. Ever since I touched my first piece of code, I've wanted to find ways to network and collaborate with other programmers. However, hackathons weren't an option for me because of the high barriers to entry in terms of money and skill. With this hackathon, we want to provide an opportunity for students interested in CS to experience a real-life programming environment. 

However, a few of our contingencies are that we, as high schoolers, don't have access to a large enough space to host the hackathon and that we do not have sufficient funding. To make sure that our hackathon goes off without a hitch, we'll need financial resources. Would you be able to help us with this? 

Best Regards,
${yourFullName}
${lead}Organizer @ HackBackBetter 

P.S. Our sponsorship prospectus is available here [2] if you'd like to take a look. Please send an email my way if you have any questions or would like to discuss further the possibility of a sponsorship! 

Links:
------
[1] https://hackbackbetter.live/
[2] https://hackbackbetter.live/prospectus`;

export const subject = ({ companyName }) => `${companyName} x HackBackBetter?`;

export default { template, subject, text, required }
