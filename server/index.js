const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getPlant } = require('./controller')

app.get("/api/plant", getPlant);

app.listen(4000, () => console.log("Sagebrush Server running on 4000"));
