function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        console.log('The page is hidden');
    } else {
        console.log('Page is visible.');
    }
}

function handlePageHide(event) {
    console.log('User is out of page.');
}

document.addEventListener('visibilitychange', handleVisibilityChange);

window.addEventListener('pagehide', handlePageHide);
