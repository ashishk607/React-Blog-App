import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum, dolor sit amet 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Name</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores culpa deserunt doloribus impedit quae vel sunt error unde! A, alias quisquam perferendis porro exercitationem ea sapiente saepe vero reprehenderit quasi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores culpa deserunt doloribus impedit quae vel sunt error unde! A, alias quisquam perferendis porro exercitationem ea sapiente saepe vero reprehenderit quasi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores culpa deserunt doloribus impedit quae vel sunt error unde! A, alias quisquam perferendis porro exercitationem ea sapiente saepe vero reprehenderit quasi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores culpa deserunt doloribus impedit quae vel sunt error unde! A, alias quisquam perferendis porro exercitationem ea sapiente saepe vero reprehenderit quasi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores culpa deserunt doloribus impedit quae vel sunt error unde! A, alias quisquam perferendis porro exercitationem ea sapiente saepe vero reprehenderit quasi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores culpa deserunt doloribus impedit quae vel sunt error unde! A, alias quisquam perferendis porro exercitationem ea sapiente saepe vero reprehenderit quasi!
            </p>
        </div>

    </div>
  )
}
