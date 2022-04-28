import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const Blog = () => {
  return (
    <div className="container">
      <h1 className="text-center">Blogs</h1>
      <h3 className="mt-5">
        {" "}
        1.Difference Between authorization and authentication
      </h3>
      <p>
        Simply put, authentication is the process of verifying who someone is,
        whereas authorization is the process of verifying what specific
        applications, files, and data a user has access to.
      </p>
      <ul>
        <li>
          Authentication verifies who the user is. and Authorization determines
          what resources a user can access.
        </li>
        <li>
          Authentication works through passwords, one-time pins, biometric
          information, and other information provided or entered by the user.
          And Authorization works through settings that are implemented and
          maintained by the organization.
        </li>
        <li>
          Authentication is visible to and partially changeable by the user. On
          the Other hand Authorization isn’t visible to or changeable by the
          user.
        </li>
      </ul>
      <h3 className="mt-5">
        2.Why I am using firebase? What other options do you have to implement
        authentication?
      </h3>
      <p>I am using firebase because, I am a beginner levels we developer and firebase is very easy to the beginners to learn. On the other hand firebase is very cheap than other third party authentication service provider that's why though we have many alternative of firebase but firebase is best.  </p>
        <p>
            We have another option to use database which would be kept into our web server where we will deploy our website. The database could be MySQL, PostgreSQL, MYSQLite, Mongo db etc. Here we have to do many encryption related task to protect user valuable information.      
        </p>
        <h3>3.Beside Authentication Firebase Also Provide:</h3>
        <ul>
            <li> Cloud FireStore </li>
            <li>Cloud Functions</li>
            <li>Cloud Messaging</li>
            <li>Cloud Storage</li>
            <li>Realtime database</li>

        </ul>

    </div>
  );
};

export default Blog;
