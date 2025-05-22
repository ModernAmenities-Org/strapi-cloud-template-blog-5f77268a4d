module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  apiTokenSalt: env('API_TOKEN_SALT', 'someSecretKey123'),
  adminJwtSecret: env('ADMIN_JWT_SECRET'),
  jwt: {
    secret: env('JWT_SECRET'),
  },
  transferTokenSalt: env('TRANSFER_TOKEN_SALT'),
});
