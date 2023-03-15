
# JUJU Mood Influencer API
The backend part of the site that will be opened for influencers to apply.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`PORT`



## Run Locally

Clone the project

```bash
  git clone https://github.com/yunus-acar/juju-influencer-api.git
```

Go to the project directory

```bash
  cd juju-influencer-api
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
  docker build -t juju-influencer-api .
```

```bash
  docker run -d -p 4000:4000 juju-influencer-api
```




## API Reference

#### Register

```http
  POST /api/v1/influencer/register
```



| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your name |
| `surname` | `string` | **Required**. Your surname |
| `email` | `string` | **Required**. Your email |
| `phone` | `string` | **Optional**. Your phone number |
| `socials` | `json` | **Required**. Your socials |
| `agency`  | `string` | **Optional**. Your agency |
| `country` | `string` | **Required**. Your country |
| `city` | `string` | **Required**. Your city |
| `birthday` | `string | datetime` | **Required**. Your birthday |
| `companyInformation` | `json` | **Optional**. Your company information |


#### Get detail

```http
  GET /api/v1/influencer/details/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of detail to fetch |

#### Get all

```http
  GET /api/v1/influencer/list
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `int` | **Optional**. Page of list to fetch |
| `limit`      | `int` | **Optional**. Limit of list to fetch |


#### Update

```http
  PUT /api/v1/influencer/update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of detail to update |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Optional**. Your name |
| `surname` | `string` | **Optional**. Your surname |
| `email` | `string` | **Optional**. Your email |
| `phone` | `string` | **Optional**. Your phone number |
| `socials` | `json` | **Optional**. Your socials |
| `agency`  | `string` | **Optional**. Your agency |
| `country` | `string` | **Optional**. Your country |
| `city` | `string` | **Optional**. Your city |
| `birthday` | `string | datetime` | **Optional**. Your birthday |
| `companyInformation` | `json` | **Optional**. Your company information |


#### Delete

```http
  DELETE /api/v1/influencer/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of detail to delete |



#### Web Delete

```http
  DELETE /api/v1/influencer/web-delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of detail to delete |



![Logo](https://cdn.discordapp.com/attachments/741442252085395508/1080221278008524800/ii_logo.jpeg)



## Authors

- [@chaisser](https://www.github.com/chaisser)

- [@yunus-acar](https://www.github.com/yunus-acar)