import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Myservicelandingpage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <aside className='col-md-2'>
                    <div className="flex-shrink-0 p-3">
                        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                            <span className="fs-5 fw-semibold">Collapsible</span>
                        </a>
                        <ul className="list-unstyled ps-0">
                            <li className="mb-1">
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                                  Car Service
                                </button>
                                <div className="collapse" id="home-collapse" >
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Service</Link></li>
                                        <li><Link to="car" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Car</Link></li>
                                        <li><Link to="bike" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Bike</Link></li>
                                        <li><Link to="leptop" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Leptop</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                    Dashboard
                                </button>
                                <div className="collapse" id="dashboard-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                                        <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
                                        <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
                                        <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                    Orders
                                </button>
                                <div className="collapse" id="orders-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
                                        <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
                                        <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
                                        <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
                                    </ul>
                                </div>
                            </li>
                            
                            
                        </ul>
                    </div>
                </aside>

                <aside className='col-md-10 border'>
                    <Outlet></Outlet>
                </aside>
            </div>
        </div>
    )
}

export default Myservicelandingpage