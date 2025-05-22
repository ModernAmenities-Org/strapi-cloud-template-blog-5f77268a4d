module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','bbf91381f03803b4a691eddb7e054be366e4765b8ef38b5f1c5461bb87492022'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','Yy1GF49OlxO6cgvV1P4CGg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','8bd24e9a713f135478681b0e2bfaf37ae3ceb26fa5d4b843d6d74023731a7ed8'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
