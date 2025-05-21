module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  apiTokenSalt: env('API_TOKEN_SALT', 'someSecretKey123'),
  adminJwtSecret: env('ADMIN_JWT_SECRET', 'your-admin-jwt-secret'),
  jwt: {
    secret: env('JWT_SECRET', 'your-jwt-secret-key-here'),
  },
  transferTokenSalt: env('TRANSFER_TOKEN_SALT', 'your-transfer-token-salt'),
});
