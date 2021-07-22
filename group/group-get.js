const { MongoClient } = require('mongodb');

const uri = "mongodb://mongo:27017/userSchema";


async function run(query) {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true ,useUnifiedTopology: true })
  .catch(err => { console.log(err); });
  try {
    const database = client.db('groupDB');
    const user = database.collection('groups');
    const result = await user.findOne(query);
    await client.close();
    return result;
  }
  catch{
    console.log("error");
  }
}

module.exports = run;
