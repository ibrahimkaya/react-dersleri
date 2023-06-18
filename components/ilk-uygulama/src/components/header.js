const switchBool = true;

function Header() {
  return (
    <div>
      <h1>
        {" "}
        Heder div içinde.
        {switchBool && `Koşullu renderlama ${switchBool}`}
      </h1>
    </div>
  );
}

export default Header;
