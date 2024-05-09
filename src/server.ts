import { users } from './infra/db/schema'
import { db } from './infra/db/connection'

db.insert(users).values({ name: 'John Due', email: 'john.mail@mail.com', document: 'aaaaaaa', phone: '11989854034', password: 'any_password' }).then((res) => {
  console.log({ res })
  db.query.users.findMany().then((result ) => console.log({ result }))
});
