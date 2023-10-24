
// named groups?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet
document.getElementById("myButton").onclick = function(){

    let carriage_return =/\n/g 
    let checkPunc = /\p{P}/u
    
    
    const eos=/[!?.]+(?=$|\s)/gm
    let story = document.getElementById("myText").value;
    let ele_length = document.getElementById('story-length')
    let splitByCR = story.split(carriage_return)
    let splitByEOS = story.split(eos)
     

    let splitPunc = story.split(checkPunc)
    console.log(splitPunc)
  
    let splitStory = story.split(".")
    ele_length.innerHTML = "This story has about " + splitStory.length + " periods."
    let ele_story = document.getElementById('story-here')
    let htmlString = ''
    
    let i =0;
    while(i<story.length){
        if(eos.test(story[i])){
            console.log('here')
            story=story.replace(eos, story[i]+'#')
        }
        i+=1
    }
    let splitByAddHash = story.split('#')
    console.log(splitByAddHash)


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
            htmlString += `<p></p>`
        }
        if(i% 3 === 0){
            htmlString += `<p></p>`
        }
        
        htmlString+=`<span><a class="btn" onclick='highlight(${i})'>${splitByAddHash[i]}</a></span>  `
    }


    ele_story.innerHTML = htmlString
    let ele_headline = document.getElementById('headline')
    ele_headline.innerHTML = splitByEOS[0]
}



let highlight = function(param){
  
    let sentence = document.getElementsByTagName('span').item(param)
    sentence.classList.toggle("highlight")
}

let get_highlights = function(){
    let highlights = document.getElementsByClassName('highlight')
    let ele_list = document.getElementById('highlights-here')
    let html_hl = ''
    for(let i=0;i<highlights.length; i++){
        html_hl += `<li>${highlights[i].textContent}</li>`
    }

    ele_list.innerHTML = html_hl
 
}
