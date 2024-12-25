import style from './CSS/UserProfile.module.css'
function UserProfile({nam,pro}) {
  return (
    <>
      <div>
        <div className={style.card}>
          <figure>
            <img
              className="img-Style"
              src="https://picsum.photos/200"
              alt="random"
            />
          </figure>
          <figcaption>
              <h4>Name : {nam}</h4>
              <p>Proffesion : {pro}</p>
            </figcaption>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
