// Insert commands into browser console
console.log(`All elements ${document.querySelectorAll(`*`).length}`)
console.log(`DIV elements ${document.querySelectorAll(`div`).length}`)
console.log(`Not DIV elements ${document.querySelectorAll(`*`).length - document.querySelectorAll(`div`).length}`)
document.querySelectorAll(`p`).forEach(p => p.style.setProperty(`color`, `#ff0000`))

