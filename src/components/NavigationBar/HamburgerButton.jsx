export default function HamburgerButton({ onClick, isMenuOpen }) {
  return (
    <button onClick={onClick}>
      <img
        className={`toggle ${isMenuOpen ? "hidden" : "block"}`}
        src="/images/icons/open-menu.png"
        width="48"
        height="48"
        alt="Open Menu"
      />
      <img
        className={`toggle ${isMenuOpen ? "block" : "hidden"}`}
        src="/images/icons/close-menu.png"
        alt="Close Menu"
        width="48"
        height="48"
      />
    </button>
  );
}
