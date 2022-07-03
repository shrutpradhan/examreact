import React from "react";
import "./style.css";
import data from "../object";

export default function index() {
    return(
        <>
        {
            data.map((ele)=> {
                return(
                    <div className="details">
                        <div className="name">{ele.name}</div>
                        <div className="branch">{ele.branch}</div><br/>
                    </div>
                )
            })
        }
        </>
    )
}