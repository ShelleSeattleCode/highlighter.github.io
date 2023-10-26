 
console.log('high light archive')

let obj = localStorage.getItem('recent_story') || {}
console.log(obj)

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

// console.log(get_stories)

let get_info = function(param){
    console.log(param)
 
}



let show_highlights = function(){
    
    console.log('show highlights')
 

    let ele_change = document.getElementById('change-headline')
    // console.log(ele_change)
    let headline_string =`<label for="">Change Headline?</label><input id="update-headline" type="text"><button class="block" onclick="update_headline()">Update</button>`
    // let headline_string = `<p>hello</p>`

    ele_change.innerHTML = headline_string
    // let highlights = JSON.parse(localStorage.getItem('recent_story'))
    let recent_story = JSON.parse(localStorage.getItem('recent_story'))
    // console.log(recent_story.splitByAddHash[0)
    // console.log(recent_story.highlight_arr)
    console.log( recent_story.splitByAddHash[recent_story.splitByAddHash.length-1] )
    // console.log(recent_story.url)
//    console.log(JSON.parse(recent_story))

//

let add_notes = document.getElementById('add-notes')
let htmlNotesSTring = ` <textarea name="" placeholder="Enter Your Notes Here" id="myText" cols="30" rows="10"></textarea><button class="block" id="submit-notes" onclick="add_notes()">Update</button>`
add_notes.innerHTML = htmlNotesSTring

//
    let highlights = recent_story.highlight_arr
    let ele_updated = document.getElementById('headline')
    ele_updated.innerHTML = recent_story.splitByAddHash[0]
    ele_author = document.getElementById('author')
    ele_author.innerHTML =  'Possible author/pub: ' + recent_story.splitByAddHash[recent_story.splitByAddHash.length-1] 
    console.log(recent_story.url)
    
    let ele_list = document.getElementById('highlights-here')
    let html_hl = ''
    let highlights_arr = []
    for(let i=0;i<highlights.length; i++){
        highlights_arr.push(highlights[i])
        html_hl += `<li>${highlights[i]}</li>`
    }
    ele_list.innerHTML = html_hl
    obj.highlights = highlights_arr

    ele_archive_option = document.getElementById('archive_option')
    let htmlArchiveOption = `<button class='block' onclick="archive_highlights()">Save These Highlights?</button>`

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
