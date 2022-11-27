const getConfigVars = (env: NodeJS.ProcessEnv) => {
  const { MONGO_DB_PASSWORD, MONGO_DB_USERNAME, ENV } = env;
  return `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.ku6ozsp.mongodb.net/${process.env.ENV}?retryWrites=true&w=majority`;
};

export default getConfigVars;
