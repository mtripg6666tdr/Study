const mongo = require("mongodb");

const client = new mongo.MongoClient("mongodb://db", {
  auth: {
    username: "user",
    password: "pass",
  },
});

client.connect().then(async () => {
  console.log("Connected");

  const aaaa = client.db("aaaa");

  const pass = process.env.SOME_SUPER_SECRET_PASSWORD;

  const collection = aaaa.collection('collection-aaaa');

  await collection.findOneAndUpdate({ super_id: 'superrrrr' }, { '$set': {
    pass
  } }, { upsert: true });

  console.log("Done");

  await client.close();
}).catch(console.error);
