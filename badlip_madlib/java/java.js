function geneStory(event) {
    
    event.preventDefault();
    const storyOutputDiv = document.getElementById('story-output');
    
    try {
        // grab all the inputs
        const adjective1 = document.getElementById('adjective_1').value;
        const place1 = document.getElementById('liquid_1').value;
        const place2 = document.getElementById('number_1').value;
        const verbPresent1 = document.getElementById('noun_plural_1').value;
        const adverb1 = document.getElementById('adverb_1').value;
        const adjective2 = document.getElementById('verb_ing_1').value;
        const place3 = document.getElementById('terrifying_sound_1').value;
        const pluralNoun1 = document.getElementById('body_part_plural_1').value;
        const nounPlural2 = document.getElementById('plural_creature_1').value;
        const nounSingular1 = document.getElementById('adjective_scale_1').value;
        const game1 = document.getElementById('noun_singular_1').value;
        const adjective3 = document.getElementById('verb_past_1').value;
        const surface1 = document.getElementById('exclamation_1').value;

        let bonusText = "";
let imageToShow = "";

if (adjective1.length > 5) {
    bonusText = "damn that's a long word";
    imageToShow = "assetsdem/scrib.png";
} else {
    bonusText = "short word huh";
    imageToShow = "assetsdem/scrib_blank.png";
}
        
        const finalStory = `
they say blood is thicker than water 
but it ain't thicker than 
gravy on thanksgiving and
maybe i'll give thanks 
${bonusText}
for the time spent 
on ${adjective1} conversation with those
who watched me grow from
${place1} to ${place2}
i'll enter the stage boldly
and state 
that gravy way thicker 
y'all think you think big, we think way bigger 
and ain't none bigger than the family 
anyways when the world ${verbPresent1} and the
water runs dry I'll be 
doing just fine cuz blood stand wit me
every day people are ${adverb1} plotting  
${adjective2} options, 
I know plenty hate, 
and yet
i'm in the ${place3}
vibin at any rate
but damn these ${pluralNoun1}, 2 many
tryna play me straight 
out my ${nounPlural2} and put me in a ${nounSingular1}
like it's ${game1}
It's crazy, how easily jealousy and envy can turn to hating 
and just how fast that can turn into another ${adjective3} body laying face down ${surface1}
i'm just saying
to keep sane 
I need family 
i need turkey                                                  I need gravy
        `;
        
        // swap the image
        const storyImage = document.getElementById('story-image');
        if (storyImage) {
            storyImage.src = imageToShow;
        }
        
        storyOutputDiv.innerHTML = `
            <pre class="story-text">${finalStory.trim()}</pre>
        `;
    } catch (error) {
        // something broke lol
        storyOutputDiv.innerHTML = `
            <p class="text-danger">!!! ERROR !!!</p>
            <pre class="text-danger">${error.name}: ${error.message}</pre>
            <p>Please fill out all fields and try again bud.</p>
        `;
        console.error("Story Generation Error:", error);
    }
}

function resetStory() {
    const form = document.getElementById('madlip-form');
    if (form) {
        form.reset(); 
    }
    
    const storyOutputDiv = document.getElementById('story-output');
    if (storyOutputDiv) {
        storyOutputDiv.innerHTML = '<p>Whenever youre ready...</p>';
    }
    
    // reset image back
    const storyImage = document.getElementById('story-image');
    if (storyImage) {
        storyImage.src = 'assetsdem/scrib_blank.png';
    }
}

function toggleColorMode() {
    const mode = document.querySelector('input[name="color_mode"]:checked').value;
    
    if (mode === 'inverted') {
        document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    } else {
        document.body.style.filter = 'none';
    }
}

// hook up the buttons
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('madlip-form');
    if (form) {
        form.addEventListener('submit', geneStory);
    }
    
    const resetButton = document.getElementById('reset-button');
    if (resetButton) {
        resetButton.addEventListener('click', resetStory);
    }
});
