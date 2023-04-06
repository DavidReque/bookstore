import { useState } from "react";
import { useAppContext } from "../store/store";
import Layaout from "../components/Layaout";
import { useNavigate } from "react-router-dom";
import { buttonStyle, inputStyles } from "../Styles/styles";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;

      default:
        break;
    }
  };

  const handleOnChangeFile = (e) => {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    //TODO: Mandar a registrar libro
    store.createItem(newBook);
    navigate("/");
  };

  return (
    <Layaout>
      <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Title</div>
          <input
            style={inputStyles.input}
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Author</div>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
            style={inputStyles.input}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>
            {!!cover ? <img src={cover} width="200" alt="preview" /> : ""}
          </div>
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Introduction</div>
          <input
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
            style={inputStyles.input}
          />
        </div>

        <div>
          <div style={inputStyles.title}>Completed</div>
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Review</div>
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
            style={inputStyles.input}
          />
        </div>

        <input style={buttonStyle} type="submit" value="Register book" />
      </form>
    </Layaout>
  );
};

export default Create;
