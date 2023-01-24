

export default function animateSvg(mousePosition: any) {
    const svgPos = document.getElementById("head")?.getBoundingClientRect()
    const eyes = document.getElementById("eye");

    if (eyes !== null && svgPos != undefined) {
        // eyes top left
        mousePosition.x <= svgPos.left && mousePosition.y <= svgPos.top ? (
            eyes.classList.add(`-translate-x-1`),
            eyes.classList.remove(`translate-x-1`),
            eyes.classList.add(`-translate-y-1`),
            eyes.classList.remove(`translate-y-1`)
        ) : (null)
        // eyes bottom left
        mousePosition.x <= svgPos.left && mousePosition.y >= svgPos.bottom ? (
            eyes.classList.add(`-translate-x-1`),
            eyes.classList.remove(`translate-x-1`),
            eyes.classList.add(`translate-y-1`),
            eyes.classList.remove(`-translate-y-1`)
        ) : (null)
        // eyes top right
        mousePosition.x >= svgPos.right && mousePosition.y <= svgPos.top ? (
            eyes.classList.add(`translate-x-1`),
            eyes.classList.remove(`-translate-x-1`),
            eyes.classList.add(`-translate-y-1`),
            eyes.classList.remove(`translate-y-1`)
        ) : (null)
        // eyes bottom right
        mousePosition.x >= svgPos.right && mousePosition.y >= svgPos.bottom ? (
            eyes.classList.add(`translate-x-1`),
            eyes.classList.remove(`-translate-x-1`),
            eyes.classList.add(`translate-y-1`),
            eyes.classList.remove(`-translate-y-1`)
        ) : (null)
        // eyes top center
        mousePosition.y <= svgPos.top && mousePosition.x >= svgPos.left && mousePosition.x <= svgPos.right ? (
            eyes.classList.add(`-translate-y-1`),
            eyes.classList.remove(`translate-y-1`),
            eyes.classList.remove(`translate-x-1`),
            eyes.classList.remove(`-translate-x-1`)
        ) : (null)
        // eyes bottom center
        mousePosition.y >= svgPos.bottom && mousePosition.x >= svgPos.left && mousePosition.x <= svgPos.right ? (
            eyes.classList.add(`translate-y-1`),
            eyes.classList.remove(`-translate-y-1`),
            eyes.classList.remove(`translate-x-1`),
            eyes.classList.remove(`-translate-x-1`)
        ) : (null)
        // eyes left center
        mousePosition.x <= svgPos.left && mousePosition.y >= svgPos.top && mousePosition.y <= svgPos.bottom ? (
            eyes.classList.add(`-translate-x-1`),
            eyes.classList.remove(`translate-x-1`),
            eyes.classList.remove(`translate-y-1`),
            eyes.classList.remove(`-translate-y-1`)
        ) : (null)
        // eyes right center
        mousePosition.x >= svgPos.right && mousePosition.y >= svgPos.top && mousePosition.y <= svgPos.bottom ? (
            eyes.classList.add(`translate-x-1`),
            eyes.classList.remove(`-translate-x-1`),
            eyes.classList.remove(`translate-y-1`),
            eyes.classList.remove(`-translate-y-1`)
        ) : (null)
        // eyes complete center
        mousePosition.x >= svgPos.left && mousePosition.x <= svgPos.right && mousePosition.y >= svgPos.top && mousePosition.y <= svgPos.bottom ? (
            eyes.classList.remove(`translate-x-1`),
            eyes.classList.remove(`-translate-x-1`),
            eyes.classList.remove(`translate-y-1`),
            eyes.classList.remove(`-translate-y-1`)
        ) : (null)
    }
}