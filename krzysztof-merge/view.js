show();
function show() {
    let entirePageHtml;
    if (model.activeView == 'startPage') {
        entirePageHtml = menuCode();
    } else {
        document.getElementById('pagestyle').setAttribute('href', 'styles.css');
        entirePageHtml = `
        ${menuCode()}
        ${content()}
        `;
    }
    contentDiv.innerHTML = entirePageHtml;
}

//Ultimately, the menu generation must be combined into one menu-generating function for each color
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
        contentHtml = statisticPage();
    } else if (model.activeView == 'user') {
        contentHtml = userPage();
    }
    return contentHtml;
}

/*

----- GROUPS OF COLORS ------------------------------------

*/

function groupPage() {
    let groupPageHtml = '';

    //code for generating page content for groupName
    groupPageHtml += showGroupInfo();
    groupPageHtml += `
        <div>
            <ol>${showNote()}</ol>
        </div>
    `;
    return groupPageHtml;
}

//subfunctions for groups
function showGroupInfo() {
    let showGroupInfoHtml = '';

    //code for generating single note

    showGroupInfoHtml = `
        <div id="info">
        Group name: ${model.activeGroup}, User name: ${model.activeUser}
        </div>
        `;
    return showGroupInfoHtml;
}

function showNote() {
    return noteModel.notes
        .filter((n) => n.group == model.activeGroup)
        .map((n) => {
            return `
            <li>
                ID: ${n.ID}, content: <b>${n.content}</b>, group: ${n.group}, aboutColor: ${n.group}<br/>
                blueAgree: ${n.blueAgree}, greenAgree: ${n.greenAgree}, redAgree: ${n.redAgree}, disagree: ${n.disagree}<br/>
                posX: ${n.posX}, posY: ${n.posY}, zIndex: ${n.zIndex}<br/>
                <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    onclick="agree(${n.ID})"
                >Agree</button>
            </li><br/>
            `;
        })
        .join('');
}
