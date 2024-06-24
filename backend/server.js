import express from 'express';
import cors from 'cors';
import path from 'path';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import foodRouter from './routes/foodRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import 'dotenv/config';

// app config
const app = express();
const port = process.env.PORT ||4000;

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/food', foodRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Serve static files from the assets directory in the frontend
const __dirname = path.resolve();
const assetsPath = path.join(__dirname, 'public');
console.log(`Serving static files from: ${assetsPath}`); // Log the path for verification

app.use('/images', express.static(assetsPath));

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
    
