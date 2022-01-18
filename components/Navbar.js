import style from "../styles/Navbar.module.css";
function Navbar() {
  return (
    <div className="px-5 py-2 d-flex justify-content-between align-items-center position-absolute fixed-top">
      <span> <pre className="logo-font">&lt;/mzaqi&gt;</pre> </span>
      <div className="navbar-font">
        <span className={`${style.shineAnimated} mx-4 cursor-pointer`}>About</span>
        <span className={`${style.shineAnimated} mx-4 cursor-pointer`}>Portofolio</span>
        <span className={`${style.shineAnimated} mx-4 cursor-pointer`}>Contact</span>
      </div>
    </div>
  )
}

export default Navbar
