import React,{useState} from 'react'
import Loader from './Components/Loader';
import Master from './Layouts/Master';
import axios from 'axios';
import axioss from './Config/Axioss'

export default function Home() {
  const [loader,setLoader] = useState(true);
  const [data,setData] = useState({});

  React.useEffect(() => {
    axioss.get('watch').then((res) => {
      setLoader(false);
      setData(res.data.data);
    })
  });


  return (
    <Master>
        
        {
          loader ? (<Loader/>) : 
         
          (<div className='container'>

            <div className="row">
            {
              data.data.map(d =>{
                return (
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-header">
                        <img src={d.image} className='card-view-img' alt="" />
                      </div>
                      <div className="card-footer">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className='btn btn-outline-warning'>1200Ks</span>
                          <button className='btn btn-danger'>To card</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            </div>
        </div>)

        }
        
        
    </Master>
  )
}
