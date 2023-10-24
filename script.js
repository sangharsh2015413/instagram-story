var arr=[
    {dp:"https://images.unsplash.com/photo-1611042553484-d61f84d22784?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1621786030484-4c855eed6974?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1542996966-2e31c00bae31?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1674498702971-62d36afa99e1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1503104834685-7205e8607eb9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1616529735204-6799853ed36f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"}
]
var clutter="";
var storiyan=document.querySelector(".storiyan");
arr.forEach(function(elem,idx){
   clutter+=`<div class="story">
   <img id="${idx}" src="${elem.dp}" alt="story-logo">
</div>`
})
storiyan.innerHTML=clutter;
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`;
    
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none";
    },3000)
})