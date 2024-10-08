import React, { useEffect, useState } from 'react'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'
import axios from 'axios'

function Manage_services() {
    // useffect hooks called function automatic wehen com load
    useEffect(() => {
        fetch();
    })

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/services/${id}`);
        if(res.status==200)
        {
            fetch();
        }
    }


    return (
        <div>
            <Aheader />
            <div className="content-wrapper">
                <div className="container">
                    <div className="row pad-botm">
                        <div className="col-md-12">
                            <h4 className="header-line">Manage Services</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Manage Services
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover" >
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
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
                                                                <td>{value.art_id}</td>
                                                                <td>{value.ser_name}</td>
                                                                <td>{value.price}</td>
                                                                <td>{value.description}</td>
                                                                <td className="center">
                                                                    <button className='btn btn-primary'>Edit</button>
                                                                    <button className='btn btn-danger'  onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
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

export default Manage_services