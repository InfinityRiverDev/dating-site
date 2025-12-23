import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";

dotenv.config();

const app = express();

app.use(cors);
app.use(express.json({ limit: "5mb" })); // для base64 фото

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server started on ${process.env.PORT}`)
    );
  })
  .catch(console.error);
