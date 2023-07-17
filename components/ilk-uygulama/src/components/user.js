function User({ name, surname, isLoggedIn }) {
  //function User(props) { de alabilirim sonra props.name olarak kullanırım
  return <h1>{isLoggedIn ? `${name} ${surname}` : "Giriş yapınız"}</h1>;
}

export default User;
