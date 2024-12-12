var vid_list = [
    {
        "link": "https://www.youtube.com/watch?v=5v2S84EuN0A",
        "title": "Learn Spanish Greetings | English to Spanish | Rock 'N Learn"
    },
    {
        "link": "https://www.youtube.com/watch?si=yW3SZ9Dt1cqX0bM1&v=sDDgzGAUJok",
        "title": "Spanish Color song + Learn English and Spanish Colors | Nursery Rhymes by EFlashApps"
    },
    {
        "link": "https://www.youtube.com/watch?v=Zbh3k7rwdoQ",
        "title": "Canticos Classic Nursery Rhymes | Head Shoulders Knees and Toes | Bilingual English & Spanish"
    },
    {
        "link": "https://www.youtube.com/watch?v=ZanHgPprl-0",
        "title": "Head, Shoulders, Knees and Toes song"
    },
    {
        "link": "https://www.youtube.com/watch?v=3V4KtC1rN-Y",
        "title": "Learn the Basic Shapes in Spanish: Circle, Square & Triangle (Círculo, Cuadrado y Triángulo)"
    },
    {
       "link": "https://www.youtube.com/watch?v=-sX4CmGeZrc",
       "title": "Farm Animals in ENGLISH and SPANISH! | Jack Hartmann" 
    },
    {
       "link": "https://www.youtube.com/watch?v=0218OFXQtXM",
       "title": "Classroom Objects song 1" 
    },
    {
       "link": "https://www.youtube.com/watch?v=41cJ0mqWses",
       "title": "School Supplies Song" 
    },
    {
       "link": "https://www.youtube.com/watch?v=3JZi2oDvPs4",
       "title": "Big, Big, Big | Adjectives Song for Kids" 
    },
    {
       "link": "https://www.youtube.com/watch?v=YW-fP7INEmY",
       "title": "The Opposites Song | La canción de los opuestos | Bilingual Preschool Vocabulary | Canticos" 
    },
    {
       "link": "https://www.youtube.com/watch?v=I8GeA3anPdo",
       "title": "How's the Weather Song" 
    },
    {
       "link": "https://www.youtube.com/watch?v=H9ZAryfghmo",
       "title": "Canticos | Weather the Weather / Jarabe Tapatío | Best Nursery Rhyme for Kids | Early Education" 
    },
    {
       "link": "https://www.youtube.com/watch?v=jdgZFLKRZ0A",
       "title": "Let's Get Dressed Song | Clothes Song for Kids | Kindergarten, Preschool & ESL | Fun Kids English" 
    }
]

const maxPaddingLevel = 10;
const paddingIncrement = 0.5; // in rem

const styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

for (let i = 1; i <= maxPaddingLevel; i++) {
  const paddingValue = i * paddingIncrement + "rem";
  styleSheet.sheet.insertRule(`.ptop-${i} {padding-top: ${paddingValue};}`, styleSheet.sheet.cssRules.length);
}

for (let i = 1; i <= maxPaddingLevel; i++) {
    const paddingValue = i * paddingIncrement + "rem";
    styleSheet.sheet.insertRule(`.pbot-${i} {padding-bottom: ${paddingValue};}`, styleSheet.sheet.cssRules.length);
}



function video_play(index) {
    const modal_title = document.getElementById('videoModalLabel');
    const vidlink = document.getElementById('vid-link');
    modal_title.innerHTML = vid_list[index]['title'];
    
    const iframe = document.getElementById('modal_video');
    const videoId = vid_list[index]['link'].split('v=')[1];
    vidlink.href = vid_list[index]['link'];
    vidlink.innerHTML = vid_list[index]['title'];
    const embedLink = `https://www.youtube.com/embed/${videoId}`;
    iframe.src = embedLink;
    console.log(modal_title.textContent, iframe);
}

function openPDF(url) {
    document.getElementById('web_modal').src = `https://${url}`;
}

function page(x) {
    window.location.href = x;
}



