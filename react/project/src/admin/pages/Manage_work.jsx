import React, { useEffect, useState } from 'react'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'
import axios from 'axios'
import { toast } from 'react-toastify'
function Manage_work() {
      // useffect hooks called function automatic wehen com load
      useEffect(() => {
        fetch();
    })

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/work`);
        console.log(res.data);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/work/${id}`);
        if(res.status==200)
        {
            fetch();
            toast.success('Delete Success');
        }
    }
    return (
        <div>
            <Aheader/>
            <div className="content-wrapper">
                <div className="container">
                    <div className="row pad-botm">
                        <div className="col-md-12">
                            <h4 className="header-line">Manage Work</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                Manage Work
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover" >
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Artist Id</th>
                                                    <th>Work Title</th>
                                                    <th>Image</th>
                                                    <th>Description</th>
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
                                                                <td>{value.work_title}</td>
                                                                <td><img src={value.work_img} width="100px"></img></td>
                                                                <td>{value.work_description}</td>
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
            <Afooter/>
        </div>

    )
}

export default Manage_work