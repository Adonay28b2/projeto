function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/adonis-b.jpeg")
    img.setAttribute("alt", "imagem de perfil com oculos")
  } else {
    img.setAttribute("src", "assets/adonis-a.jpeg")
    img.setAttribute("alt", "imagem de perfil")
  }
}
