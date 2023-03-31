const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/user.js");
const employeeRoute = require("./routes/employee.js");
const positionRoute = require("./routes/position.js");
const departmentRoute = require("./routes/department.js");
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("CONNECTED TO MONGO DB");
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/employee", employeeRoute);
app.use("/v1/position", positionRoute);
app.use("/v1/department", departmentRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
