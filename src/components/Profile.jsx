import { useSelector } from "react-redux"


const Profile = () => {
  const profile=useSelector(store=>store.user)
  console.log(profile)

 if(profile===null) return
  return (
    
    <div className="flex  justify-center mt-8">
         <div className="card bg-base-300 w-96 shadow-xl mx-4">
            <div className="card-body">
                <label>FirstName</label>
                <input className="rounded-lg bg-white text-black mb-4"/>
                <label>LasttName</label>
                <input className="rounded-lg bg-white text-black mb-4"/>
                <label>Gender</label>
                <input className="rounded-lg bg-white text-black mb-4"/>
                <label>About</label>
                <input className="rounded-lg bg-white text-black mb-4"/>
                <label>Skills</label>
                <input className="rounded-lg bg-white text-black mb-4"/>
                <label>PhotoUrl</label>
                <input className="rounded-lg bg-white text-black mb-4"/>

              </div>
          </div>






          <div className="card bg-base-300 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{profile.firstName} {profile.lastName} </h2>
                  <p>{profile.age} {profile.gender}</p>
                  <p>{profile.about}</p>
                  <p>{profile.skills}</p>
                </div>
          </div>

    </div>
  )
}

export default Profile
