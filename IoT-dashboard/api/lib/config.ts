export const config = {
    port: process.env.PORT || 3100,
    databaseUrl: process.env.MONGO_URI || 'mongodb+srv://user:asdf@cluster1.cd5eiqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1&directConnection=true'
};