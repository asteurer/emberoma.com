# Overview
Source code for Emberoma's website. It's a Svelte app that runs in Kubernetes and integrates with a Minio server.

## Reminders for Andrew
I'm not a front-end developer, so the points below are to remind me how the application works.
- Under `src/lib` you'll find your Svelte components and a `config.js` file (mostly for parsing environment variables and initializing the Minio client).
- Under `src/routes`, you'll find the `api/[...path]/+server.js` route. This is an internal route that allows you to proxy image data from your Minio server to the client without exposing the Minio server publicly. If you want to add more images/files, it will look like this: `/api/path/to/your/file.txt`.
- If you want to replicate this project, you'll run `npx sv create project-name`. Be sure to diff the various config files, as some will be different than the defaults.