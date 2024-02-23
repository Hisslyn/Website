<script src="{{ url_for('static', filename='scripts.js') }}"></script>

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleButton').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});