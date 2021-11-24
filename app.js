import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(router);

// app.use((req, res, next) => {
//   res.status(404).render("404");
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});

export default app;
