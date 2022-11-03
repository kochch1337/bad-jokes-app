import mongoose, { model, models, Schema } from "mongoose";

const URI = `mongodb+srv://chriscook1337:${process.env.MONGODB_PASSWORD}@cluster0.uy5fb5x.mongodb.net/?retryWrites=true&w=majority`;

const jokeSchema = new Schema({
  id: String,
  text: String,
  author: String,
  categories: [String],
});

const Joke = models.Joke || model("Joke", jokeSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllJokes() {
  await connectDatabase();

  const joke = await Joke.find({}, { _id: false });
  return joke;
}

export { getAllJokes };
