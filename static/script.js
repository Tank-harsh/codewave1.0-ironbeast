 document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const travelForm = document.getElementById('travelForm');
    const addMemberBtn = document.getElementById('addMember');
    const membersContainer = document.getElementById('membersContainer');
    const budgetSelect = document.getElementById('budget');
    const customBudget = document.getElementById('customBudget');
    const loadingDiv = document.getElementById('loading');
    const resultContainer = document.getElementById('resultContainer');
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackForm = document.getElementById('feedbackForm');
    
    // Add member functionality
    addMemberBtn.addEventListener('click', function() {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member-item';
        memberDiv.innerHTML = `
            <input type="text" placeholder="Name" class="member-name" required>
            <input type="number" placeholder="Age" class="member-age" required min="1">
            <button type="button" class="remove-member">×</button>
        `;
        membersContainer.appendChild(memberDiv);
        
        // Add remove functionality
        memberDiv.querySelector('.remove-member').addEventListener('click', function() {
            if (membersContainer.children.length > 1) {
                membersContainer.removeChild(memberDiv);
            }
        });
    });
    
    // Show/hide custom budget field
    budgetSelect.addEventListener('change', function() {
        customBudget.style.display = this.value === 'custom' ? 'block' : 'none';
    });
    
    // Form submission
    travelForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading
        loadingDiv.style.display = 'block';
        resultContainer.style.display = 'none';
        
        // Collect form data
        const formData = {
            destination: document.getElementById('destination').value,
            tripDuration: document.getElementById('tripDuration').value,
            members: Array.from(membersContainer.children).map(child => ({
                name: child.querySelector('.member-name').value,
                age: child.querySelector('.member-age').value
            })),
            budget: budgetSelect.value === 'custom' ? customBudget.value : budgetSelect.value,
            transport: document.getElementById('transport').value,
            accommodation: document.getElementById('accommodation').value,
            food: document.getElementById('food').value,
            interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value),
            pace: document.getElementById('pace').value,
            romantic: document.getElementById('romantic').value,
            specialRequests: document.getElementById('specialRequests').value
        };
        
        // Simulate API call with timeout
        setTimeout(() => {
            // Hide loading
            loadingDiv.style.display = 'none';
            
            // Generate and display results
            generateResults(formData);
            
            // Show results
            resultContainer.style.display = 'block';
        }, 2000);
    });
    
    // Star rating functionality
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            document.getElementById('rating').value = value;
            
            stars.forEach(s => {
                s.classList.toggle('active', parseInt(s.getAttribute('data-value')) <= value);
            });
        });
    });
    
    // Feedback form submission
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your feedback!');
        feedbackContainer.style.display = 'none';
    });
    
    // Function to generate sample results
    function generateResults(data) {
        // This would be replaced with actual API response in a real app
        const destination = data.destination;
        const duration = data.tripDuration;
        const romantic = data.romantic === 'yes';
        
        let resultHTML = `
            <h2>Your ${duration} Trip to ${destination}</h2>
            
            <div class="result-section">
                <h3>📆 Day-by-Day Itinerary</h3>
        `;
        
        // Generate day plans (sample for 3 days)
        for (let i = 1; i <= 3; i++) {
            resultHTML += `
                <div class="day-plan">
                    <h4>Day ${i}</h4>
                    <p><strong>Morning:</strong> Visit ${destination}'s famous landmarks</p>
                    <p><strong>Afternoon:</strong> Explore local markets and try authentic cuisine</p>
                    <p><strong>Evening:</strong> Relax at a cozy café ${romantic ? 'with romantic ambiance' : ''}</p>
                    <p class="price">Estimated costs: $${20 + i * 5} per person</p>
                </div>
            `;
        }
        
        resultHTML += `
            </div>
            
            <div class="result-section">
                <h3>🛏 Where to Stay</h3>
                <div class="hotel-item">
                    <h4>${destination} ${data.accommodation === 'luxury' ? 'Grand Hotel' : data.accommodation === 'mid-range' ? 'Comfort Inn' : 'Budget Stay'}</h4>
                    <p>Located in the heart of ${destination}, close to major attractions</p>
                    <p class="rating">Rating: ${data.accommodation === 'luxury' ? '★★★★★' : data.accommodation === 'mid-range' ? '★★★★' : '★★★'}</p>
                    <p class="price">Price: $${data.accommodation === 'luxury' ? '200' : data.accommodation === 'mid-range' ? '100' : '50'} per night</p>
                </div>
            </div>
            
            <div class="result-section">
                <h3>🍽 What to Eat</h3>
                <div class="restaurant-item">
                    <h4>Local ${data.food === 'veg' ? 'Vegetarian' : data.food === 'vegan' ? 'Vegan' : ''} Delights</h4>
                    <p>Try the signature ${data.food === 'veg' ? 'vegetable curry' : data.food === 'vegan' ? 'plant-based burger' : 'mixed grill'}</p>
                    <p>Average cost: $${data.food === 'veg' ? '15' : data.food === 'vegan' ? '18' : '25'} per person</p>
                </div>
            </div>
            
            <div class="result-section">
                <h3>🚍 Route & Transport Plan</h3>
                <p>Getting there: ${data.transport === 'flight' ? 'Flight to ' + destination + ' International Airport' : 
                    data.transport === 'train' ? 'Scenic train ride to ' + destination + ' Central Station' : 
                    data.transport === 'bus' ? 'Comfortable bus to ' + destination : 'Self-drive route to ' + destination}</p>
                <p>Local transport: Metro and taxi services available</p>
            </div>
            
            <div class="result-section">
                <h3>💰 Budget Overview</h3>
                <p>Total estimated cost for ${duration}: $${data.budget === 'low' ? '800' : data.budget === 'medium' ? '1500' : '3000'} per person</p>
                <p>Includes accommodation, food, transport, and activities</p>
            </div>
        `;
        
        if (romantic) {
            resultHTML += `
                <div class="result-section">
                    <h3>💞 Romantic Experiences</h3>
                    <p>• Sunset dinner at ${destination}'s best rooftop restaurant</p>
                    <p>• Couple's spa day at luxury resort</p>
                    <p>• Private boat tour along the river</p>
                </div>
            `;
        }
        
        resultHTML += `
            <div class="result-section">
                <h3>💡 Local Tips</h3>
                <p>• Best time to visit: Spring or Fall</p>
                <p>• Pack comfortable walking shoes</p>
                <p>• Learn a few basic local phrases</p>
                <p>• Download the local transport app</p>
            </div>
            
            <button type="button" class="btn" id="showFeedback">Submit Trip Feedback</button>
        `;
        
        resultContainer.innerHTML = resultHTML;
        
        // Add event listener to feedback button
        document.getElementById('showFeedback')?.addEventListener('click', function() {
            resultContainer.style.display = 'none';
            feedbackContainer.style.display = 'block';
        });
    }
});