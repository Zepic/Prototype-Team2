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

function groupPage() {
    let groupPageHtml = '';

    //code for generating page content for groupName
    groupPageHtml += showGroupInfo();
    groupPageHtml += showNote();

    return groupPageHtml;
}

function statisticPage() {
    let statisticPageHtml = '';

    //code for generating page content for staisticName
    statisticPageHtml += showStatisticsInfo();

    return statisticPageHtml;
}

function userPage() {
    let userPageHtml = '';

    //code for generating page content for userName
    userPageHtml += showUserPageInfo();

    return userPageHtml;
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

//subfunctions for statistics
function showStatisticsInfo() {
    let showStatisticsInfoHtml = '';

    //code for generating single note

    showStatisticsInfoHtml = `
        <div id="info">
        Statistics page, Statistic name: ${model.activeStatistics}
        </div>
        `;
    return showStatisticsInfoHtml;
}

//subfunctions for users pages
function showUserPageInfo() {
    let showUserPageInfoHtml = '';

    //code for generating single note

    showUserPageInfoHtml = `
        <div id="info">
        User home page, User name: ${model.activeUser}
        </div>
        `;
    return showUserPageInfoHtml;
}

//subfunctions for notes
function showNote() {
    let showNoteHtml = '';

    //code for generating single note

    showNoteHtml = `
        <div class="container">
            <div id="mydiv">
                <div id="mydivheader">Click here to move</div>
                <p>Move</p>
                <p>this</p>
                <p>DIV</p>
            </div>
        </div>
        `;
    return showNoteHtml;
}
