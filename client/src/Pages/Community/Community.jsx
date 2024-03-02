import React from 'react'
import "./Community.css"
import NavBarHome from '../../Components/NavBarHome/NavBarHome'

const Community = () => {
    return (
        <>

        <NavBarHome></NavBarHome>

        <br></br>
        <br></br>
        <br></br>
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
                    <p>{JSON.parse(localStorage.getItem("user")).nickname} has Sucessfully registered to the website. Everyone welcome {JSON.parse(localStorage.getItem("user")).nickname}!!!</p>
                </div>
                <div className="testimonial-box">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3QJl4a23ScOs1khrTGAcgfYPKvF3cDXBWw&usqp=CAU"}></img>
                    <hr></hr>
                    <p>Congratulations Jagjeet!! for completing the 3 day streak at Thrive
</p>
                </div>
                <div className="testimonial-box">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcz33nltQoK9rG6mdMBhRnr0L1yxIvvLeQiA&usqp=CAU"}></img>
                    <hr></hr>
                    <p>Congratulations Abhishek!! for completing the annual challange Thrive
</p>
                </div>

            </center>

        </>
    )
}

export default Community