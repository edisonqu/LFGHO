import React, { useState, useRef } from 'react';
import '../styles/ImageUpload.css';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const imageSelecttRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file))
        }
    };

    const handleFileDelete = () => {
        setSelectedFile(null);
        setPreview(null);
    }

    const handleUpload = () => {
        if (!selectedFile) {

            return;
        }

    };

    return (
        <div className="image-upload-container">
            <input type="file" onChange={handleFileChange} accept="image/*" ref={imageSelecttRef} hidden/>
            {selectedFile && <img onClick={handleFileDelete} src={preview}/>}
            {!selectedFile && <button htmlFor="fileInput" onClick={() => {imageSelecttRef.current.click()}} className="upload-button">Select Image</button>}
            {selectedFile && <button>Upload Image</button>}
            
        </div>
    );
};

export default ImageUpload;
