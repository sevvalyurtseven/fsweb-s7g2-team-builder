import { Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <div style={{ padding: "10px" }}>
      <Nav justified pills>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup">Add Member</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
export default Header;
