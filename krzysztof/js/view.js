show();
function show() {
    contentDiv.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    ${menuBlue()}
                    ${menuGreen()}
                    ${menuRed()}
                    <a class="navbar-brand" href="#">+ ADD NOTE +</a>
                </ul>
                <ul class="navbar-nav">
                    ${menuStatistics()}
                    ${menuUser()}   
                </ul>
            </div>
        </nav>
        ${content()}
        `;
}

//Ultimately, the menu generation must be combined into one menu-generating function for each color
function menuBlue() {
    return `
    <li class="nav-item dropdown">
        <a
            class="nav-link dropdown-toggle navbar-brand blue"
            href="#"
            id="dropdownBlue"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Blue groups</a
        >
        <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Blue about blue 1')">Blue about blue 1</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Blue about green 1')">&nbsp&nbsp&nbsp&nbspBlue about green 1</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Blue about red 1')">&nbsp&nbsp&nbsp&nbspBlue about red 1</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Blue about blue 2')">Blue about blue 2</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Blue about green 2')">&nbsp&nbsp&nbsp&nbspBlue about green 2</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Blue about red 2')">&nbsp&nbsp&nbsp&nbspBlue about red 2</a>
        </div>
    </li>
    `;
}
function menuGreen() {
    return `
    <li class="nav-item dropdown">
        <a
            class="nav-link dropdown-toggle navbar-brand green"
            href="#"
            id="dropdownGreen"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Green groups</a
        >
        <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Green about green 1')">Green about green 1</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Green about blue 1')">&nbsp&nbsp&nbsp&nbspGreen about blue 1</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Green about red 1')">&nbsp&nbsp&nbsp&nbspGreen about red 1</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Green about green 2')">Green about green 2</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Green about blue 2')">&nbsp&nbsp&nbsp&nbspGreen about blue 2</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Green about red 2')">&nbsp&nbsp&nbsp&nbspGreen about red 2</a>
        </div>
    </li>
    `;
}
function menuRed() {
    return `
    <li class="nav-item dropdown">
        <a
            class="nav-link dropdown-toggle navbar-brand red"
            href="#"
            id="dropdownRed"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Red groups</a
        >
        <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Red about red 1')">Red about red 1</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Red about blue 1')">&nbsp&nbsp&nbsp&nbspRed about blue 1</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Red about green 1')">&nbsp&nbsp&nbsp&nbspRed about green 1</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Red about red 2')">Red about red 2</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Red about blue 2')">&nbsp&nbsp&nbsp&nbspRed about blue 2</a>
            <a class="dropdown-item" href="#" onclick="clickGroup('group', 'Red about green 2')">&nbsp&nbsp&nbsp&nbspRed about green 2</a>
        </div>
    </li>
    `;
}

//Generating Statistic menu
function menuStatistics() {
    return `
    <li class="nav-item dropdown">
        <a
            class="nav-link dropdown-toggle navbar-brand"
            href="#"
            id="dropdownStatistic"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Statistics</a
        >
        <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#" onclick="clickStatistics('statistics', 'Statistics 1')">Statistics 1</a>
            <a class="dropdown-item" href="#" onclick="clickStatistics('statistics', 'Statistics 2')">Statistics 2</a>
        </div>
    </li>
    `;
}

//Generating user menu
function menuUser() {
    return `
    <li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle navbar-brand
        ${model.users.filter((u) => u.name == model.activeUser)[0].color}"
        href="#"
        id="dropdownUser"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >${model.activeUser}</a
    >
    <div class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" href="#" onclick="clickUser('user')">User Page</a>
    </div>
    </li>
    <li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle navbar-brand gray"
        href="#"
        id="dropdownChangeUser"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >Change user</a
    >
    <div class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" href="#" onclick="activeUser('Mr. Blue')">Mr. Blue</a>
        <a class="dropdown-item" href="#" onclick="activeUser('Mr. Green')">Mr. Green</a>
        <a class="dropdown-item" href="#" onclick="activeUser('Ms. Red')">Ms. Red</a>
        <a class="dropdown-item" href="#" onclick="activeUser('Tom')">Tom</a>
        <a class="dropdown-item" href="#" onclick="activeUser('Jerry')">Jerry</a>
        <a class="dropdown-item" href="#" onclick="activeUser('Poul')">Poul</a>
        <a class="dropdown-item" href="#" onclick="activeUser('Ann')">Ann</a>
        <a class="dropdown-item" href="#" onclick="activeUser('Agnes')">Agnes</a>
        <a class="dropdown-item" href="#" onclick="activeUser('Charlotte')">Charlotte</a>
    </div>
    </li>
    `;
}
