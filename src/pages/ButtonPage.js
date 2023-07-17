import Button from "../components/Button";
import { GiFireRay, GiClick } from "react-icons/gi";

function ButtonPage() {
  const handleClick = () => {
    console.log("I am Primary");
  };
  return (
    <div>
      <div>
        <Button onClick={handleClick} className="mb-5" outline primary rounded>
          <GiClick />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary>Hello There!</Button>
      </div>
      <div>
        <Button rounded success>
          I am a Button
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GiFireRay />
          Something
        </Button>
      </div>
      <div>
        <Button className="mt-5" danger>
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
