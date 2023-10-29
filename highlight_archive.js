

let obj = localStorage.getItem('recent_story') || {}
// console.log(obj)

let get_stories = function(){

    console.log('getting stories')
    let archive = JSON.parse(localStorage.getItem('story'))
    console.log(archive)
//  

let ele_archive = document.getElementById('archive')
let ele_headline = document.getElementById('headline')

htmlString2 = ''
// ele_headline.innerHTML = archive.headline

for(let i=0;i<archive.length; i++){
    htmlString2+=`<li><a class"btn" onclick="get_info(${i})">${archive[i].headline}</a></li>`
    console.log(archive[i].headline)
}

ele_archive.innerHTML = htmlString2

}


let get_info = function(param){
    console.log(param)
 
}

function removeDuplicates(arr){
    return arr.filter((item, 
      index) => arr.indexOf(item) === index)
  }

let show_highlights = function(){
 

    let ele_change = document.getElementById('change-headline')
 
    let headline_string =`<label for="">Change Headline?</label><input id="update-headline" type="text"><button class="block" onclick="update_headline()">Update</button>`
 

    ele_change.innerHTML = headline_string
    // let highlights = JSON.parse(localStorage.getItem('recent_story'))
    let recent_story = JSON.parse(localStorage.getItem('recent_story'))
  
    console.log( recent_story.splitByAddHash[recent_story.splitByAddHash.length-1] )
  

//

let add_notes = document.getElementById('add-notes')
let htmlNotesSTring = ` <textarea name="" placeholder="Enter Your Notes Here" id="myText" cols="30" rows="10"></textarea><button class="block" id="submit-notes" onclick="add_notes()">Update</button>`
add_notes.innerHTML = htmlNotesSTring

//
    let highlights = removeDuplicates(recent_story.highlight_arr)

    console.log(highlights)
    let ele_updated = document.getElementById('headline')
    ele_updated.innerHTML = recent_story.splitByAddHash[0]
    ele_author = document.getElementById('author')
    ele_author.innerHTML =  'Possible author/pub: ' + recent_story.splitByAddHash[recent_story.splitByAddHash.length-1] 
    console.log(recent_story.url)
    
    let ele_list = document.getElementById('highlights-here')
    let html_hl = ''
    let highlights_arr = []
    let apostrophe = /'/
    let replacement_apostrophe = "'"
    let sub = 'yes'
    for(let i=0;i<highlights.length; i++){
        highlights_arr.push(highlights[i])
        // console.log(highlights[i].length)

     
        html_hl += `<li><a class="btn" onclick='star(${i})' >${highlights[i]} </a> <button class = "delete" onclick='delete_highlight(${i} )'>delete</button></li> <p class="tag-here" ></p>  `

    }


    ele_list.innerHTML = html_hl
    obj.highlights = highlights_arr

    ele_archive_option = document.getElementById('archive_option')
    let htmlArchiveOption = `<button class='block'  onclick="archive_highlights()">Save These Highlights?</button>`

    ele_archive_option.innerHTML = htmlArchiveOption
}
 

let archive_highlights = function(){
    // console.log('arvhiving')
    // console.log(obj)  
    let to_archive_arr = JSON.parse(localStorage.getItem('story')) || []
    to_archive_arr.push(JSON.parse(obj))
    localStorage.setItem('story', JSON.stringify(to_archive_arr))
    console.log( to_archive_arr = JSON.parse(localStorage.getItem('story')).length)
   
 
}


let update_headline = function(){
    console.log('update headline')
    let updated_headline = document.getElementById("update-headline").value
    console.log(updated_headline)
    let ele_updated = document.getElementById('headline')
    ele_updated.innerHTML = updated_headline
}




let add_notes = function(){
let notes = document.getElementById('myText').value
let ele_added_notes = document.getElementById('added-notes')
ele_added_notes.innerHTML = `<p>Additional Notes: ${notes}</p>`

console.log(notes)
}


let delete_highlight = function(param){
    console.log(param)
    // let index = arr.indexOf(param)
    console.log(param)
    let li = document.getElementsByTagName('li').item(param)
   console.log(document.getElementsByTagName('li'))


    // li.remove()
    // console.log(index)

//   let removeItem = arr.filter((item)=>{
//     return item != param
//   })


}

let star = function(param){

console.log(param)
let li = document.getElementsByTagName('li').item(param)
li.classList.toggle('star')

console.log(li.textContent)

let phrase = ''
let i = 0;
let hold = []
const group_cap = /(?=[A-Z]+)/g
const cap = /[A-Z]/g
let lower_case = []
let word = li.textContent.split(' ')
// console.log(word)
// console.log(li.textContent.length)

new_word =[]
for(let j = 0; j<word.length; j++){
    if(word[j] !== ''){
        new_word.push(word[j])
    }
}

// console.log(new_word)
while (i<=new_word.length){
    if(group_cap.test(new_word[i])){
        phrase+=new_word[i] + ' '
    }

    else if( !group_cap.test(new_word[i])){
    //    console.log(new_word[i])
        hold.push(phrase)
        phrase = ''

        if(new_word[i] == undefined){
            // console.log('undefined')
        }
        else{
            lower_case.push(new_word[i])
        }
    }

    i+=1
}

let new_hold = []
// let ele_tag = document.getElementById('tag-here')
let ele_tag = document.getElementsByClassName('tag-here')
let htmlTag = ''
for(i=0;i<hold.length; i++){
    if(hold[i] != ''){

        new_hold.push(hold[i])
           

    }
   
}

let tags = []

for(i=0; i<new_hold.length; i++){
    htmlTag += `<a class='btn'>${new_hold[i] +', '}</a> ` 
 
    tags.push(new_hold[i])
    
}
 
ele_tag[param].innerHTML = htmlTag
 
ele_all = document.getElementById('all-tags')
ele_all.innerHTML = tags
}
