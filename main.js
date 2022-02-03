PennController.ResetPrefix()// Shorten command names (keep this line here))

DebugOff()   // Uncomment this line only when you are 100% done designing your experiment

// First show instructions, then experiment trials, send results and show end screen
Sequence("setcounter", "instructions", "practice", "practice-1", "practice-2", "practice-3", rshuffle("experiment-filler", "experiment-item"), "questionnaire", SendResults(), "end")

// Counter
SetCounter("setcounter")

// Instructions
newTrial("instructions",
     // Automatically print all Text elements, centered
    defaultText.center().print()
    ,
    newText("instructions-1", "<p>This is the page where you might want to get a consent from participants to join your study.</p>")
    ,
    newText("instructions-2", "<p>Put any relevant information here, such as the purpose of the study, compensation, duration of the survey, etc.</p>")
    ,
    newText("instructions-3", "<p>Please check the button below that says: 'I consent to participante in this study.'</p>")
    ,
    newScale("consent",  "<b>I consent to participante in this study</b>")
    .labelsPosition("center")
    .radio()
    .css("margin","2em")    // Add a 2em margin around this element
    .print()
    ,
    getScale("consent").wait()  // Only move to the next page after consent has been obtained
    ,
    newTimer("wait", 300)
            .start()
            .wait()
)

// Practice trials
newTrial("practice",
    defaultText.center().print()
    // Automatically print all Text elements, centered
    ,
    newText("instructions-1", "<p>Please read the sentence displayed on the screen carefully, and press the 'proceed' button when you are done.</p>")
    ,
    newText("instructions-2", "<p>Rate the sentence that shows up next on the scale of 1 (very unnatural) to 7 (very natural).</p>")
    ,
    newText("instructions-3", "<p>Please note the following:</p>")
    ,
    newText("instructions-4", "<p><ul><li>Some trials are followed by a question about the sentences you just read.</li><li>Use your intuition; try not to overthink your judgment.</li><li>There are no right or wrong answers. Please tell us how the sentence sounds to you.</li></p>")
    ,
    newText("practice-1", "<p>Please press the button below to start the experiment. Thank you for your participation!</p>")
    ,
    newButton("proceed", "Start the experiment")
    .print()
    .center()
    .wait()
    ,
    newTimer("wait", 300)
            .start()
            .wait()
)

newTrial("practice-1",
    defaultText.center().print()
    // Automatically print all Text elements, centered
    ,
    newText("context-1", "<p>This is the preamble of the first practice trial. A button will appear after a 3-second delay.</p>")
        .cssContainer({"margin-top":"2em", "margin-bottom":"2em"})
            .center()
            .print()
        ,
        newTimer("display", 3000)
            .start()
            .wait()
        ,
        newButton("proceed", "Proceed")
        .print()
        .center()
        .wait()
        ,
        clear()
    ,
    newText("practice-1", "<p>Who wonders whether Heather saw the movie?</p>")
    ,
    newScale("practice-1", 7)
        .before(newText("left", "<div class='fancy'><em>very unnatural</em></div>") )
        .after(newText("right", "<div class='fancy'><em>very natural</em></div>") )
        .keys()
        .labelsPosition("top")
        .cssContainer({"margin":"1em"})
        .center()
        .log()
        .print()
    ,
    getScale("practice-1").wait()
    ,
    newTimer("wait", 300)
            .start()
            .wait()
)

newTrial("practice-2",
    defaultText.center().print()
    // Automatically print all Text elements, centered
    ,
    newText("context-2", "<p>This is the preamble for the second practice trial. You might want this for assessing the effect of contexts on sentence acceptability, for instance.</p>")
        .cssContainer({"margin-top":"2em", "margin-bottom":"2em"})
            .center()
            .print()
        ,
        newTimer("display", 3000)
            .start()
            .wait()
        ,
        newButton("proceed", "Proceed")
        .print()
        .center()
        .wait()
        ,
        clear()
    ,
    newText("practice-2", "<p>What does the teacher wonder whether George read?</p>")
    ,
    newScale("practice-2", 7)
        .before(newText("left", "<div class='fancy'><em>very unnatural</em></div>") )
        .after(newText("right", "<div class='fancy'><em>very natural</em></div>") )
        .keys()
        .labelsPosition("top")
        .cssContainer({"margin":"1em"})
        .center()
        .log()
        .print()
    ,
    getScale("practice-2").wait()
    ,
    newTimer("wait", 300)
            .start()
            .wait()
)

newTrial("practice-3",
    defaultText.center().print()
    // Automatically print all Text elements, centered
    ,
    newText("context-3", "<p>This is the third and last practice trial.</p>")
        .cssContainer({"margin-top":"2em", "margin-bottom":"2em"})
            .center()
            .print()
        ,
        newTimer("display", 3000)
            .start()
            .wait()
        ,
        newButton("proceed", "Proceed")
        .print()
        .center()
        .wait()
        ,
        clear()
    ,
    newText("practice-3", "<p>What does the detective wonder whether Paul stole?</p>")
    ,
    newScale("practice-3", 7)
        .before(newText("left", "<div class='fancy'><em>very unnatural</em></div>") )
        .after(newText("right", "<div class='fancy'><em>very natural</em></div>") )
        .keys()
        .labelsPosition("top")
        .cssContainer({"margin":"1em"})
        .center()
        .log()
        .print()
    ,
    getScale("practice-3").wait()
    ,
    newTimer("wait", 300)
            .start()
            .wait()
)

// Experimental trial
Template("experiment.csv", row =>
    newTrial("experiment-"+row.type,
        newText("context", row.context)
        .cssContainer({"margin-top":"2em", "margin-bottom":"2em"})
            .center()
            .print()
        ,
        newTimer("display", 3000)
            .start()
            .wait()
        ,
        newButton("proceed", "Proceed")
        .print()
        .center()
        .wait()
        ,
        clear()
        ,
        newText("sentence", row.sentence)
            .cssContainer({"margin-top":"2em", "margin-bottom":"2em"})
            .center()
            .print()
            ,
    // 7-point scale
        newScale(7)
            .before( newText("left", "<div class='fancy'>(<em>very unnatural</em>)</div>") )
            .after( newText("right", "<div class='fancy'>(<em>very natural</em>)</div>") )
            .labelsPosition("top")
            .keys()
            .log()
            .once()
            .center()
            .print()
            .wait()
        ,
        // Wait briefly to display which option was selected
        newTimer("wait", 300)
            .start()
            .wait()
        ,
        clear()
        ,
        ...(row.followup ? [
            newText("follow-up", row.followup)
                .cssContainer({"margin-top":"2em", "margin-bottom":"2em"})
                .center()
                .print()
            ,
            newCanvas(200,30)
                .add( 0 , 5 , newText("Yes").css("border", "solid 1px black") )
                .add( "right at 100%" , 5 , newText("No").css("border", "solid 1px black") )
                .center()
                .print()
            ,
            newSelector("answer")
                .add( getText("Yes") , getText("No") )
                .log()
                .wait()
        ] : [
            null
        ])
    )
    // Record trial data
    .log("LIST"     , row.group)
    .log("ITEM"     , row.item)
    .log("CONDITION", row.condition)
    .log("CONTEXT"  , row.context)
    .log("SENTENCE" , row.sentence)
    .log("FOLLOWUP" , row.followup)
    .log("CORRECT" , row.correct)
)

// Language background questionnaire
newTrial("questionnaire",
    defaultText.center().print()
    ,
    newText("<p>That's it for the experiment! Please take a moment to answer the questions below.</p>")
    ,
    // ID
    newText('<b>ID (on Amazon MTurk, Prolific, etc.)</b>')
    .left()
    .cssContainer({"margin-top":"1em"})
    .print()
    ,
    newTextInput("input_id")
        .log()
        .print()
    ,
    // Username
    newText('Username, if there is one')
    .left()
    .cssContainer({"margin-top":"1em"})
    .print()
    ,
    newTextInput("input_name")
        .log()
        .print()
    ,
    // Age
    newText("<b>Age</b>")
    .left()
    .cssContainer({"margin-top":"1em"})
    .print()
    ,
    newTextInput("input_age")
        .log()
        .print()
        //.wait()
    ,
    // Gender
    newText("<b>Gender</b>")
    .left()
    .cssContainer({"margin-top":"1em"})
    .print()
    ,
    newScale("input_gender",   "male", "female", "others")
        .radio()
        .log()
        .labelsPosition("right")
        .print()
        //.wait()
    ,
    // Current residence 
    newText("<b>state/province/prefercture that you live in</b>")
    .left()
    .cssContainer({"margin-top":"1em"})
    .print()
    ,
    newTextInput("input_pref")
        .log()
        .print()
        //.wait()
    ,
    // Parental language
    newText("<b>Language your parents spoke to you when you were little</b>")
    .left()
    .cssContainer({"margin-top":"1em"})
    .print()
    ,
    newScale("input_parent",   "English", "Other")
        .radio()
        .log()
        .labelsPosition("right")
        .print()
        //.wait()
    ,
    newText("If you answered 'Other,' which language(s) was it?")
    .left()
    .cssContainer({"margin-top":"1em"})
    .print()
    ,
    newTextInput("input_lang")
        .log()
        .print()
    ,
    // Clear error messages if the participant changes the input
    newKey("just for callback", "") 
        .callback( getText("errorage").remove())
    ,
    // Formatting text for error messages
    defaultText.color("Crimson").print()
    ,
    newButton("proceed", "Proceed")
        .cssContainer({"margin-top":"1em", "margin-bottom":"1em"})
        .print()
        // Check for participant age input
        .wait(newFunction('dummy', ()=>true).test.is(true)
            // Age
            .and(getTextInput("input_age").test.text(/[0-9 ０-９]+/)
                .failure( newText('errorage', "Please input your age.")))
            // Gender
            .and(getScale("input_gender").test.selected()
                .failure( newText('errorgender', "Please select your gender.")))
            // Prefecture
            .and(getTextInput("input_pref").test.text(/.*/)
                .failure( newText('errorpref', "Please input the state/province/prefercture that you live in.")))
            // Parents
            .and(getScale("input_parent").test.selected()
                .failure( newText('errorparents', "Please select your parents' native language.")))
        )
)
,
// Final screen
newTrial("end",
    defaultText.center().print()
    ,
    newText("<p>This is the end of the experiment. You may close the window now.</p>")
    ,
    newText("<p>Again, thank you for your participation!</p>")
    ,
    // Trick: stay on this trial forever (until tab is closed)
    newButton().wait()
)
.setOption("countsForProgressBar",false)