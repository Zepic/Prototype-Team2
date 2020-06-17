show();
function show() {
    let entirePageHtml;
    if (model.activeView == 'startPage') {
        entirePageHtml = menuStartCode();
    } else {
        document.getElementById('pagestyle').setAttribute('href', 'styles.css');
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
            <div class="red dropdown">
                <button class="red dropbtn">Red groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'red 1')">Red 1</a>
                        <a href="#" onclick="clickGroup('group', 'red 2')">Red 2</a>
                    </div>
            </div>
            <div class="green dropdown">
                <button class="green dropbtn">Green groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'green 1')">Green 1</a>
                        <a href="#" onclick="clickGroup('group', 'green 2')">Green 2</a>
                    </div>
            </div>
            <div class="blue dropdown">
                <button class="blue dropbtn">Blue groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'blue 1')">Blue 1</a>
                        <a href="#" onclick="clickGroup('group', 'blue 2')">Blue 2</a>
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
                        <a href="#" onclick="clickGroup('group', 'red 1')">Red 1</a>
                        <a href="#" onclick="clickGroup('group', 'red 2')">Red 2</a>
                    </div>
            </div>
            <div class="green dropdown">
                <button class="green dropbtn">Green groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'green 1')">Green 1</a>
                        <a href="#" onclick="clickGroup('group', 'green 2')">Green 2</a>
                    </div>
            </div>
            <div class="blue dropdown">
                <button class="blue dropbtn">Blue groups</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickGroup('group', 'blue 1')">Blue 1</a>
                        <a href="#" onclick="clickGroup('group', 'blue 2')">Blue 2</a>
                    </div>
            </div>
            <div class=" dropdown">
                <button class="dropbtn" style="background-color: transparent">Statistics</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickStatistics('statistics')">Statistics</a>
                    </div>
            </div>
            <div class=" dropdown">
                <button class="dropbtn" style="background-color: transparent">User page</button>
                    <div class="dropdown-content">
                        <a href="#" onclick="clickUser('user')">User page</a>
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
        </div>
    `;
}

function showNote() {
    return noteModel.notes
        .filter((n) => n.group == model.activeGroup)
        .map((n) => {
            return `
            <div id="${n.ID}" class="mydiv" style="top: ${n.posY}px; left: ${n.posX}px">
                <div class="mydivheader">Click here to move</div>
                <div class="noteContent">
                    <p>ID: ${n.ID}, content: <b>${n.content}</b>, group: ${n.group}, aboutColor: ${n.group}</p>
                    <p>blueAgree: ${n.blueAgree}, greenAgree: ${n.greenAgree}, redAgree: ${n.redAgree}, disagree: ${n.disagree}</p>
                    <p>posX: ${n.posX}, posY: ${n.posY}, zIndex: ${n.zIndex}</p>
                    <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        onclick="agree(${n.ID})"
                    >Agree</button>
                </div>
            </div>
            `;
        })
        .join('');
}

function activateNoteMovement() {
    noteModel.notes
        .filter((n) => n.group == model.activeGroup)
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
