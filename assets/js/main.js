var selectedProduct = null;

// Handle product selection
document.querySelectorAll('.select-product').forEach(function (selectButton) {
    selectButton.addEventListener('click', function () {
        selectedProduct = {
            title: selectButton.getAttribute('data-title'),
            price: selectButton.getAttribute('data-price'),
            image: selectButton.getAttribute('data-image')
        };
        updateSelectedProductDetails();
        document.getElementById('nextButton').removeAttribute('disabled');
    });
});

// Function to update selected product details in Step 2
function updateSelectedProductDetails() {
    var selectedProductDetails = document.getElementById('selected-product-details');
    if (selectedProduct) {
        selectedProductDetails.innerHTML = `
                    <div class="product-details col-md-4">
                        <img src="${selectedProduct.image}" alt="${selectedProduct.title}" class="img-thumbnail">
                        <h4 class="product-heading">${selectedProduct.title}</h4>
                        <p>Price: ${selectedProduct.price}</p>
                    </div>
                `;
    } else {
        selectedProductDetails.innerHTML = '<p>No product selected.</p>';
    }
}

// Handle the "Next" button click to navigate to Step 2 if a product is selected
document.getElementById('nextButton').addEventListener('click', function () {
    if (selectedProduct) {
        var step2Tab = new bootstrap.Tab(document.querySelector('a[data-bs-toggle="pill"][href="#step2"]'));
        step2Tab.show();
    } else {
        alert('Please select a product before proceeding.');
    }
});
document.getElementById('nextButton2').addEventListener('click', function () {
    if (selectedProduct) {
        var step3Tab = new bootstrap.Tab(document.querySelector('a[data-bs-toggle="pill"][href="#step3"]'));
        step3Tab.show();
    } else {
        alert('Please select a product before proceeding.');
    }
});
// Handle the "Previous" button click to navigate back to Step 1 or 2
document.getElementById('prevButton').addEventListener('click', function () {
    var currentStep = document.querySelector('.tab-pane.active');
    var prevStep;

    if (currentStep.id === 'step3') {
        prevStep = document.querySelector('a[data-bs-toggle="pill"][href="#step2"]');
    } else {
        prevStep = document.querySelector('a[data-bs-toggle="pill"][href="#step1"]');
    }

    var prevTab = new bootstrap.Tab(prevStep);
    prevTab.show();
});

document.getElementById('editButton').addEventListener('click', function () {
    var step1Tab = document.querySelector('a[data-bs-toggle="pill"][href="#step1"]');
    var productTab = new bootstrap.Tab(step1Tab);
    productTab.show();
});
document.getElementById('nextButton3').addEventListener('click', function () {
    // Check if at least one payment option is selected
    var paymentOptions = document.querySelectorAll('#paymentOptions input[type="checkbox"]');
    var isPaymentSelected = false;

    for (var i = 0; i < paymentOptions.length; i++) {
        if (paymentOptions[i].checked) {
            isPaymentSelected = true;
            break;
        }
    }

    if (isPaymentSelected) {
        var step4Tab = new bootstrap.Tab(document.querySelector('a[data-bs-toggle="pill"][href="#step4"]'));
        step4Tab.show();
    } else {
        alert('Please select a payment option before proceeding to step 4.');
    }
});
document.getElementById('prevButton3').addEventListener('click', function () {
    var step2Tab = new bootstrap.Tab(document.querySelector('a[data-bs-toggle="pill"][href="#step2"]'));
    step2Tab.show();
});
document.getElementById('prevButton4').addEventListener('click', function () {
    var step3Tab = new bootstrap.Tab(document.querySelector('a[data-bs-toggle="pill"][href="#step3"]'));
    step3Tab.show();
});

document.getElementById('deleteButton').addEventListener('click', function () {
    var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
});

// Handle the "Delete" button click in the confirmation modal
document.getElementById('confirmDelete').addEventListener('click', function () {
    // Delete the selected product
    selectedProduct = null; // Reset selected product
    updateSelectedProductDetails();
    document.getElementById('nextButton').setAttribute('disabled', 'disabled');
    var step2Tab = document.querySelector('a[data-bs-toggle="pill"][href="#step2"]');
    var productTab = new bootstrap.Tab(step2Tab);
    productTab.show();

    // Display a message in step 2
    var selectedProductDetails = document.getElementById('selected-product-details');
    selectedProductDetails.innerHTML = '<p>No product selected.</p>';

    // Close the delete confirmation modal
    var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.hide();
});
// Get references to the button and the dropdown menu
const button = document.getElementById("dropdownButton");
const menu = document.getElementById("dropdownMenu");

// Add a click event listener to the button to toggle the menu
button.addEventListener("click", function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

// Add a click event listener to close the menu when clicking outside
document.addEventListener("click", function (event) {
    if (event.target !== button && event.target !== menu) {
        menu.style.display = "none";
    }
});