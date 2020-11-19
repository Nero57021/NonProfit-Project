// import React from 'react';
// export default class FetchRandomUser extends React.Component {
//     state = {
//       loading: true,
//       person: null,
//     };
  
//     async componentDidMount() {
//       const url = "http://172.20.30.172:8080/from";
//       const response = await fetch(url);
//       const data = await response.json();
//       this.setState({ person: data.messageId, loading: false });
//       console.log(response);
//       console.log("All good");
//     }

    
//     render() {
//       if (this.state.loading) {
//         return <div>loading...
//           website may be down
//         </div>;
//       }
  
//       if (!this.state.person) {
//         return <div>didn't get a person</div>;
//       }
//       if(this.state.messageID == '14')
//         {
//             return <div>Its a dude</div>
//         }
//       return (
//         <div>
//         </div>
//       );
//     }
//   }
//Became Unused - don't discard though