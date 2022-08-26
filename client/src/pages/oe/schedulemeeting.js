import React from "react";


const Meet=()=>
{

    const sendreq=()=>
    {
        
    }
    return(
        <div className="meeting">
        <form className="oeMeet">
            <table className="tabmeet">
                <tr>
                    <td><input type="email" className="meetinginput" placeholder="Enter the mail"/></td>
                </tr>
                <tr>
                    <td><input type="text" className="meetinginput" placeholder="paste the meeting link"/></td>
                </tr>
                <tr>
                    {/* <input type="submit" value="send" onclick={(e)=>sendreq(e)}/> */}
                </tr>
            </table>
        </form>
        </div>
    )
}
export default Meet;