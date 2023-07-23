function User({ name, surname, isLoggedIn, friends }) {
  //function User(props) { de alabilirim sonra props.name olarak kullanırım
  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname}` : "Giriş yapınız"}</h1>

      {friends.map((friendName, index) => (
        //burada bir prop gerekiyor ki listelemede react performans kaybı yaşamasın
        <div key={index}>
          {index} - {friendName}
        </div>
      ))}
    </>
  );
}

export default User;
