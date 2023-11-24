// function name(...names) {
//     return names;
// }
// // ... returns array
// console.log(name("a","b","c"));
 
// // passing objs in func 
// ob ={
//     id:2,
//     name:"kohli"
// }
// function object(obj) {
//     console.log("hello "+obj.name+" your id is "+obj.id);
// }
// object(ob)


// function chai() {
//     console.log(this);
// }

// chai()


// let user={
//     id:1,
//     name:function(){
//         console.log(`${this.id}`);
//     }
// }

// user.name()
// user.id=2 
// user.name()


// function chai(){
//     let id=1;
//     console.log(this.id);
// }
// chai()

// let chai = function (){
//     let id=2
//     console.log(this.id);
// }
// chai()

// let chai = () => {
//     let id=2
//     console.log(this.id);
// }
// chai()

function Video({ video }) {
    return (
      <div>
        <Thumbnail video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }