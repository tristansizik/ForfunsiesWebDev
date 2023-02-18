// import Button from "./Button"

export default function Header() {
    return(
        <div>
            <Button/>
            <p className= "relative m-0 p-4 bg-white-1 bg-opacity-50 \
                            border border-solid border-brown-1 border-opacity-30 \
                            rounded-12px">Does this make my life easier?</p>  
        </div>        
    );
}

function Button() {
    return (
        <button type="button"  className="top bg-lime-600 p-4 m-4">Press Me!</button>
    );
}