This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies, and start a local redis instance.

Secondly, create a `.env` file and populate it similar to `.env.example`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Provided Examples

There are 3 routes

### /client-only

In this case the fetching happens exclusively on the client side.
Page rendering should be fast, but there will be a loading indicator

### /prefetched-nocache

The query is prefetched (based on default parameter) on the server-side. The page load is slow,
but data is immediately visible.

### /prefetched

The query is still prefetched, so the very first load time is slow.
However, the queryClient is persisted in redis, thus the subsequent loading is much faster.
