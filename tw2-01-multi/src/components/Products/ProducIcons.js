import {useState, useEffect} from 'react';
import axios from 'axios';


function ProductIcons() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('./assets/data.json')
    .then(res=> setData(res.data.product_icons))
    .catch(error=> console.log(error))
  },[])

  console.log(data);
  
  return (
    <div className="w-full py-10">
      <ul className="flex justify-center">
      {
        data.length > 0 
        && data.map(item=>{
          return <li className="w-36 p-4">
            <div className="w-full flex justify-center">
              <img src={item.icons} alt={item.alt} />
            </div>
            <div className="w-full text-center">
              {item.label}
            </div>
          </li>
        })
      }
      </ul>
    </div>
  )
}

export default ProductIcons