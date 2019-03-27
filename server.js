const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
   res.send([
        {
          'id': 777,
          'image':'https://placeimg.com/64/64/1',
          'name':'유진호',
          'birthday':'901031',
          'gender':'man',
          'job':'사회인'
        },
        {
          'id': 444,
          'image':'https://placeimg.com/64/64/2',
          'name':'유진호',
          'birthday':'901031',
          'gender':'man',
          'job':'사회인'
        },
        {
          'id': 555,
          'image':'https://placeimg.com/64/64/3',
          'name':'유진호',
          'birthday':'901031',
          'gender':'man',
          'job':'사회인'
        }
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));