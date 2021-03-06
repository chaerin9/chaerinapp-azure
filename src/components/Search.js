import querystring from 'query-string'
import axios from "axios";
import { useEffect, useState } from 'react';

function Search(props){

    var query = querystring.parse(props.location.search)
var apiurl = process.env.REACT_APP_BASE_API_URL+"/searchcakes?q="+query.q
    var [islodding,setLodding]=useState(true)
    var [data,setData]=useState([]);
    useEffect(()=>{
    axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
        console.log("propcale..",response.data.data)
        setData(response.data.data)
        setLodding(false)
        

    },(error)=>{
        console.log("error..",error.data.data)
        setLodding(false)
    });

    })
    return(
      
        <>
               <div className="card-groups "  >
       {islodding &&  <div className=" text-center loaderbody">
                        {/* <p className="loader-text"> loading....</p> */}
                        <div className="loader4">
                        </div>
                    </div>}
            { data.map((area,index)=>{   
                return ( 
                <Card data={area} index ={index}></Card>
                
                )
        
            })}
</div>
        </>

    )
}
export default Search