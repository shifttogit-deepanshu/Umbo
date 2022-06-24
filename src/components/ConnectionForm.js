import React,{useState} from "react";
var axios = require('axios');

const ConnectionForm = (props)=>{
    const [ssid,setSsid] = useState("")
    const [psk,setPsk] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
        var config = {
            method: 'post',
            url: `https://umbo-server.herokuapp.com/cred?ssid=${ssid}&psk=${psk}`
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
          
        props.closeForm()
    }

    return (
        <div>
            <h1 className="cred_head">Change Wifi Credentials</h1>
            <form onSubmit={(event)=>handleSubmit(event)} className="cred-form">
                <input type="text" value={ssid} onChange={(e)=>setSsid(e.target.value)} />
                <input type="password" value={psk} onChange={(e)=>setPsk(e.target.value)} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ConnectionForm