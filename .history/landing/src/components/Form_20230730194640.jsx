import React, { useState } from "react";

function Form() {
  const [heroImage, setHeroImage] = useState(null);
  const [fullPageImage, setFullPageImage] = useState(null);
  const [additionalImage, setAdditionalImage] = useState(null);
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [websiteName, setWebsiteName] = useState("");
  const [email, setEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [telegram, setTelegram] = useState("");
  const [skype, setSkype] = useState("");
  const [behance, setBehance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heroImage", heroImage);
    formData.append("fullPageImage", fullPageImage);
    formData.append("additionalImage", additionalImage);
    formData.append("username", username);
    formData.append("companyName", companyName);
    formData.append("websiteName", websiteName);
    formData.append("email", email);
    formData.append("companyWebsite", companyWebsite);
    formData.append("instagram", instagram);
    formData.append("telegram", telegram);
    formData.append("skype", skype);
    formData.append("behance", behance);

    fetch("/submit-form", {
      method: "POST",
      body: formData,
      // Set headers to indicate that we are uploading files
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data saved to the database");
        } else {
          console.error("Error saving data to the database");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      <div>
        <label htmlFor="heroImage">Hero Section Image:</label>
        <input
          type="file"
          id="heroImage"
          accept="image/*"
          onChange={(e) => setHeroImage(e.target.files[0])}
        />
      </div>
      <div>
        <label htmlFor="fullPageImage">Full Page Image:</label>
        <input
          type="file"
          id="fullPageImage"
          accept="image/*"
          onChange={(e) => setFullPageImage(e.target.files[0])}
        />
      </div>
      <div>
        <label htmlFor="additionalImage">Additional Image:</label>
        <input
          type="file"
          id="additionalImage"
          accept="image/*"
          onChange={(e) => setAdditionalImage(e.target.files[0])}
        />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="websiteName">Website Name:</label>
        <input
          type="text"
          id="websiteName"
          value={websiteName}
          onChange={(e) => setWebsiteName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="companyWebsite">Company Website:</label>
        <input
          type="url"
          id="companyWebsite"
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="instagram">Instagram:</label>
        <input
          type="url"
          id="instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telegram">Telegram:</label>
        <input
          type="url"
          id="telegram"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="skype">Skype:</label>
        <input
          type="url"
          id="skype"
          value={skype}
          onChange={(e) => setSkype(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="behance">Behance:</label>
        <input
          type="url"
          id="behance"
          value={behance}
          onChange={(e) => setBehance(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
