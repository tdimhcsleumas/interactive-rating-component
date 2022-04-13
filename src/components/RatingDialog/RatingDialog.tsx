import "./RatingDialog.css"
import iconStar from "./icon-star.svg";

const RatingDialog = () => {
    const options = [1, 2, 3, 4, 5];
    return (
    <div>
        <div className="Card">
            <div className="Emblem">
                <img src={iconStar} alt="Star icon." />
            </div>
            <h1>
                How did we do?
            </h1>
            <p>
                Please let us know how we did with your
                support request. All feedback is appreciated
                to help us improve our offering!
            </p> 
            <div className="Button-container">
            {options.map(elem => (
                <div className="Emblem">{elem}</div>
            ))}
            </div>
            <div className="Submit-button">
                <p>Submit</p>
            </div>
        </div>
    </div>
);
};

export default RatingDialog;
