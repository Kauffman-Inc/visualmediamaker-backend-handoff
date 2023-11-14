module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'),
          port: env('SMTP_PORT'),
          auth: {
            user: env('SMTP_USER'),
            pass: env('SMTP_PASS'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: '',
          defaultReplyTo: '',
        },
      },
    },
    upload: {
      config: {
        provider: "strapi-provider-upload-azure-storage",
        providerOptions: {
          account: env("STORAGE_ACCOUNT"),
          accountKey: env("STORAGE_ACCOUNT_KEY"),
          serviceBaseURL: env("STORAGE_URL"), // optional
          containerName: env("STORAGE_CONTAINER_NAME"),
          defaultPath: "assets",
          cdnBaseURL: env("STORAGE_CDN_URL"), // optional
        },
      },
    },
    // ...
});