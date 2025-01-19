

// function Card({ content }) {

//     const availableFlag = ["en", "it"]
//     function getFlag() {
//         return availableFlag.includes(content.original_language) ?
//             `./img/${content.original_language}.png`
//             : "./img/placeholder.png"
//     }

//       option 2
//     const availableFlag = ["en", "it"]
//     function getFlag() {
//      let flag = availableFlag.includes(content.original_language) ? 
//      `${content.original_language}.png`
//       : "placeholder.png";
//     return `./img/${flag}`}

//     simple function not dynamic
//     function printFlags() {
//         let flag;
//         if (content.original_language === "en") {
//             flag = './img/en.png'
//         }
//         return flag;
//     }

//     function printStars() {
//         const vote = Math.ceil(content.vote_avarage / 2)
//         let stars = []
//         for (let i = 0; i < 5; i++) {
//             if (i < vote) {
//                 stars.push(<i key={i} className="fa-solid fa-star"></i>)
//             } else {
//                 stars.push(<i key={i} className="fa-regular fa-star"></i>)
//             }
//             return stars
//         }
//     }

//     return (
//         <div>
//             <img src={content.poster_path} alt="" />
//             <h3>{content.title}</h3>
//             <p>{content.original_language}</p>
//             {Math.ceil(content.vote_avarage / 2)}
//             <img src={getFlag()} alt="" />
//             <span>{printStars()}</span>
//         </div>
//     )
// }

// export default Card