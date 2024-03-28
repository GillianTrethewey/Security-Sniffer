import "./DataCard.scss";
import { Link } from "react-router-dom";

export const DataCard = ({ id, card, onDeleteCard, isDeleting}) => {
  const displayWithQuotes = (value) => {
    return value === "" ? `"${value}"` : value;
  };

  return (
    <Link to={`/cards/${card.id}`} className="card__router-link">
      <li key={card.id} className="datacard-list__li">
        <div className="card__container">
          <div className="card__text">
            <p className="card__text">{id}</p>
            <p className="card__text">Name: {card.name}</p>
            <p className="card__text">Description: {card.description}</p>
            <p className="card__text">
              Excluded Patterns: {displayWithQuotes(card.excludedPatterns)}
            </p>
            <p className="card__text">Included Patterns: {card.includedPatterns}</p>
            <p className="card__text">Sensitivity: {card.sensitivity}</p>
            
          </div> 
          { isDeleting ?
            <button className="button--delete" onClick={() => onDeleteCard(card.id)}>DELETE</button>
       : null }
       
            </div>
      </li>
    </Link>
  );
};

export default DataCard;
