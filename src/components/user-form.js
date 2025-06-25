export default function userform({text, className}){
    return(
        
        <input type="text"  
            className="border-2 border-gray-300" 
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}/>
            
    )
}