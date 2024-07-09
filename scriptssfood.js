document.addEventListener('DOMContentLoaded', () => {
    const foodForm = document.getElementById('foodForm');

    foodForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(foodForm);

        // Form validation
        const categories = formData.getAll('category[]');
        const foodName = formData.get('foodName[]');
        const foodDescription = formData.get('foodDescription[]');
        const pickupDate = formData.get('pickupDate[]');
        const foodImage = formData.get('foodImage[]');

        if (categories.length === 0) {
            alert('Please select at least one category.');
            return;
        }

        if (!foodName) {
            alert('Please enter the food name.');
            return;
        }

        if (!foodDescription) {
            alert('Please enter the food description.');
            return;
        }

        if (!pickupDate) {
            alert('Please select a pickup date.');
            return;
        }

        if (!foodImage) {
            alert('Please upload a food image.');
            return;
        }

        // Display confirmation message
        alert('Form submitted successfully!');

        // Here you can add the code to send the form data to your server

        // Reset the form after submission
        foodForm.reset();
    });
});
