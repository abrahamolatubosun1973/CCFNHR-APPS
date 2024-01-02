import React, { useState } from "react";


const Fileupload = () => {
    const [file, setFile] = useState('')
    const handleFileUpload = (event) => {
        setFile(event.target.files[0].name)
        //console.log(event.target.files[0].name);
    };


    return (
        <div>
            <input
                onChange={handleFileUpload}
                type="file"
                style={{ display: "none" }}
            // multiple={false}
            />
            {/* <button onClick={() => this.refs.fileInput.click()}>Upload File</button> */}
        </div>
    );
}


export default Fileupload;