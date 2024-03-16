'use client'
import { useState } from "react";

export default function Home() {
  const [plainTxt, setPlainTxt] = useState("");
  const [encryptedTxt, setEncryptedTxt] = useState("");

  const handlePlainTxtChange = e => {
    e.preventDefault();
    setPlainTxt(e.target.value);
  }
  const handleEncryptedTxtChange = e => {
    e.preventDefault();
    setEncryptedTxt(e.target.value);
  }
  const generatePassword = () => {
    console.log('plainTxt', plainTxt);
    if (plainTxt?.length == 0) {
      alert("please enter atleast a single character in plain text field");
    }
    else {
      setEncryptedTxt(encryptedTxt + plainTxt);
    }
  }
  const decryptPassword = () => {
    console.log('encryptedTxt', encryptedTxt);
    // if (plainTxt?.length < 0) {
    //   alert("please enter atleast a single character in plain text field");
    // }
    // else {
    //   setEncryptedTxt(plainTxt);
    // }
  }
  const clear = () => {
    setPlainTxt("");
    setEncryptedTxt("");
  }
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center">
      <div className="relative border rounded-md border-slate-900 bg-black shadow-sm shadow-white w-full mx-3 md:w-96">
        <div className="p-6">
          <h3 className="text-3xl text-white text-center">Password Generator</h3>
          <div className="mt-5">
            <input type="text" value={plainTxt} className="p-2 mb-4 w-full border rounded-sm" placeholder="Enter plain text here"
              onChange={handlePlainTxtChange} />
            <textarea rows="6" value={encryptedTxt} className="p-2 w-full border rounded-sm resize-none"
              placeholder="Encrypted Password will come here" onChange={handleEncryptedTxtChange} />
            <div className="flex justify-end">
              <button className="text-white bg-blue-600 hover:bg-opacity-50 mt-2 text-md px-4 py-2 border-none rounded-md">copy</button>
            </div>
          </div>
          <div className="mt-4">
            <button className="text-white bg-green-600 hover:bg-opacity-50 mt-2 text-md w-full px-4 py-2 border-none rounded-md" onClick={generatePassword}>Generate (Encrypt)</button>
            <button className="text-white bg-red-600 hover:bg-opacity-50 mt-2 text-md w-full px-4 py-2 border-none rounded-md" onClick={decryptPassword}>Decrypt (Generate original text)</button>
            <button className="text-white bg-slate-600 hover:bg-opacity-50 mt-2 text-md w-full px-4 py-2 border-none rounded-md" onClick={clear}> Clear Text</button>
          </div>
        </div>
      </div>
    </div>
  );
}
