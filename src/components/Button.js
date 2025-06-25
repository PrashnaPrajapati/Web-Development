export default function Button({text, className}){
    return(
        
        <button className={`${className} mx-2 text-white mt-4 px-4 py-2 rounded-md`}>{text}</button>
    )
}