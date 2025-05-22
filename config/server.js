module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  apiTokenSalt: env('API_TOKEN_SALT', 'Yy1GF49OlxO6cgvV1P4CGg=='),
  adminJwtSecret: env('ADMIN_JWT_SECRET','bbf91381f03803b4a691eddb7e054be366e4765b8ef38b5f1c5461bb87492022'),
  jwt: {
    secret: env('JWT_SECRET','fa49c60429bf9283dd852bb9eefb6045b835ac5a0d6abc9edb3d1b030f24131e'),
  },
  transferTokenSalt: env('TRANSFER_TOKEN_SALT','8bd24e9a713f135478681b0e2bfaf37ae3ceb26fa5d4b843d6d74023731a7ed8'),
});
