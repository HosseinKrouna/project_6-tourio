import mongoose, { model, models, Schema } from "mongoose";
import crypto from "crypto";

const URI = `mongodb+srv://project6:${process.env.MONGODB_PASSWORD}@cluster0.iph03jw.mongodb.net/?retryWrites=true&w=majority`;

const attractionSchema = new Schema({
  id: String,
  name: String,
  location: String,
  image: String,
  mapURL: String,
  description: String,
});

const Attraction = models.Attraction || model("Attraction", attractionSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllAttractions() {
  await connectDatabase();

  const attractions = await Attraction.find({});
  return attractions;
}

async function getAttraction() {
  await connectDatabase();
  const attraction = await Attraction.findOne({
    id,
  });

  return attraction;
}

async function createAttraction(attraction) {
  await connectDatabase();

  const newAttraction = await Attraction.create({
    ...attraction,
    id: crypto.randomUUID(),
  });

  return newAttraction;
}

async function updateAttraction(id, attraction) {
  await connectDatabase();

  const attrationUpdate = await Attraction.findOneAndUpdate(
    {
      id,
    },
    attraction
  );

  return attrationUpdate;
}

async function deleteAttraction() {
  await connectDatabase();

  const attractionDelete = await Attraction.findOneAndRemove({
    id,
  });

  return attractionDelete;
}

export { getAllAttractions, getAttraction, updateAttraction, deleteAttraction };
