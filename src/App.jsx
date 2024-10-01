import { useState } from 'react'
import './App.css'


function App() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [fileSelected, setFileSelected] = useState(null)
  const [data, setData] = useState([])

  const handleUrl = (event)=>{
    const fileUrl = event.target.files[0]
    setFileSelected(URL.createObjectURL(fileUrl))
  }

  const handleSubmit = ()=>{
    const newData = {username,email,fileSelected}
    setData([...data, newData])
  }


  return (
    <>
      <div className="form-container">
        <div className="input-field">
          <label>Username</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-field">
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <label>Profile Image</label>
          <input accept='image/*' type='file' onChange={handleUrl} />
        </div>
        <button onClick={handleSubmit}>Upload Record</button>
      </div>
      <div className="data-container">
        {
          data.map(items => {
            return <div className='card'>
              <img src={items.fileSelected} />
              <h1>{items.username}</h1>
              <p>{items.email}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App