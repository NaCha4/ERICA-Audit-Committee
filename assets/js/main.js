
document.addEventListener("DOMContentLoaded", function() {
    // 푸터 불러오기
    fetch("/assets/components/footer.html")
        .then(response => {
            if (!response.ok) throw new Error("푸터 로드 실패");
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));

    // 헤더(Navbar) 불러오기
    fetch("/assets/components/navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("헤더 로드 실패");
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            const currentPath = window.location.pathname;
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && currentPath.endsWith(href)) {
                    
                    link.classList.add('active');
                    
                    const parentDropdown = link.closest('.dropdown');
                    if (parentDropdown) {
                        parentDropdown.querySelector('.dropdown-toggle').classList.add('active');
                    }
                }
            });
        });
});