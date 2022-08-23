import React, { useState } from "react";

const CreateData = () => {

    const [uName, setUname] = useState("");
    const [uEmail, setUemail] = useState("");
    const [uNum, setUnum] = useState();
    const [allData, SetallData] = useState([]);

    const submitData = (e) => {
        e.preventDefault();
        const data = { uName, uEmail, uNum }
        allData.push(data);
        SetallData(allData);
        // console.log(allData);
        // console.log(data);
        localStorage.setItem('links', JSON.stringify(allData));
    }

    return (
        <>
            <div>
                <form onSubmit={submitData}>
                    <h1>Create Data</h1>

                    <label>Name</label>
                    <input type="text" placeholder="enter name" name="name" autoComplete="off" required value={uName} onChange={(e) => setUname(e.target.value)} />
                    <br></br>

                    <label>Email</label>
                    <input type="email" placeholder="enter email " name="email" autoComplete="off" required value={uEmail} onChange={(e) => setUemail(e.target.value)} />
                    <br></br>

                    <label>Number</label>
                    <input type="num" placeholder="enter number " name="number" required value={uNum} onChange={(e) => setUnum(e.target.value)} autoComplete="off" />
                    <br></br>

                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>

        </>
    )
}
export default CreateData;