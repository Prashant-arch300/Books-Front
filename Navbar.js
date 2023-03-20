import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Book Management</Link>
      <Link to="/" onClick={() => { localStorage.removeItem('token'); }}>Logout</Link>
    </nav>
  );
}

export default Navbar;
