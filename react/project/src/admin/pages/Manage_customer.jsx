import React, { useEffect, useState } from 'react'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_customer() {
    // useffect hooks called function automatic wehen com load
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/customer`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/customer/${id}`);
        if (res.status == 200) {
            fetch();
            toast.success('Delete Success');
        }
    }


    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        password: "",
        image: "",
    });

    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/customer/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    

    return (
        <div>

            <Aheader />
            <div className="content-wrapper">
                <div className="container">
                    <div className="row pad-botm">
                        <div className="col-md-12">
                            <h4 className="header-line">Manage Cusromer</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Manage Cusromer
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover" >
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Mobile</th>
                                                    <th>Email</th>
                                                    <th>Image</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data && data.map((value, index, arr) => {
                                                        return (
                                                            <tr className="odd gradeX">
                                                                <td>{value.id}</td>
                                                                <td>{value.name}</td>
                                                                <td>{value.mobile}</td>
                                                                <td><img src={value.image} width="50px"></img></td>
                                                                <td>{value.status}</td>
                                                                <td className="center">
                                                                    <button className='btn btn-primary' data-toggle="modal" data-target="#myModal" onClick={() => editHandel(value.id)}>Edit</button>
                                                                    <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Edit User</h4>
                                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                                    </div>
                                                    {/* Modal body */}
                                                    <div className="modal-body">
                                                        <div className="panel-body">
                                                            <form role="form" method="post" >

                                                                <div className="form-group">
                                                                    <label>Enter Name</label>
                                                                    <input value={formvalue.name} onChange={changeHandel} className="form-control" name="name" type="text" />
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
                                                                    <label>User Image</label>
                                                                    <input value={formvalue.image} onChange={changeHandel} className="form-control" name="image" type="url" />
                                                                </div>
                                                                <button type="submit" className="btn btn-info"> Save </button>
                                                            </form>

                                                        </div>
                                                        {/* Modal footer */}
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/*End Advanced Tables */}
                        </div>
                    </div>
                    {/* /. ROW  */}
                </div>
            </div>
            <Afooter />
        </div>

    )
}

export default Manage_customer