const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    'https://unique-palmier-9ab594.netlify.app',
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
