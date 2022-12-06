import { useState } from "react";

function BioForm({ user, setUser, setShowBioForm }) {
    const [bio, setBio] = useState("")
    // const [formData, setFormData] = useState("")


  function handleSubmit(event) {
    event.preventDefault();

    const newBio = {
      bio: bio,
      id: user.id
    };

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBio),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        event.target.reset()
      });
      setShowBioForm(false)
  }

  return (
    <div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            content="content"
            placeholder="Add to your personal bio..."
            // value={formData.content}
            onChange={(e) => setBio(e.target.value)}
          />
          <br></br>
          <button
            className="bg-orange-200 p-1 text-xs rounded-md border-2 border-orange-500 hover:scale-105"
            type="submit"
            value="Share your bio"
            // onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BioForm;
