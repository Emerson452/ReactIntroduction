import { Primary } from "./Primary";
import { Secondary } from "./Secondary";

const Button = ({children, action}) => {
  return (
    <div onClick={action}>
      {children}
    </div>
  );
};
 Button.Primary = Primary;
 Button.Secondary = Secondary;

 export default Button;