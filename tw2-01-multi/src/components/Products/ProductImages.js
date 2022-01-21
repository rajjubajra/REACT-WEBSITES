import {useState, useEffect} from 'react';
import axios from 'axios';


function ProductImages() {

  const [data, setData] = useState([]);

  useEffect(()=>{
     axios.get('./assets/data.json')
     .then(res=>{setData(res.data)})
     .catch(err=>console.log(err))
  },[])

  console.log(data);
  
  return (
    <div>
      
    </div>
  )
}

export default ProductImages
