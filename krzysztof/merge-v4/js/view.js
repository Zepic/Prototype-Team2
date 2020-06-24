show();
function show() {
    let entirePageHtml;
    if (model.activeView == 'startPage') {
        entirePageHtml = menuStartCode();
    } else {
        document
            .getElementById('pagestyle')
            .setAttribute('href', 'css/styles.css');
        entirePageHtml = `
        ${menuCode()}
        ${content()}
        `;
    }
    contentDiv.innerHTML = entirePageHtml;
    model.activeView == 'group' ? activateNoteMovement() : '';
}

//function generetes start page
function menuStartCode() {
    return `
        <div class="groups" >
            <div class="dropdown">
                <button class="red dropbtn">Red groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'red 1', 'red')">Red 1</a>
                        <a href="#" onclick="clickGroup('group', 'red 2', 'red')">Red 2</a>
                    </div>
            </div>
            <div class="dropdown">
                <button class="green dropbtn">Green groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'green 1', 'green')">Green 1</a>
                        <a href="#" onclick="clickGroup('group', 'green 2', 'green')">Green 2</a>
                    </div>
            </div>
            <div class="dropdown">
                <button class="blue dropbtn">Blue groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'blue 1', 'blue')">Blue 1</a>
                        <a href="#" onclick="clickGroup('group', 'blue 2', 'blue')">Blue 2</a>
                    </div>
            </div>
        </div>
        `;
}

//function generates menu for others pages
function menuCode() {
    return `
        <div class="groups" >
            <div class="red dropdown">
                <button class="red dropbtn">Red groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'red 1', 'red')">Red 1</a>
                        <a href="#" onclick="clickGroup('group', 'red 1', 'green')">&nbsp&nbspRed about green 1</a>
                        <a href="#" onclick="clickGroup('group', 'red 1', 'blue')">&nbsp&nbspRed about blue 1</a>
                        <a href="#" onclick="clickGroup('group', 'red 2', 'red')">Red 2</a>
                        <a href="#" onclick="clickGroup('group', 'red 2', 'green')">&nbsp&nbspRed about green 2</a>
                        <a href="#" onclick="clickGroup('group', 'red 2', 'blue')">&nbsp&nbspRed about blue 2</a>
                    </div>
            </div>
            <div class="green dropdown">
                <button class="green dropbtn">Green groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'green 1', 'green')">Green 1</a>
                        <a href="#" onclick="clickGroup('group', 'green 1', 'blue')">&nbsp&nbspGreen about blue 1</a>
                        <a href="#" onclick="clickGroup('group', 'green 1', 'red')">&nbsp&nbspGreen about red 1</a>
                        <a href="#" onclick="clickGroup('group', 'green 2', 'green')">Green 2</a>
                        <a href="#" onclick="clickGroup('group', 'green 2', 'blue')">&nbsp&nbspGreen about blue 2</a>
                        <a href="#" onclick="clickGroup('group', 'green 2', 'red')">&nbsp&nbspGreen about red 2</a>
                    </div>
            </div>
            <div class="blue dropdown">
                <button class="blue dropbtn">Blue groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'blue 1', 'blue')">Blue 1</a>
                        <a href="#" onclick="clickGroup('group', 'blue 1', 'red')">&nbsp&nbspBlue about red 1</a>
                        <a href="#" onclick="clickGroup('group', 'blue 1', 'green')">&nbsp&nbspBlue about green 1</a>
                        <a href="#" onclick="clickGroup('group', 'blue 2', 'blue')">Blue 2</a>
                        <a href="#" onclick="clickGroup('group', 'blue 2', 'red')">&nbsp&nbspBlue about red 2</a>
                        <a href="#" onclick="clickGroup('group', 'blue 2', 'green')">&nbsp&nbspBlue about green 2</a>
                    </div>
            </div>

                    <div class="statisticsNav">
                        <button class="navButton button1"  onclick="clickStatistics('statistics')">Statistics</button>
                    </div>

            <div class="statisticsNav">
                        <button class="navButton button2" onclick="clickUser('user')">User page</button>
            </div>

            <div class=" dropdown">
            <button class="dropbtn" style="background-color: transparent">+ Add note +</button>
                <div class="dropdown-content">
                    <input type="text" onchange="addNote(this.value)">
                </div>
        </div>
        </div>
        `;
}

/*
-----------------------------------------------------------
----- CONTENT FUNCTIONS -----------------------------------
-----------------------------------------------------------
*/

//Generating content - groups with notes, statistics, user page
function content() {
    let contentHtml = '';
    if (model.activeView == 'group') {
        contentHtml = groupPage();
    } else if (model.activeView == 'statistics') {
        contentHtml = statShow();
    } else if (model.activeView == 'user') {
        contentHtml = userPage();
    }
    return contentHtml;
}

/*

----- GROUPS OF COLORS ------------------------------------

*/

function groupPage() {
    return `
        <div>
            <div>${showNote()}</div>
            <button class="nextColor" onclick="clickGroup()">Next color</button>
        </div>
    `;
}

function showNote() {
    let noteColor;
    if (model.activeGroup.includes('blue')) {
        noteColor = 'blue';
    } else if (model.activeGroup.includes('green')) {
        noteColor = 'green';
    } else if (model.activeGroup.includes('red')) {
        noteColor = 'red';
    }
    return noteModel.notes
        .filter((n) => n.group == model.activeGroup)
        .filter((n) => n.aboutColor == model.activeAboutColor)
        .map((n) => {
            return `
            <div id="${n.ID}" class="noteDiv" style="background-color: ${noteColor}; top: ${n.posY}px; left: ${n.posX}px">
                <div class="noteHeader">Click here to move</div>
                <div class="noteContainer">
                    <b class="noteContent">${n.content}</b>
                    <div class="noteButtonDiv">
                        <button type="button" class="noteButtons noteAgree" onclick="agree(${n.ID})">Agree</button>
                        <button type="button" class="noteButtons noteDisagree" onclick="disagree(${n.ID})">Disagree</button>
                        <button type="button" class="noteButtons noteShop" onclick="copyNote(${n.ID})">Copy Word</button>
                    </div>
                </div>
            </div>
            `;
        })
        .join('');
}

function activateNoteMovement() {
    noteModel.notes
        .filter((n) => n.group == model.activeGroup)
        .filter((n) => n.aboutColor == model.activeAboutColor)
        .map((u) => u.ID)
        .forEach((a) => dragElement(document.getElementById(`${a}`)));
}

/*

----- USERS PAGES -----------------------------------------

*/

function userPage() {
    let userPageHtml = '';

    //code for generating page content for userName
    //or call another function with JS code to generate user page

    //delete this code after you add corect code for user page
    userPageHtml += showUserPageInfo();
    userPageHtml += `
    <p>Add code here to generates content for user page</p>
    `;

    return userPageHtml;
}

//subfunctions for users pages
//delete this function after you have corect code for user page
function showUserPageInfo() {
    return `
        <div id="info">
        User home page, Active user name in the model: ${model.activeUser}
        </div>
        `;
}
