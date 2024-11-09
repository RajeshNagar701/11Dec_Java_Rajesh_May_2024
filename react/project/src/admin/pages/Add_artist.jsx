import React, { useEffect, useState } from 'react'
import Aheader from '../component/Aheader'
import Afooter from '../component/Afooter'
import axios from 'axios';

function Add_artist() {

    // useffect hooks called function automatic wehen com load
    useEffect(() => {
        fetch();
    });

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/location`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        name: "",
        shop_name: "",
        email: "",
        password: "",
        mobile: "",
        loc_id: "",
        address: "",
        image: "",
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(),status:"Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const onSubmithandel = async (e) => {
        e.preventDefault(); // on submit not refresh page
        const res = await axios.post(`http://localhost:3000/artist`, formvalue);
        console.log(res);
        if (res.status == 201) {
            alert('Artist add suuccess !');
            setFormvalue({
                ...formvalue, name: "",
                shop_name: "",
                email: "",
                password: "",
                mobile: "",
                loc_id: "",
                address: "",
                image: ""
            });
            return false;
        }
    }

    return (
        <div>
            <Aheader />
            <div className="content-wrapper">
                <div className="container">
                    <div className="row pad-botm">
                        <div className="col-md-12">
                            <h4 className="header-line">Add Artist</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Add Artist
                                </div>
                                <div className="panel-body">
                                    <form role="form" method="post" onSubmit={onSubmithandel}>
                                        <div className="form-group">
                                            <label>Select Location</label>
                                            <select value={formvalue.loc_id} onChange={changeHandel} name="loc_id" className="form-control">
                                                <option value="">Select Location</option>
                                                {
                                                    data && data.map((value, index, arr) => {
                                                        return (
                                                            <option value={value.id}>
                                                                {value.location_name}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Name</label>
                                            <input value={formvalue.name} onChange={changeHandel} className="form-control" name="name" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Shop Name</label>
                                            <input value={formvalue.shop_name} onChange={changeHandel} className="form-control" name="shop_name" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Email</label>
                                            <input value={formvalue.email} onChange={changeHandel} className="form-control" name="email" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input value={formvalue.password} onChange={changeHandel} className="form-control" name="password" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <label>Shpp Mobile</label>
                                            <input value={formvalue.mobile} onChange={changeHandel} className="form-control" name="mobile" type="number" />
                                        </div>
                                        <div className="form-group">
                                            <label>Shop Address</label>
                                            <textarea value={formvalue.address} onChange={changeHandel} name="address" className="form-control" rows={3} defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                            <label>Shpp Image</label>
                                            <input value={formvalue.image} onChange={changeHandel} className="form-control" name="image" type="url" />
                                        </div>
                                        <button type="submit" className="btn btn-info"> Submit </button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Afooter />
        </div>

    )
}

export default Add_artist