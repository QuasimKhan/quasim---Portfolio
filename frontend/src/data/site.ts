export const site = {
    name: "Quasim",

    title: "Freelance Full-Stack Developer",

    description:
        "Professional websites, web applications, mobile applications, and custom digital products.",

    contact: {
        whatsapp: "919794094606",
        whatsappDisplay: "+91 97940 94606",
        email: "quasimdotdev@gmail.com",
    },

    profiles: {
        linkedin: "https://www.linkedin.com/in/quasimkhan/",
        peerlist: "https://peerlist.io/quasimkhan",
    },
};

export const whatsappMessage = encodeURIComponent(
    "Hi Quasim, I found your portfolio and would like to discuss a project with you."
);

export const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${whatsappMessage}`;