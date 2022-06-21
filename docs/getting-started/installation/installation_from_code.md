---
sidebar_position: 2
slug: "/install-from-code"
---

# From Code

## Pre-requisites

You will need these to be already installed:

- An API from the previous page
- [NodeJS](https://nodejs.org/) 14+ and [NPM](https://npmjs.com/)
- A [Prisma-compatible database](https://www.prisma.io/docs/reference/database-reference/supported-databases)

Once you have these set up, proceed to the installation

## Installation Procedure

To install from code, follow the given steps:

Follow these steps to get started with your own instance of Pckd

1. Clone the repo and `cd` to the folder base of this repo
1. Run command `npm run init` to install all the dependencies, and initialize environment files in both folders
1. Create a database named pckd in your chosen DBMS and remember the connection Username and Password
1. Manually go to both the `client` and `server` folder and fill in the values in the `.env` file
1. Open the [`server/prisma/schema.prisma`](https://github.com/PckdHQ/pckd/blob/master/server/prisma/schema.prisma) file and replace `postgresql` with your chosen db name.
1. Return to base directory, and run `npm run db-init` to sync database with schema.
1. To test if everything's working, run `npm run dev` and test the app
1. To promote to production, run `npm run build-client` and then `npm start`

The server should now be accessible at [localhost:4000](http://localhost:4000/manage/)

To keep the NodeJS Server alive even when shut down, read the [usage with PM2 guide](/docs/using-pm2)
