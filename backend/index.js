import express from "express";

const app = express();



app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

