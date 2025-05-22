document.addEventListener('DOMContentLoaded', function() {

   

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let valid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    valid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!valid) {
                e.preventDefault();
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });
    });

    const opportunityCards = document.querySelectorAll('.opportunity-item');
    opportunityCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        });
    });

    const deadlineElements = document.querySelectorAll('.deadline-counter');
    deadlineElements.forEach(el => {
        const deadline = new Date(el.dataset.deadline);
        updateDeadlineCounter(el, deadline);
        setInterval(() => updateDeadlineCounter(el, deadline), 60000);
    });
});

function updateDeadlineCounter(element, deadline) {
    const now = new Date();
    const diff = deadline - now;
    
    if (diff <= 0) {
        element.textContent = 'Deadline passed';
        element.classList.add('deadline-passed');
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    element.textContent = `${days}d ${hours}h ${minutes}m remaining`;
    element.classList.remove('deadline-passed');
}



