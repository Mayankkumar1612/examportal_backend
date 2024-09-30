// export default function Layout() {
//   return (
//     <div className="col-md-6">
//       <ul className="nav nav-tabs" id="myTab">
//         <li className="nav-item">
//           <a className="nav-link active" data-toggle="tab" href="#home">
//             home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" data-toggle="tab" href="#contact">
//             contact
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" data-toggle="tab" href="#link">
//             link
//           </a>
//         </li>
//       </ul>
//       <div className="tab-content py-3">
//         <div className="tab-pane fade show active" id="home">
//           cndjcbdjcbdjbdvjdvjdncjdwnclw
//         </div>
//         <div className="tab-pane fade " id="contact">
//           548945689+5628+9562
//         </div>
//         <div className="tab-pane fade " id="link">
//           CTFVYGBUHNIJCTFVYGBHUNJIM
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';

// export default function Layout() {
//   const [activeTab, setActiveTab] = useState('home');

//   return (
//     <div className="col-md-6">
//       <ul className="nav nav-tabs" id="myTab">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
//             onClick={() => setActiveTab('home')}
//           >
//             Home
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
//             onClick={() => setActiveTab('contact')}
//           >
//             Contact
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'link' ? 'active' : ''}`}
//             onClick={() => setActiveTab('link')}
//           >
//             Link
//           </button>
//         </li>
//       </ul>
//       <div className="tab-content py-3">
//         <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="home">
//           cndjcbdjcbdjbdvjdvjdncjdwnclw
//         </div>
//         <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} id="contact">
//           548945689+5628+9562
//         </div>
//         <div className={`tab-pane fade ${activeTab === 'link' ? 'show active' : ''}`} id="link">
//           CTFVYGBUHNIJCTFVYGBHUNJIM
//         </div>
//       </div>
//     </div>
//   );
// }
