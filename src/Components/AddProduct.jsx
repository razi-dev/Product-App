import React from 'react'
import Navbar from './Navbar'

const AddProduct = () => {
    return (
        <div>
            <Navbar/>

            

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Warranty</label>
                                <input type="text" className="form-control" />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Expiry Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Manufacturing Date</label>
                                <input type="date" name="" id="" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="photo" className="form-label">Upload a Photo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="photo"
                                    accept="image/*"
                                />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Customercare No</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-12 d-flex justify-content-center">
                                <button className="btn btn-success">Submit</button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddProduct
