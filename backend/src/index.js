import express from "express";
import cors from "cors";



import UserSignup from "./routes/UserSignup.js";
import UserSignin from "./routes/UserSignin.js";
import UserSearch from "./routes/UserSearch.js";
import authMiddleWare from "./middlewares/authMiddleWare.js";
import UserInfo from "./routes/UserInfo.js";



const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/user/signup", UserSignup);
app.use("/api/user/signin", UserSignin);
app.use("/api/user/search", authMiddleWare, UserSearch);


app.use("/api/user/getInfo",authMiddleWare,UserInfo);






app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
