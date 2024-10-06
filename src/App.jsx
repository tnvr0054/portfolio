import { useState } from 'react'
import './App.css'
import FileBase from 'react-file-base64'
import { toast } from 'react-toastify'

function App() {
  const [data, setData] = useState([])
  const MAX_SIZE = 300 * 1024 * 1024; // Set Video Size in Bytes (Upto 300 MB)
  const [video, setVideo] = useState({
    videoTitle: "",
    channelName: "",
    channelLogo: "",
    videoUrl: ""
  })

  const inputHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setVideo({
      ...video,
      [name]: value
    })
  }

  const uploadVideo = ({ base64, type }) => { // handling video file selection with type validation
    if (type && type.includes("video/")) {
      const fileSize = atob(base64.split(',')[1]).length;
      if (fileSize <= MAX_SIZE) {
        setVideo({
          ...video,
          videoUrl: base64
        })
      } else {
        toast.warn("Please select small video file")
      }

      console.log(fileSize)
    } else {
      toast.warn('Please select a valid video file.')
    }
  }

  const uploadImage = ({ base64, type }) => { // handling image file selection with type validation
    if (type && type.includes("image/")) {
      setVideo({
        ...video,
        channelLogo: base64
      })
    } else {
      toast.warn("Please select a valid image file.")
    }
  }

  const handleSubmit = () => {
    setData([...data, video])
    toast.success("Awww! video uploaded successfully!")
  }

  return (
    <>
      <div className="youtube-container">
        <div className="video-upload-form-container">
          <div className="form-container">
            <h1>Youtube <span>R</span>eturn</h1>
            <p>Please upload your video file in MP4 format, up to 300 MB.</p>
            <div className="video-upload-form">
              <div className="input-field">
                <label>Video title</label>
                <input type='text' placeholder='Amazing Nature Video' value={video.videoTitle} name='videoTitle' onChange={inputHandler} />
              </div>
              <div className="input-field">
                <label>Channel name</label>
                <input type='text' placeholder='Nature Channel' value={video.channelName} name='channelName' onChange={inputHandler} />
              </div>
              <div className="input-field">
                <label>Channel logo</label>
                <FileBase type="file" accept="image/*" multiple={false} onDone={uploadImage} />
              </div>
              <div className="input-field">
                <label>Video file</label>
                <FileBase type="file" accept="video/*" multiple={false} onDone={uploadVideo} />
              </div>
              <div className="button">
                <button onClick={handleSubmit}>Upload</button>
              </div>
            </div>
          </div>
        </div>

        <div className="video-preview-container"> {/* This code will show videos on webpage */}
          {
            data.map(item => {
              return <div className="video-card">
                <div className="video-card-header">
                  <img src={item.channelLogo} alt="Channel Logo" className="channel-logo" />
                  <div className="channel-info">
                    <h3 className="video-title">{item.videoTitle}</h3>
                    <p className="channel-name">{item.channelName}</p>
                  </div>
                </div>
                <div className="video-container">
                  <video controls autoPlay>
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>
                </div>
              </div>
            })
          }
        </div>

      </div>
    </>
  )
}

export default App