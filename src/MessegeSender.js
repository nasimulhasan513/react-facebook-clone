import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React,{useState} from 'react'
import './styles/MessegeSender.css'
import {useStateValue} from './StateProvider'
import {db} from './firebase'
import firebase from 'firebase'
function MessegeSender() {
    const [{user},dispatch] = useStateValue()
    const [input,setInput] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        //some clever db stuff
        let post = {
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl

        }
        db.collection("posts").add(post)
        console.log(post);
        setInput('')
        setImageUrl('')
    }
    return (
        <div className="messageSender">
            <div className="messegeSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                     value={input}
                     onChange={e=>setInput(e.target.value)}
                     className="messegeSender__input" type="text" placeholder="Whats on your mind?"/>
                    <input
                    value={imageUrl}
                     onChange={e=>setImageUrl(e.target.value)}
                     className="messegeSender__input" type="text" placeholder="Paste image url"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messegeSender__bottom">
                <div className="messegeSender__option">
                    <Videocam style={{color: 'red'}}/>
                    <h3>Live Video</h3>

                </div>
                <div className="messegeSender__option">
                    <PhotoLibrary style={{color: 'green'}}/>
                    <h3>Photo/Video</h3>
                    
                </div>
                <div className="messegeSender__option">
                    <InsertEmoticon style={{color: 'orange'}}/>
                    <h3>Feeling/Activity</h3>
                    
                </div>
            </div>
            
        </div>
    )
}

export default MessegeSender
