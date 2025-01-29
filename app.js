const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    // Open sidebar on menu button click
    menuBtn.addEventListener('click', () => {
      sidebar.style.left = '0'; // Show sidebar
    });
    // Close sidebar on close button click
    closeBtn.addEventListener('click', () => {
      sidebar.style.left = '-250px'; // Hide sidebar
    });