import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql'
import * as fs from 'fs'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig({ path: ['.env.local', '.env'] })

const endpoint = process.env.VITE_HTTP_ENDPOINT
if (!endpoint) {
  throw new Error('VITE_HTTP_ENDPOINT missing in .env/.env.local')
}

fetch(`${endpoint}/api/graphql`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: getIntrospectionQuery() }),
})
  .then((res) => res.json())
  .then((resData) => {
    if ('data' in resData) {
      return printSchema(buildClientSchema(resData.data))
    }
    throw new Error(JSON.stringify(resData, null, 2))
  })
  .then((schema) => fs.writeFileSync('src/schema.graphql', schema))
