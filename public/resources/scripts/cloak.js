/*

alert("Click okay to refresh the page, and open the site in 'about:blank'")

let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

// Cloaking Code

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    const doc = popup.document
    const iframe = doc.createElement("iframe")
    const style = iframe.style
    const link = doc.createElement("link")

    const name = localStorage.getItem("name") || "My Drive - Google Drive";
    const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
        
    doc.title = name;
    link.rel = "icon";
    link.href = icon;
        
    iframe.src = location.href 
    style.position = "fixed"
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = "none"
    style.width = style.height = "100%"

    doc.head.appendChild(link);
    doc.body.appendChild(iframe)
}

*/