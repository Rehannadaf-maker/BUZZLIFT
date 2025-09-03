import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// import routes
import usersRoutes from "./routes/usersRoutes.js";

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
