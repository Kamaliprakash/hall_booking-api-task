let homePage = (req,res)=>{
    try{
    res.status(200).send(   `<body style="background-image: linear-gradient(217deg, rgba(249, 182, 202, 0.5) 0%, rgba(249, 182, 202, 0.5) 14.286%,rgba(235, 169, 206, 0.5) 14.286%, rgba(235, 169, 206, 0.5) 28.572%,rgba(220, 157, 210, 0.5) 28.572%, rgba(220, 157, 210, 0.5) 42.858%,rgba(206, 144, 214, 0.5) 42.858%, rgba(206, 144, 214, 0.5) 57.144%,rgba(192, 131, 217, 0.5) 57.144%, rgba(192, 131, 217, 0.5) 71.43%,rgba(177, 119, 221, 0.5) 71.43%, rgba(177, 119, 221, 0.5) 85.716%,rgba(163, 106, 225, 0.5) 85.716%, rgba(163, 106, 225, 0.5) 100.002%),linear-gradient(108deg, rgb(184, 35, 128) 0%, rgb(184, 35, 128) 14.286%,rgb(190, 62, 123) 14.286%, rgb(190, 62, 123) 28.572%,rgb(197, 88, 117) 28.572%, rgb(197, 88, 117) 42.858%,rgb(203, 115, 112) 42.858%, rgb(203, 115, 112) 57.144%,rgb(209, 142, 107) 57.144%, rgb(209, 142, 107) 71.43%,rgb(216, 168, 101) 71.43%, rgb(216, 168, 101) 85.716%,rgb(222, 195, 96) 85.716%, rgb(222, 195, 96) 100.002%); "
    <div style="background-color:white; color: black; padding:18px;border-radius:25px;margin:13em">
   <h1 style="text-align:center;">Hall Booking API</h1>
    
        <h2 style="text-align:center;color:white">“Traveling is about the journey, but a good hotel is about the destination.”</h2>
         <h3> <a style="margin-left:45%" ; href="https://www.makemytrip.com/flights/?cmp=SEM|D|DF|B|Brand|B_M_Makemytrip_Search_Exact|Brand_Top_5_Exact|Expanded|&s_kwcid=AL!1631!3!!e!!o!!makemytrip;&ef_id=:G:s" target="_blank">Book now </a> </h3>
            
    </div>
    </body>`)}
    catch(error){
        res.status(500).send("Internal Server Error")
    }
     
    
}
export default { homePage }