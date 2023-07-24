import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, friends }) {
  //function User(props) { de alabilirim sonra props.name olarak kullanırım
  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname}` : "Giriş yapınız"}</h1>

      {friends.map((friendName, index) => (
        //burada bir prop gerekiyor ki listelemede react performans kaybı yaşamasın
        //div e verdiğimiz key aslında
        <div key={index}>
          {index} - {friendName}
        </div>
      ))}
    </>
  );
}

//scrit typing için
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default User;
