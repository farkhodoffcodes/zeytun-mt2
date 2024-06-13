import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <h2>
        Header
        <Link to={'/login'}>
          login
        </Link>
      </h2>
    </div>
  )
}

export default Header
