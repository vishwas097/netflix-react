export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const ICON =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
};

export const errorMapper = new Map([
  ["auth/email-already-in-use", "Email already exists"],
  ["auth/invalid-credential", "Incorrect Email or Password"],
]);

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "ka", name: "Kannada" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "sp", name: "Spanish" },
];

export const CATEGORY_MOVIES = [
  { identifier: "nowPlayingMovies", name: "Now Playing" },
  { identifier: "upcomingMovies", name: "Upcoming Movies" },
  { identifier: "popularMovies", name: "Popular" },
  { identifier: "topRatedMovies", name: "Top Rated Movies" },
];

export const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  ka: {
    search: "ಹುಡುಕಿ",
    gptSearchPlaceholder: "ನೀವು ಇಂದು ಏನನ್ನು ವೀಕ್ಷಿಸಲು ಬಯಸುತ್ತೀರಿ?",
  },
  hi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  sp: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
};
