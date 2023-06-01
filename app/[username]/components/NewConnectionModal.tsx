"use client"

import { useState, useEffect } from "react";
import { fetchData } from "@/app/utils/fetchData";



export default function NewConnectionModal({ toggleModal } : {  toggleModal: () => void;}) {

    useEffect(() => {
        async function fetchPlatforms(){
          try {
            const appData = await fetchData("app");
            const platforms: Platform[] = appData.platforms;
            setPlatforms(platforms)
           
          } catch (err) {
            console.log('Error occurred when fetching app data');
          }
        };
      
        fetchPlatforms();
      }, []);
      

    
      const [platforms,setPlatforms]=useState<Platform[] | null>(null);
    const [formData, setFormData] = useState({ name: "", platform: "Select.." });

     const handlePlatformChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
         setFormData({
           ...formData,
           platform: event.target.value as string 
         });
       };
       const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         setFormData({ ...formData, name: event.target.value as string });
       };
       const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
         event.preventDefault();
         console.log(formData);
       };

  return (
    <div className="w-full h-full z-50 fixed inset-0 flex justify-center items-center ">
        <div className="flex justify-center rounded-lg bg-white w-full max-w-[600px] p-16 ">
            <div className="flex flex-col justify-center max-w-[350px] gap-8">
                
                <h2 className="font-euclid text-2xl font-bold text-center">{"Let's create a new connection"}</h2>
                <form className="flex flex-col w-full gap-4" >
                         <div>
                            <select
                              id="platform"
                              name="platform"
                              value={formData.platform}
                              onChange={handlePlatformChange}
                              className="border p-2 w-full rounded-lg"
                            
                            >
                                <option hidden value="">Select ...</option>
                              {platforms? platforms.map((platform) => (
                                            <option key={platform.name} value={platform.name}>
                                              {platform.name}
                                            </option>
                              )) : "loading"}
                            </select>
                        </div>
                        <div className="w-full flex items-center">
                            <label htmlFor="name">Name:</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleNameChange}
                              className="ml-2 w-full border p-2 rounded-lg"
                              placeholder="Name your platform"
                            
                            />
                        </div>
                       
                        <button type="submit" className="px-4 py-2 bg-slate-900 rounded-lg hover:bg-sky-500 text-white hover:text-black font-medium ">Add Connection</button>
                      </form>
            </div>
        </div>
      
      <div className="w-full h-full fixed inset-0 -z-10 bg-black opacity-40 cursor-pointer " onClick={toggleModal}></div>
    </div>
  );
}


