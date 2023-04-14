import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import FormSent from './FormSent';
import { GraphQLClient } from 'graphql-request';


const Send = (data, user) => {




  console.log("fafs",data);
  console.log("User prop ",user);

  const userId = "64398a63e840e636f6040119";

  const [IsSent, setIsSent] = useState(false);


  const endpoint = 'http://localhost:5000/graphql'; // Replace with your GraphQL server endpoint

const client = new GraphQLClient(endpoint);
const updateUser = async () => {
    const mutation = `
    mutation updateUser($user_id: Int!, $data: UserUpdateInput!) {
        updateUser(user_id: $user_id, data: $data) {
          user_id
          applicationLetter
        }
      }
      
      
    `;

    const variables = {
        user_id: 1,
        data: {
        applicationLetter: inputValue,
      },
    };

    try {
      const response = await client.request(mutation, variables);
      console.log(inputValue);
      console.log("response",response);
      console.log("variable", variables);
      console.log("mutation", mutation);
    } catch (error) {
      console.error(error);
    }
  };

const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

  const handleSendClick = () => {
    if (inputValue != ""){
    setIsSent(true);
    updateUser();
    }
  };

  const titleN = data.data.title.toLowerCase()
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');


  const position = "Designer"
  return (
    <div>
        <Card sx={{ marginLeft:11, maxWidth: 900,  marginTop:3, backgroundColor:"#eeeee4", borderRadius:4 }}>
      <CardContent>
      <Typography variant="h4" component="h1" mt={2} ml={2}>
        {data.data.title}
      </Typography>
      <Link component="span" underline="hover" onClick={() => console.log('Link clicked')}>    
      
        <Typography ml={2}  sx={{ fontSize: 14 }} color="#1E90FF" gutterBottom>
          {data.data.hashtag}
        </Typography>
        </Link>
    {!IsSent &&
    <div>

        <Typography sx={{ fontSize: 12, textAlign:'left' }} mt={2} ml={2}>
        Why do you want to apply for the position of a {data.data.role} and work with "{titleN}"?
      </Typography>
      <Typography sx={{ fontSize: 10, textAlign:'left' }} ml={2}>
        Max. 400 words
      </Typography>
      <TextField 
      value={inputValue}
      onChange={handleInputChange}
      multiline
      rows={5}
     
      sx={{
        width: '80%',
        minHeight: '140px',
        backgroundColor: 'white',
        marginLeft:2,
        marginTop:2,
        borderRadius: '8px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px', 
        },
      }}
     />
       <Typography sx={{ fontSize: 14 }} variant="h7" component="h3" mt={1} ml={2}>
        * Your profile information is automatically included in the applicaiton.
      </Typography>
      <Button
          onClick={handleSendClick}
          sx={{
            width: 130,
            height: 50,
            backgroundColor: '#1E90FF',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            borderRadius:4,
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
            textTransform:'none',
            marginLeft:2,
            marginTop:2
            
          }}
        >
       <Typography variant="h8" color="#fff" sx={{textAlign:'center'}}>
       Send
      </Typography>
      </Button>
    </div>
      
    }
        {IsSent &&
        <FormSent/>
        }    
      </CardContent>
      </Card>
    </div>
  )
}

export default Send