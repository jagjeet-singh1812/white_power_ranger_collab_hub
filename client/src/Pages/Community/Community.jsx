import React from 'react'
import "./Community.css"

const Community = () => {
    return (
        <>

            <center>
                <p style={{ fontSize: "30px" }}>Community Page</p>
                <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <input className='message' id="message" name="message" type="text"
                        // onChange={(e) => { setUserid(e.target.value) }}
                        // value={userid}
                        required
                        placeholder='Enter your message'
                    />
                    <div className="image-upload">
                        <input className='image-upload' id="img" name='img' type='file'></input>
                        <label for="img" class="image-upload-label"><i class='bx bxs-camera' style={{ fontSize: "2.6rem" }}></i></label>
                    </div>
                </div>

                <hr></hr>

                <div className="testimonial-box">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEtPfkVILRTlwikWWVXp2Qvqdbv8wc4rdhV3dxMkqew&s"}></img>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde, officiis deleniti sit accusamus quibusdam provident nam dolores cumque ullam.</p>
                </div>
                <div className="testimonial-box">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEtPfkVILRTlwikWWVXp2Qvqdbv8wc4rdhV3dxMkqew&s"}></img>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde, officiis deleniti sit accusamus quibusdam provident nam dolores cumque ullam.</p>
                </div>
                <div className="testimonial-box">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEtPfkVILRTlwikWWVXp2Qvqdbv8wc4rdhV3dxMkqew&s"}></img>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde, officiis deleniti sit accusamus quibusdam provident nam dolores cumque ullam.</p>
                </div>

            </center>

        </>
    )
}

export default Community