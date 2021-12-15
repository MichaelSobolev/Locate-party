import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addInfo } from "../../redux/actions/user.actions";

export const AddInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [timezone, setTimezone] = useState("");
  const [prefered_schedule, setPrefered_schedule] = useState("");
  const [textarea, setTextarea] = useState("");

  console.log(name, email, image);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      //id: uuidv4(),
      name: name,
      email: email,
      image: image,
      age: age,
      gender: gender,
      experience: experience,
      timezone: timezone,
      prefered_schedule: prefered_schedule,
      textarea: textarea,
    };
    dispatch(addInfo(obj));

    fetch(`http://localhost:5000/users/db`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(obj),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="name"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="email"
      />
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        placeholder="image"
      />
      <input
        type="text"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="age"
      />
      <input
        type="text"
        onChange={(e) => setGender(e.target.value)}
        value={gender}
        placeholder="gender"
      />
      <input
        type="text"
        onChange={(e) => setExperience(e.target.value)}
        value={experience}
        placeholder="experience"
      />
      <input
        type="text"
        onChange={(e) => setTimezone(e.target.value)}
        value={timezone}
        placeholder="timezone"
      />
      <input
        type="text"
        onChange={(e) => setPrefered_schedule(e.target.value)}
        value={prefered_schedule}
        placeholder="prefered schedule"
      />
      <textarea
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
      />
      <button type="submit">add info</button>
    </form>
  );
};
