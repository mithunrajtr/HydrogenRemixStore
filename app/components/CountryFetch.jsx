

// import axios from 'axios'

import { useEffect } from 'react';


 
const options = {
    method: 'GET',
    url: 'https://api-basketball.p.rapidapi.com/timezone',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'a7a25574a2mshf6838d0e7ab158cp18384cjsn21038f692c98',
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
  };
export function CountryFetch(){

    useEffect( async() =>{
        const xhr = new XMLHttpRequest(); 
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
    xhr.onload = () => {
      if(xhr.status===200) {
        const users = JSON.parse(xhr.response)
        console.log(users)
        this.setState({
          users
        })
      }
    }
    xhr.send(null)
  })
    //     try {
    //       const response = await axios.request(options);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   },[])
    return(
        <div>loading</div>
    )
}