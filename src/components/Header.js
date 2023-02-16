// import Button from "./Button"

export default function Header() {
    return(
        <div>
            <Button/>
            <p>Does this make my life easier?</p>  
        </div>        
    );
}

function Button() {
    return (
        <button type="button"  className="top bg-lime-600 p-4 m-4">Press Me!</button>
    );
}