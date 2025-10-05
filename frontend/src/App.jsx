import { useState, useEffect } from "react";
import { ethers } from "ethers";
import BookmarkAbi from "./Bookmark.json";

const contractAddress = "0x51a351ED27ab9fa17ad4bD69721f33F27aae4432";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [form, setForm] = useState({ title: "", url: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask!");
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const getContract = async (withSigner = false) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = withSigner ? await provider.getSigner() : null;
    return new ethers.Contract(contractAddress, BookmarkAbi.abi, signer || provider);
  };

  const getBookmarks = async () => {
    const contract = await getContract();
    const data = await contract.getBookmarks();
    setBookmarks(data);
  };

  const addBookmark = async () => {
    if (!form.title || !form.url) return alert("Enter title and URL");
    const contract = await getContract(true);
    const tx = await contract.addBookmark(form.title, form.url);
    await tx.wait();
    getBookmarks();
    setForm({ title: "", url: "" });
  };

  useEffect(() => { if (window.ethereum) getBookmarks(); }, []);

  return (
    <div>
      <h1>Bookmark DApp</h1>
      <div>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="url" placeholder="URL" value={form.url} onChange={handleChange} />
        <button onClick={addBookmark}>Add Bookmark</button>
      </div>
      <h2>Saved Bookmarks:</h2>
      <div className="bookmarklist">
        {bookmarks.map((bm, idx) => (
          <div key={idx} className="eachbookmark">
            <a href={bm.url} target="_blank" rel="noreferrer">{bm.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
