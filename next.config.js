/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    env: {
      API_URL: "http://localhost:3000",
      DB_URI: "mongodb+srv://yasharnajafi6846:sacenthandes@cluster0.u3zadxk.mongodb.net",
    },
  };
  
  module.exports = nextConfig;

 

  // mongodb+srv://yasharnajafi6846:sacenthandes@cluster0.u3zadxk.mongodb.net