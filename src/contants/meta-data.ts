interface MetaTags {
  title: string;
  description: string;
}

interface MetaTagsConfig {
  loginPage: MetaTags;
  signUpPage: MetaTags;
  mainPage: MetaTags;
}

export const MetaTags: MetaTagsConfig = {
  loginPage: {
    title: "reaDRadar | Login Page",
    description:
      "Access your reaDRadar account to explore personalized content and manage your preferences. Login securely with your email and password to unlock a seamless reading experience tailored just for you.",
  },
  signUpPage: {
    title: "reaDRadar | Sign Up Page",
    description:
      "Join reaDRadar and embark on a journey of personalized reading. Create your account to discover a world of curated content, tailored to your interests. Sign up with your email and set up a secure password to start enjoying a customized and enriching reading experience.",
  },
  mainPage: {
    title: "reaDRadar | Home Page",
    description:
      "Discover the latest and most popular content on reaDRadar. Immerse yourself in a diverse range of articles, stories, and more. Tailor your reading experience to your preferences and stay updated with personalized recommendations.",
  },
};
