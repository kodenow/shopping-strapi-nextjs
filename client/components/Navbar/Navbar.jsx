import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material";
import {
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex justify-between py-[30px] px-[10px]	">
        <div className="left"></div>
        <div className="item">
          <img src="/US-flag.png" alt="" />
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="right">
          <div className="item">
            <Link href="/">Home</Link>
          </div>

          <div className="item">
            <Link className="link" href="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" href="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" href="/">
              Stores
            </Link>
          </div>
          <div className="item">
            <Link href="/products">products</Link>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;
