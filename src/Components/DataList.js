import React, { useEffect, useState } from "react";
const DataList = () => {

    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem("links");
        const initialValue = JSON.parse(storedData);
        return initialValue || "";
    });

    return (
        <>
            <div className="container">
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{localStorage.getItem()}</td>
                            {/* <td>{localStorage.getItem("uEmail")}</td>
                            <td>{localStorage.getItem("uNum")}</td> */} 

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default DataList;