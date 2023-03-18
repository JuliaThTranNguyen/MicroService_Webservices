import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
                <div className={"container bg-light p-3 mb-2 col-md-13  offset-md5 border rounded p-4 mt-2 shadow"}>
                    <div className=" justify-content-center bg-light col-md-12 offset-md5 border rounded p-4 mt-2 shadow ">
                        <div className="row">
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="../assets/Microservice_Architecture.png" className="card-img-top" alt="Microservice" />
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Introduction to the 2023 - Web Service course.</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="../assets/intro.png" alt="Intro"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Project Architecture Diagram</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="../assets/CRUD.png" alt="crud"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Simple CRUD Architecture & Explanation</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="https://www.salesforce.com/content/dam/web/en_us/www/images/heroku/heroku-card-combining-mobile.jpg" alt="heroku"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Simple Heroku Architecture & Explanation</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="../assets/java.png" alt="java"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Account Service model with SpringBoot & PostgreSQL</p>
                                </div>
                                <Link className={"btn btn-outline-light bg-primary"} to={"/api/accounts"}>Accounts</Link>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="../assets/dotnet.png" alt="dotnet"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Shipping Service model with C# - Dotnet & PostgreSQL</p>
                                </div>
                            </div>
                            <div className="card" style={{width: 18+'rem',}}>
                                <img src="../assets/python.png" alt="python"/>
                                <div className="card-body">
                                    <p className="card-text py-1 text-bg-light">Shopping Service model with Django & PostgreSQL</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}