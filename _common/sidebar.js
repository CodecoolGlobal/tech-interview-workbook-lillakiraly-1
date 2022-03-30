function replacer(key, value) {
    if (value instanceof Node) {
        return value.innerHTML;
    } else {
        return value;
    }
}

function loadClosedMenuItems(storagename, menutitles, firstmenutitles) {
    let closedmenutitles = [];
    if (!localStorage.getItem(storagename)) {
        for (i = 1; i < firstmenutitles.length; i++) {
            if (firstmenutitles[i].nextSibling) {
                firstmenutitles[i].classList.add("closed");
                closedmenutitles.push(firstmenutitles[i]);
            }
        }
    } else {
        let closedmenutitlesArray = JSON.parse(localStorage.getItem(storagename));
        for (i = 0; i < menutitles.length; i++) {
            if (closedmenutitlesArray.indexOf(menutitles[i].innerHTML) > -1) {
                menutitles[i].classList.add("closed");
                closedmenutitles.push(menutitles[i]);
            }
        }
    }
    localStorage.setItem(storagename, JSON.stringify(closedmenutitles, replacer));

    return closedmenutitles;
}

function install(hook, vm) {
    hook.doneEach(function () {
        let menutitles = document.querySelectorAll('.sidebar-nav ul>li>p');
        let firstmenutitles = document.querySelectorAll('.sidebar-nav>ul>li>p');
        document.title = menutitles[0].innerHTML;
        let storagename = 'closedmenutitles.' + menutitles[0].innerHTML;
        let closedmenutitles = loadClosedMenuItems(storagename, menutitles, firstmenutitles);
        for (i = 1; i < menutitles.length; i++) {
            menutitles[i].addEventListener("click", function () {
                if (this.classList.toggle("closed")) {
                    closedmenutitles.push(this);
                } else {
                    closedmenutitles.splice(closedmenutitles.indexOf(this), 1);
                }
                localStorage.setItem(storagename, JSON.stringify(closedmenutitles, replacer));
            });
        }
    });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [install].concat(window.$docsify.plugins || []);
