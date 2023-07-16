# E-Commerce Dashboard & CMS

## Next.js 13 App Router, React, Tailwind, Prisma & MySQL

This is a repository for a Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL

## Check out the [ADMIN](https://github.com/i1Zeus/ecommerce-admin) dashboard

Key Features:

- using **Shadcn UI** for the Admin!
- Our **Admin Dashboard** is both CMS, Admin and API!
- You will be able to control multiple vendors / stores through this single CMS!

  (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)

- **Create**, **Update** and **Delete** Categories / Products!
- **Upload** multiple images for Products, and change them whenever you want!
- **Create**, **Update** and **Delete** filters such as "Color" and "Size", and then match them in the "Product" creation form.
- **Create**, **Update** and **Delete** "**_Billboards_**". Billboards are the images that show on the homepage, and you can control them through the CMS!
- You will be able to **Search** through all _Categories_, _Products_, _Sizes_, _Colors_, _Billboards_ with included pagination!
- Control which Products are "featured" so they show on the homepage!
- See your orders, sales, etc.
- See graphs of your revenue etc.
- Clerk Authentication, included.
- Order Creation
- Stripe Checkout
- Stripe Webhooks
- **_MySQL_** + **_Prisma_** + **_PlanetScale_**

#### Prerequisites

**Node version 14.x**

#### Cloning the repository

```shell
git clone https://github.com/i1Zeus/ecommerce-admin.git
```

#### Install packages

```shell
npm i
```

#### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
