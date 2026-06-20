// ─── Project Decibel — Site Config ───────────────────────────────────────────
// Edit this file to update site-wide settings without touching page code.

export const config = {
  // Contact
  email: "drjenna.projectdecibel@gmail.com",
  emailSubjectAppointment: "Appointment Request",
  emailSubjectGeneral: "Question",
  // Contact form — get a free access key at web3forms.com; submissions email to the address above
  formAccessKey: "214532da-fdb5-4ffb-a38e-e454874769c5",

  // Booking links (Cal.com)
  bookingConcierge: "https://cal.com/projectdecibel/pdb-concierge-appointment",
  bookingClinic: "https://cal.com/projectdecibel/clinic-appt", // Friday afternoons, through September

  // Location
  location: "Denver, CO",

  // Availability note (shown in header banner + footer)
  availability: "Concierge appointments Wednesday and Friday afternoons. Email replies on Wednesdays and Fridays.",

  // Site metadata
  siteName: "Project Decibel",
  tagline: "Save Your Ears.",
  description: "A concierge audiology practice specializing in hearing loss prevention and custom-fit ear gear.",

  // Pricing — à la carte
  pricing: {
    pdbPackage: 425,
    earImpressions: 250,
    filteredEarplugs: 215,
    sleepPlugs: 150,
    waxRemovalPerEar: 50,
    conciergeWithinDenver: 150,
  },

  // Group discount (5+ people)
  groupDiscount: 0.20,
};
