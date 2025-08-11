export function OnBackClicked() {
    let url = window.location.href;
    let backButtonUrl = "";
    if (url.charAt(url.length - 1) === "/") {
        backButtonUrl = url.slice(0, url.lastIndexOf("/"));
        backButtonUrl = backButtonUrl.slice(0, backButtonUrl.lastIndexOf("/"));
    } else {
        backButtonUrl = url.slice(0, url.lastIndexOf("/"));
    }

    window.location.href = backButtonUrl;
};