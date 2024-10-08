import React from 'react'
import Aheader from '../component/Aheader'
import Afooter from '../component/Afooter'

function Manage_location() {
    return (
        <div>
            <Aheader/>
            <div className="content-wrapper">
                <div className="container">
                    <div className="row pad-botm">
                        <div className="col-md-12">
                            <h4 className="header-line">Manage Location</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                Manage Location
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
                                                <tr className="odd gradeX">
                                                    <td>1</td>
                                                    <td>Raj</td>
                                                    <td>Raj@gmail.com</td>
                                                    <td className="center">Image</td>
                                                    <td className="center">
                                                        <button className='btn btn-primary'>Edit</button>
                                                        <button className='btn btn-danger'>Delete</button>
                                                    </td>
                                                </tr>
                                                
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

export default Manage_location