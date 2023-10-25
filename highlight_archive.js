 
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
    console.log('ajfeoisjfoaijfpoeasjf')
}



let show_highlights = function(){
    console.log('show highlights')
    // let highlights = JSON.parse(localStorage.getItem('recent_story'))
    let recent_story = JSON.parse(localStorage.getItem('recent_story'))
    console.log(recent_story.highlight_arr)
//    console.log(JSON.parse(recent_story))
    let highlights = recent_story.highlight_arr
    
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
    console.log('arvhiving')
    console.log(obj)  
    let to_archive_arr = JSON.parse(localStorage.getItem('story')) || []
    to_archive_arr.push(JSON.parse(obj))
    localStorage.setItem('story', JSON.stringify(to_archive_arr))
    console.log( to_archive_arr = JSON.parse(localStorage.getItem('story')).length)
   
 
}
