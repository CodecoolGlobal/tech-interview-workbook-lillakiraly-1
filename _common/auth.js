function getCookie(name) {
    var cookiestring = RegExp(""+name+"[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

function setCookie(name,value,validUntil) {
    const date = new Date();
    date.setTime(validUntil);
    const cookie = `${name}=${value || ""}; expires=${date.toUTCString()}; path=/`;

    document.cookie = cookie;
}
