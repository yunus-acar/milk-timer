
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`PORT`



## Run Locally

Clone the project

```bash
  git clone https://github.com/yunus-acar/milk-timer.git
```

Go to the project directory

```bash
  cd milk-timer
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Tech Stack


**Server:** Node, Express, Prisma, MongoDB


## Deployment

To deploy this project run

```bash
  docker build -t milk-timer .
```

```bash
  docker run -d -p 4000:4000 milk-timer
```



