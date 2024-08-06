import React, { useState } from 'react'

function Crud_Handeling() {



    // insert data
    const [formvalue, setFormvalue] = useState({
        id: "",
        email: "",
        password: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const [data, setData] = useState([]);
    const onSubmithandel = (e) => {
        e.preventDefault(); // on submit not refresh page
        setData([...data, formvalue]);
        setFormvalue({ ...formvalue, email: "", password: "" });
        console.log(data);
    }



    //  delete

    const deleteHandel = (id) => {
        const filterData = data.filter((value, index, arr) => { return value.id != id });
        setData(filterData);
    }





    //===================================================================  Edit

    const [formedit, setFormedit] = useState({
        id: "",
        email: "",
        password: ""
    });

    const editHandel = (id) => {
        const editData = data.filter((value, index, arr) => { return value.id == id });
        console.log(editData[0]);
        setFormedit(editData[0]);
    }
    

    //=============================================================== Update

    const changeUpdate = (e) => {
        setFormedit({ ...formedit, [e.target.name]: e.target.value });
        console.log(formedit);
    }

    const onUpdatehandel = (e) => {
        e.preventDefault(); // on submit not refresh page
        const modifieddata = data.map((obj) => {
            if (obj.id === formedit.id) {
                return { ...obj,email:formedit.email,password:formedit.password};
            }
            return obj;
        });
        setData(modifieddata);
        //console.log(data);
    }

    return (
        <div>


            {/* Add data in array object */}

            <div className="container mt-3 mb-5">
                <h2>Add Data</h2>
                <form action="" onSubmit={onSubmithandel} >

                    <div className="mb-3 mt-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" onChange={changeHandel} value={formvalue.email} name="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" onChange={changeHandel} value={formvalue.password} name="password" className="form-control" id="pwd" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>

            <hr />



            {/*  View Data by map loop from data object   */}

            <div className="container mt-3">
                <h2>Manage Data</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data && data.map((value, index, entarr) => {
                                return (
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.email}</td>
                                        <td>{value.password}</td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(value.id)} >Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>



               
               
               
               
                {/* Edit data model*/} 
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Data</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="container mt-3 mb-5">
                                    <form action="" >
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" onChange={changeUpdate} value={formedit.email} name="email" className="form-control" id="email" placeholder="Enter email" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="pwd">Password:</label>
                                            <input type="password" onChange={changeUpdate} value={formedit.password} name="password" className="form-control" id="pwd" placeholder="Enter password" />
                                        </div>

                                        <button type="submit" onClick={onUpdatehandel} className="btn btn-primary" data-bs-dismiss="modal">Save</button>

                                    </form>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Crud_Handeling