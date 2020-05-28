import express from 'express';
import cors from 'cors';
import carOwnerRoute from './routes/carOwner';
import path from 'path';
import './prismaInit';


const app = express();


app.use(cors());
app.use('/api/v1', carOwnerRoute);

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT: any = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  error ? console.error(error) : console.log(`Drone running on port |${PORT}|`);
})