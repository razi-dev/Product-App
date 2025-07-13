import React, { useState } from 'react';
import Navbar from './Navbar';

const ViewAll = () => {
    const [movieData, changeMovieData] = useState([
        { "productname": "Bread", "description": "Fresh and healthy", "warranty": "2 years" },
        { "productname": "Milk", "description": "Dairy product", "warranty": "1 year" },
        { "productname": "Eggs", "description": "Organic eggs", "warranty": "6 months" },
        { "productname": "Butter", "description": "Salted butter", "warranty": "1 year" }
    ]);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">
                            {movieData.map((value, index) => (
                                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="card h-100">
                                        <img
                                            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQH0JIfzq2mXmGW3tnhkNoLd7pglTAbG3LYX_DeYB1M_TEFugrQsLzgfBeqytVuYzVqDueuDqKzp2MKoSHFvwVaTe-KRA98j5B_x2Uhj5RVDChl0okmpdrWjY0"
                                            className="card-img-top"
                                            alt={value.productname}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.productname}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <p className="card-text"><strong>Warranty:</strong> {value.warranty}</p>
                                            <a href="#" className="btn btn-primary">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAll;
