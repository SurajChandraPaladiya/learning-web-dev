let relation  = document.querySelector("h5")
let addFriend = document.querySelector("#add")
let check = 0

// let removeFriend = document.querySelector("#remove")
// addFriend.addEventListener('click', function(){
//     relation.innerHTML = "Friends"
//     relation.style.color = 'green'
// })

// removeFriend.addEventListener('click', function(){
//     relation.innerHTML = "Stranger"
//     relation.style.color = 'red'
// })


addFriend.addEventListener('click', function(){
    if(check == 0){
        relation.innerHTML = "Friends"
        relation.style.color = 'green'
        addFriend.innerHTML = "Remove"
        addFriend.style.backgroundColor = "#dadada"
        addFriend.style.color = "#111"

        check = 1
    }
    else{
        relation.innerHTML = "Stranger"
        relation.style.color = 'red'
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "cornflowerblue"
        addFriend.style.color = "white"

        check = 0
    }
})

