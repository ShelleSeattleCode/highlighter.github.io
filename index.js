
 

let obj = {}
obj.highlight_arr = []
obj.notes =''
obj.url = ''
// if(document.getElementsByTagName('header')){
    // if(document.getElementById('myText')){
document.getElementById("myButton").onclick = function(){


    let carriage_return =/\n/g 
    let checkPunc = /\p{P}/u
    
    
    const eos=/[.]+(?=$|\s)/gm 
    let story = document.getElementById("myText").value;
    let ele_length = document.getElementById('story-length')
    let splitByCR = story.split(carriage_return)
    let splitByEOS = story.split(eos)
    let apostrophe = /'/
    let question=/[?]+(?=$|\s)/gm 
    let exclaim=/[!]+(?=$|\s)/gm 
    // let quote =/[."]+(?=$|\s)/gm 
    
    

    
     
 
    // let splitPunc = story.split(checkPunc)
    // console.log(splitPunc)
  
    // let splitStory = story.split(".")
    // ele_length.innerHTML = "This story has about " + splitByAddHash.length + " sentences, give or take... "

    // let ele_story = document.getElementById('story-here')
    // let htmlString = ''
    console.log(story.length)
    // let i =0;

 

    // . ? ! 
    for(let i = 0; i<story.length; i++){
        if(eos.test(story[i])){
            console.log('eos')
            // console.log(story[i])
            story=story.replace(eos, story[i]+'#')

         
        }
       else if(question.test(story[i])){
        console.log('?')
            story=story.replace(question, story[i]+'#')
            // story[i] = '? #'
            console.log(story.length)

        }
        else if(exclaim.test(story[i])){
            console.log('!')
            // story=story.replace(exclaim, story[i]+'#')
            story[i] = '! #'
            console.log(story.length)
        }

        else if(apostrophe.test(story[i])){
            console.log("'")
            story=story.replace(apostrophe, "\'")
        }
        // else if(quote.test(story[i])){
        //     console.log(story[i])
        //     story=story.replace(story[i], story[i] + '#')
        // }
    }


    // console.log(story)

    let splitByAddHash = story.split('#')
    console.log(splitByAddHash)
    splitByAddHash.pop()
    console.log(splitByAddHash)

    ele_length.innerHTML = "This story has about " + splitByAddHash.length + " sentences, give or take... "
    
    let ele_story = document.getElementById('story-here')
    let htmlString = ''

    obj.headline = splitByAddHash[0]
    obj.splitByAddHash = splitByAddHash

    



    // BY SENTENCE 
    // for(let i=0;i<splitStory.length;i++){
    //     if(i% 4 === 0){
    //         htmlString += `<p></p>`
    //     }
        
    //     htmlString+=`<span><a class="btn" onclick='highlight(${i})'>${splitStory[i] + '.'}</a></span>  `
    // }

    // UNCOMMENT TO GET THE BY PARAGRAPH OPTION
    // for(let i=0;i<splitByCR.length;i++){
    //     htmlString+=`<p><span><a class="btn" onclick='highlight(${i})'>${splitByCR[i]}  </a> </span></p>  `
    // }


    for(let i=0;i<splitByAddHash.length;i++){
        if(i==1){
            htmlString += `<p>---</p>`
        }
        if(i% 3 === 0){
            htmlString += `<p>***</p>`
        }
        
        // htmlString+=`<span><a class="btn" onclick='highlight(${i})'> ${splitByAddHash[i]} </a></span>  `
        htmlString+=`<span><a class='btn' onclick='highlight(${i})'> ${splitByAddHash[i]} </a></span>`
    }

    ele_story.innerHTML = htmlString
    let ele_headline = document.getElementById('headline')
    ele_headline.innerHTML = splitByAddHash[0]
}



let highlight = function(param){
    console.log('highlighting')
    console.log(param)

  
    let sentence = document.getElementsByTagName('span').item(param)
    console.log(sentence.textContent)
    sentence.classList.toggle("highlight")

    obj.highlight_arr.push(sentence.textContent)

    ///
    // let highlights_arr = []
    // for(let i=0;i<highlights.length; i++){
    //     highlights_arr.push(highlights[i].textContent)
       
    // }

    //     obj.highlights = highlights_arr


        // console.log(obj)  
        // to_archive_arr = JSON.parse(localStorage.getItem('story')) || []
        // console.log(to_archive_arr.length)
        // to_archive_arr.push(obj)
        // localStorage.setItem('story', JSON.stringify(to_archive_arr))

    ///
}

 

let get_highlights = function(){
 
  
    let highlights = document.getElementsByClassName('highlight')
    highlights = obj.highlight_arr
    console.log(obj)
    // console.log(highlights)

    localStorage.setItem('recent_story', JSON.stringify(obj))
  
    window.location.href ="view_highlights.html"
    // console.log(highlights)

    // let ele_list = document.getElementById('highlights-here')
    // let html_hl = ''
    // let highlights_arr = []
    // for(let i=0;i<highlights.length; i++){
    //     highlights_arr.push(highlights[i].textContent)
    //     html_hl += `<li>${highlights[i].textContent}</li>`
    // }

    // console.log(highlights_arr)
    // ele_list.innerHTML = html_hl
    obj.highlights = highlights_arr

    ele_archive_option = document.getElementById('archive_option')
    let htmlArchiveOption = `<button class='block' onclick="archive_highlights()">Save These Highlights?</button>`

    ele_archive_option.innerHTML = htmlArchiveOption
 
}


let archive_highlights = function(){
    console.log('arvhiving')
    console.log(obj)  
    to_archive_arr = JSON.parse(localStorage.getItem('story'))
    to_archive_arr.push(obj)
    localStorage.setItem('story', JSON.stringify(to_archive_arr))
   
 
}


// }


 let add_url = function(){
    let url = document.getElementById('add-url').value
    obj.url = url 
    console.log(url)
 }

console.log(JSON.parse(localStorage.getItem('story')).length)
console.log(JSON.parse(localStorage.getItem('story')))
