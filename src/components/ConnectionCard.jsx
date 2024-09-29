
const ConnectionCard = ({connectedUser}) => {

    const {firstName,lastName,skills,about}=connectedUser
  return (
    <div className="card card-side bg-base-300 w-1/2 mx-auto shadow-xl mt-5">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        alt="Movie" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName} {lastName}</h2>
      <p>{about}</p>
    </div>
  </div>
  )
}

export default ConnectionCard
