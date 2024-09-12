import React from 'react'
// import React, { useState } from 'react'
// import { assets } from '../../assets/assets'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ContactUs.css'

const ContactUs = () => {
    // const [currState]= useState("ContactUs")

    const mapStyles = {
      height: "400px",
      width: "100%",
    };
  
    const defaultCenter = {
      lat: 27.7172, // Example coordinates (Kathmandu, Nepal)
      lng: 85.3240,
    };

  return (
    <div className="contact-us" id="contact-us">
    {/* <img onClick={()=>setShowContact(false)} src={assets.cross_icon} alt=''/> */}
    {/* <h2>{currState}</h2> */}
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" required/>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  </div>
  )
}

export default ContactUs