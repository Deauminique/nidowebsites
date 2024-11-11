const { PrismaClient } = require('@prisma/client');
const sgMail = require('@sendgrid/mail');

const prisma = new PrismaClient();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // Send email notification
    const msg = {
      to: process.env.CONTACT_FORM_EMAIL,
      from: process.env.SENDGRID_VERIFIED_SENDER || process.env.CONTACT_FORM_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await sgMail.send(msg);

    res.status(201).json({
      status: 'success',
      data: {
        submission,
      },
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Er is een fout opgetreden bij het versturen van het formulier.',
    });
  }
};

exports.getContactSubmissions = async (req, res) => {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({
      status: 'success',
      data: {
        submissions,
      },
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      status: 'error',
      message: 'Er is een fout opgetreden bij het ophalen van de berichten.',
    });
  }
};
