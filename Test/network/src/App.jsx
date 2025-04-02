import React from "react";
import useNetworkStatus from "./useNetworkStatus";
import ThreeScene from "./Threescence";
import { Preview } from "./Preview";
const App = () => {
  const networkStatus = useNetworkStatus();

  return (
    // <div className="min-h-screen bg-gray-900 text-white">
    //   <ThreeScene />
    //   <div className="absolute top-0 left-0 p-4">
    //     <h1 className="text-4xl font-bold mb-8">Network Status</h1>
    //     <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
    //       <div className="space-y-4">
    //         <p>
    //           <span className="font-semibold">Online:</span>{" "}
    //           {networkStatus.online ? "Yes" : "No"}
    //         </p>
    //         {/* Add other network status fields */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Preview/>
  );
};

export default App;