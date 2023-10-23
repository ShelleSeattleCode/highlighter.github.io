
document.getElementById("myButton").onclick = function(){

    let carriage_return =/\n/g 
    
    let story = document.getElementById("myText").value;
    let ele_length = document.getElementById('story-length')
    let splitByCR = story.split(carriage_return)
  
    let splitStory = story.split(".")
    ele_length.innerHTML = "This story has about " + splitStory.length + " periods."
    let ele_story = document.getElementById('story-here')
    let htmlString = ''
    
    // BY SENTENCE 
    for(let i=0;i<splitStory.length;i++){
        if(i% 4 === 0){
            htmlString += `<p></p>`
        }
        
        htmlString+=`<span><a class="btn" onclick='highlight(${i})'>${splitStory[i] + '.'}</a></span>  `
    }

    // UNCOMMENT TO GET THE BY PARAGRAPH OPTION
    // for(let i=0;i<splitByCR.length;i++){
    //     htmlString+=`<p><span><a class="btn" onclick='highlight(${i})'>${splitByCR[i]}  </a> </span></p>  `
    // }

    ele_story.innerHTML = htmlString
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