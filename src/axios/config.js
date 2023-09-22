const env = process.env.ENV ? process.env.ENV : 'development';

const config = {
  development: {
    api: 'http://localhost:3000/api',
  },
  staging: {
    api: 'http://localhost:3000/api',
  },
  production: {
    api: 'http://localhost:3000/api',
  },
}[env];

export default config;