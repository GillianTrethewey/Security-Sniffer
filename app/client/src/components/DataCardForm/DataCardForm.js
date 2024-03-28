import Button from "../Button/Button.js";
import "./DataCardForm.scss";
import { useState } from "react";
import { postCard } from "../../data/postCard.js";
import { useNavigate } from "react-router-dom";

export const DataCardForm = ({ setCardList, onAddCard }) => {
  const navigate = useNavigate();

  const [newCard, setNewCard] = useState({
    name: "",
    description: "",
    includedPatterns: "",
    excludedPatterns: "",
    sensitivity: "LOW",
  });

  const handleChange = (event) => {
    setNewCard((prevNewCard) => ({
      ...prevNewCard,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitCard = async (event) => {
    event.preventDefault();
    console.log("Data sent to server:", newCard);
    try {
      const createdCard = await postCard(newCard);
      setCardList((prevCardList) => [createdCard, ...prevCardList]);
      navigate("/");

      setNewCard({
        name: "",
        description: "",
        includedPatterns: "",
        excludedPatterns: "",
        sensitivity: "LOW",
      });
    } catch (error) {
      console.error("Error creating card:", error);
      throw error;
    }
  };

  return (
    <section className="newcard">
      <h4 className="newcard__title">INPUT NEW CARD</h4>
      <div className="newcard__container">
        <form
          className="form"
          action=""
          method="post"
          onSubmit={handleSubmitCard}>
          <div className="form__group">
            <div className="form__wrapper">
              <label className="form__label" htmlFor="name">
                NAME
              </label>
              <input
                className="form__input"
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={newCard.name}
                placeholder="add a name"></input>
            </div>

            <div className="form__wrapper">
              <label className="form__label" htmlFor="description">
                DESCRIPTION
              </label>
              <input
                className="form__input"
                name="description"
                id="description"
                cols="30"
                rows="5"
                onChange={handleChange}
                value={newCard.description}
                placeholder="add a description"></input>
            </div>

            <div className="form__wrapper">
              <label className="form__label" htmlFor="includedPatterns">
                INCLUDED PATTERNS
              </label>
              <input
                className="form__input"
                type="text"
                name="includedPatterns"
                id="includedPatterns"
                onChange={handleChange}
                value={newCard.includedPatterns}
                placeholder="add patterns to include"></input>
            </div>

            <div className="form__wrapper">
              <label className="form__label" htmlFor="excludedPatterns">
                EXCLUDED PATTERNS
              </label>
              <input
                className="form__input"
                type="text"
                name="excludedPatterns"
                id="excludedPatterns"
                onChange={handleChange}
                value={newCard.excludedPatterns}
                placeholder="add patterns to exclude"></input>
            </div>

            <div className="form__wrapper">
              <label className="form__label" htmlFor="sensitivity">
                SENSITIVITY
              </label>
              <select
                className="form__input"
                type="text"
                name="sensitivity"
                id="sensitivity"
                onChange={handleChange}
                value={newCard.sensitivity}>
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="CRITICAL">CRITICAL</option>
              </select>
            </div>

            <div className="newcard___button-container">
              <Button
                btnClassName="button--submit"
                btnType="submit"
                btnLabel="SUBMIT"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
