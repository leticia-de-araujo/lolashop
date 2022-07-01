import { useHistory } from "react-router-dom";
import { StyledHeader } from "./style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Header = () => {
  const history = useHistory();

  const handleClickGoToCart = () => {
    history.push("/cart");
  };

  const handleClickGoToHome = () => {
    history.push("/");
  };

  return (
    <StyledHeader>
      <IconButton color="primary" onClick={handleClickGoToHome}>
        <img
          src="https://i.ibb.co/1X6WmBc/L-2.png"
          alt="Logo"
          className="logo"
        />
      </IconButton>

      <IconButton color="primary" size="large" onClick={handleClickGoToCart}>
        <ShoppingCartIcon />
      </IconButton>
    </StyledHeader>
  );
};

export default Header;
