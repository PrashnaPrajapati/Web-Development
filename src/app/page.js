import Link from "next/link"
import Button from "@/components/Button";

export default function Home(){
  return(
        <div className="border-1 border-gray-500 bg-white text-black w-1/4 ml-auto mr-auto mt-5 p-4 rounded-md">
          <h1 className="text-2xl font-bold">This is title</h1>
          <p>This is description</p>
          
          <Button text="Save" className="bg-pink-300"/>
          <Button text="Cancel" className="bg-yellow-300"/>
          <Button text="Delete" className="bg-green-300"/>

        </div>
        
    )
}