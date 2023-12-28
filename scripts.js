function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        // Codul pe care dorești să-l execuți la ascunderea paginii
        console.log('Pagina este ascunsă.');
    } else {
        // Codul pe care dorești să-l execuți când pagina devine vizibilă din nou
        console.log('Pagina este vizibilă.');
    }
}

function handlePageHide(event) {
    // Codul pe care dorești să-l execuți atunci când utilizatorul navighează departe de pagină
    console.log('Utilizatorul navighează departe de pagină.');
}

// Adaugă event listener pentru evenimentul visibilitychange
document.addEventListener('visibilitychange', handleVisibilityChange);

// Adaugă event listener pentru evenimentul pagehide
window.addEventListener('pagehide', handlePageHide);
