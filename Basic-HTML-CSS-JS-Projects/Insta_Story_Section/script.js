let arr = [
    {dp: "https://images.unsplash.com/photo-1750969315593-36b04578208c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1750969315593-36b04578208c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {dp: "https://images.unsplash.com/photo-1751227046868-2fff7ec5ebb7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1751104495904-174866993796?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp: "https://images.unsplash.com/photo-1750839713647-f845c59c3883?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1750839713647-f845c59c3883?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp: "https://images.unsplash.com/photo-1749587452511-d615311b854d?q=80&w=414&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1747592780287-fdc329229f2a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1747738305505-66f6e3781265?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    } 
]


let stories = document.querySelector('.stories')

let clutter = ""
arr.forEach(function(elem, idx){
    clutter += `<div class="story"> 
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})
stories.innerHTML = clutter

stories.addEventListener('click', function(dets){
    document.querySelector("#full-screen").style.display = 'block'
    document.querySelector("#full-screen").style.backgroundImage = `url("${arr[dets.target.id].story}")`

    setTimeout(() => {
        document.querySelector("#full-screen").style.display = 'none'
    }, 3000);
})

document.querySelector("#full-screen").addEventListener('click', function(){
        document.querySelector("#full-screen").style.display = 'none'
})