import React, { useState } from 'react'
import Aheader from '../component/Aheader'
import Afooter from '../component/Afooter'
import axios from 'axios';

function Add_location() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        location_name:"",
    });
    
    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const onSubmithandel =async (e) => {
        e.preventDefault(); // on submit not refresh page
        const res=await axios.post(`http://localhost:3000/location`,formvalue);
        console.log(res);
        if(res.status==201)
        {
          alert('Location add suuccess !');
          setFormvalue({...formvalue,location_name:""});
          return false;
        }
    }
    return (
        <div>
            <Aheader/>
            <div className="content-wrapper">
                <div className="container">
                    <div className="row pad-botm">
                        <div className="col-md-12">
                            <h4 className="header-line">Add Location</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Add Location
                                </div>
                                <div className="panel-body">
                                    <form role="form" method="post" onSubmit={onSubmithandel}>
                                        <div className="form-group">
                                            <label>Enter Location Name</label>
                                            <input value={formvalue.location_name} onChange={changeHandel} className="form-control" type="text" name="location_name"/>
                                        </div>
                                        <button type="submit" className="btn btn-info">Send Message </button>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Afooter/>
        </div>

    )
}

export default Add_location