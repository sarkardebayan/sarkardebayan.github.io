class Navbar extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="nav-prof">
            <img src="/images/prof.jpg" alt="dplol">
            <h3>Debayan Sarkar</h3>
            <p><a href="https://github.com/TheSillyCoder" target="_blank" class="intext-link">@TheSillyCoder</a></p>
            <p>IISER Kolkata</p>
        </div>
        <ul class="nav-list" >
            <li id="home" class="nav-item"><a href="/" class="nav-link">Home</a></li>
            <li id="software" class="nav-item"><a href="/software.html" class="nav-link">Software</a></li>
            <li id="music" class="nav-item"><a href="/music.html" class="nav-link">Music</a></li>
            <li id="notes" class="nav-item"><a href="/notes.html" class="nav-link">Notes</a></li>
            <li id="blog" class="nav-item"><a href="/blog" class="nav-link">Blog</a></li>
        </ul>
        <div class="socials">
            <a href="https://github.com/TheSillyCoder" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="mailto:ds22ms002@iiserkol.ac.in"><i class="fa fa-envelope"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.last.fm/user/sillycoder" target="_blank"><i class="fa-brands fa-lastfm"></i></a>
        </div>
        `
    }
}

customElements.define('navbar-component', Navbar)
