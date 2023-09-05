import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="postInfo">
        <div className="postCast">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor lorem</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure, quod, necessitatibus rerum cupiditate praesentium debitis dolorum quae alias sint iste doloribus ab placeat consectetur corporis, amet vitae quisquam! Earum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure, quod, necessitatibus rerum cupiditate praesentium debitis dolorum quae alias sint iste doloribus ab placeat consectetur corporis, amet vitae quisquam! Earum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure, quod, necessitatibus rerum cupiditate praesentium debitis dolorum quae alias sint iste doloribus ab placeat consectetur corporis, amet vitae quisquam! Earum.
      </p>

        
        
    </div>
  )
}
