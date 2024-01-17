import React from "react";
import axios from "axios";
import img from "../Header/Images/logo.jpg"
import "./Moderator.css";
import { useState, useEffect } from "react";

const baseURL = "https://entities-alpha.vercel.app/entity_details";

function Moderator() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;
 

  return (
    <div className="container-fluid col-10 container---div">
      <div className="entity--div">
        <h5 className="heading--entity">Moderators</h5>
      </div>
      <div className="row">
        {post.map(function (data) {
          return (
            <div class="col-lg-6 mb-4">
             
              {/* <div className="card-horizontal "> */}
                <div className="card  card---flexbox">
                  <div className="img-square-wrapper img--box">
                    <img className="img--img" src={img} alt=""   />
                  </div>
                  <div className="card-body body---card">
                    <h4 className="card-title">{data.name.toLowerCase()}</h4>
                    <p className="card-text">{data.snippet}</p>
                  </div>
                </div>
              </div>
            // </div>
           
          );
        })}
      </div>
    </div>
  );
}

export default Moderator;
