import React from 'react'
import Aheader from '../component/Aheader'
import Afooter from '../component/Afooter'

function Add_location() {


    const submitHandel=()=>{

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
                                    <form role="form" method="post" onSubmit={submitHandel}>
                                        <div className="form-group">
                                            <label>Enter Location Name</label>
                                            <input className="form-control" type="text" name="location_name"/>
                                            <p className="help-block">Help text here.</p>
                                        </div>
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