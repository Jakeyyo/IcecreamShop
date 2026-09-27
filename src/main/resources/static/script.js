let flavoursLink = document.getElementById("flavoursLink");
let suppliersLink = document.getElementById("suppliersLink");
let customersLink = document.getElementById("customersLink");
let ordersLink = document.getElementById("ordersLink");
let dataLink = document.getElementById("dataLink");

let displayBalance = document.getElementById("displayBalance");

let displayTitle = document.getElementById("displayTitle");
let displayList = document.getElementById("displayList");

let getFlavourByNameInput = document.getElementById("getFlavourByNameInput");

let getAllFlavoursButton = document.getElementById("getAllFlavoursButton");

let nameCheckBox = document.getElementById("nameCheckBox");
let descCheckBox = document.getElementById("descCheckBox")
let archiveCheckBox = document.getElementById("archiveCheckBox");

let nameCheckBoxLabel = document.getElementById("nameCheckBoxLabel");
let descCheckBoxLabel = document.getElementById("descCheckBoxLabel");
let archiveCheckBoxLabel = document.getElementById("archiveCheckBoxLabel");

let addFlavourButton = document.getElementById("addFlavourButton");

let addFlavourPopup = document.getElementById("addFlavourPopup");
let addFlavourNameInput = document.getElementById("addFlavourNameInput");
let addFlavourStockLevelInput = document.getElementById("addFlavourStockLevelInput");
let addFlavourPurchasePrice = document.getElementById("addFlavourPurchasePrice");
let addFlavourSellingPrice = document.getElementById("addFlavourSellingPrice");
let addFlavourSelectSupplier = document.getElementById("addFlavourSelectSupplier");
let addFlavourSelectImage = document.getElementById("addFlavourSelectImage");
let saveFlavourButton = document.getElementById("saveFlavourButton");
let closeAddNewFlavourButton = document.getElementById("closeAddNewFlavourButton");

let editFlavourPopup = document.getElementById("editFlavourPopup");
let editFlavourTitle = document.getElementById("editFlavourTitle");
let editFlavourNameInput = document.getElementById("editFlavourNameInput");
let editFlavourStockLevelInput = document.getElementById("editFlavourStockLevelInput");
let editFlavourPurchasePrice = document.getElementById("editFlavourPurchasePrice");
let editFlavourSellingPrice = document.getElementById("editFlavourSellingPrice");
let editFlavourSelectSupplier = document.getElementById("editFlavourSelectSupplier");
let editFlavourSelectImage = document.getElementById("editFlavourSelectImage");
let editFlavourButton = document.getElementById("editFlavourButton");
let closeEditFlavourButton = document.getElementById("closeEditFlavourButton");
let editFlavourCurrentImage = document.getElementById("editFlavourCurrentImage");

let deleteFlavourButton = document.getElementById("deleteFlavourButton");
let deleteFlavourPopup = document.getElementById("deleteFlavourPopup");
let confirmDeleteFlavourText = document.getElementById("confirmDeleteFlavourText");
let deleteFlavourButtonOK = document.getElementById("deleteFlavourButtonOK");
let deleteFlavourButtonCancel = document.getElementById("deleteFlavourButtonCancel");

let addSupplierPopup = document.getElementById("addSupplierPopup");
let addSupplierNameInput = document.getElementById("addSupplierNameInput");
let addSupplierPhoneNumberInput = document.getElementById("addSupplierPhoneNumberInput");
let addSupplierEmailInput = document.getElementById("addSupplierEmailInput");
let saveSupplierButton = document.getElementById("saveSupplierButton");
let closeAddNewSupplierButton = document.getElementById("closeAddNewSupplierButton");

let editSupplierPopup = document.getElementById("editSupplierPopup");
let editSupplierTitle = document.getElementById("editSupplierTitle");
let editSupplierNameInput = document.getElementById("editSupplierNameInput");
let editSupplierPhoneNumberInput = document.getElementById("editSupplierPhoneNumberInput");
let editSupplierEmailInput = document.getElementById("editSupplierEmailInput");
let editSupplierButton = document.getElementById("editSupplierButton");
let archiveSupplierButton = document.getElementById("archiveSupplierButton");
let closeEditSupplierButton = document.getElementById("closeEditSupplierButton");

let archiveSupplierPopup = document.getElementById("archiveSupplierPopup");
let confirmArchiveSupplierText = document.getElementById("confirmArchiveSupplierText");
let archiveSupplierButtonOK = document.getElementById("archiveSupplierButtonOK");
let archiveSupplierButtonCancel = document.getElementById("archiveSupplierButtonCancel");

let addOrderButton = document.getElementById("addOrderButton");
let addOrderPopup = document.getElementById("addOrderPopup");
let addNewIcecreamButton = document.getElementById("addNewIcecreamButton");
let totalPriceTitle = document.getElementById("totalPriceTitle");
let displayListIcecreams = document.getElementById("displayListIcecreams");
let addOrderButtonOK = document.getElementById("addOrderButtonOK");
let addOrderButtonCancel = document.getElementById("addOrderButtonCancel");
let addIcecreamPopup = document.getElementById("addIcecreamPopup");
let addNewFlavourIcecreamButton = document.getElementById("addNewFlavourIcecreamButton");
let displayFlavoursOrder = document.getElementById("displayFlavoursOrder");
let addIcecreamButtonOK = document.getElementById("addIcecreamButtonOK");
let addNewFlavourIcecreamButtonClose = document.getElementById("addNewFlavourIcecreamButtonClose");
let showActiveFlavoursPopup = document.getElementById("showActiveFlavoursPopup");
let showActiveFlavoursList = document.getElementById("showActiveFlavoursList");
let showActiveFlavoursListButtonClose = document.getElementById("showActiveFlavoursListButtonClose");

let flavourStockLevelTooLowPopup = document.getElementById("flavourStockLevelTooLowPopup");
let flavourStockLevelTooLowButtonClose = document.getElementById("flavourStockLevelTooLowButtonClose");

let addCustomerPopup = document.getElementById("addCustomerPopup");
let customerNameInput = document.getElementById("customerNameInput");
let customerPhoneInput = document.getElementById("customerPhoneInput");
let customerEmailInput = document.getElementById("customerEmailInput");
let addCustomerButtonOK = document.getElementById("addCustomerButtonOK");
let addCustomerButtonCancel = document.getElementById("addCustomerButtonCancel");

let editCustomerPopup = document.getElementById("editCustomerPopup");
let editCustomerTitle = document.getElementById("editCustomerTitle");
let editCustomerNameInput = document.getElementById("editCustomerNameInput");
let editCustomerPhoneNumberInput = document.getElementById("editCustomerPhoneNumberInput");
let editCustomerEmailInput = document.getElementById("editCustomerEmailInput");
let editCustomerButton = document.getElementById("editCustomerButton");
let archiveCustomerButton = document.getElementById("archiveCustomerButton");
let closeEditCustomerButton = document.getElementById("closeEditCustomerButton");

let confirmPopup = document.getElementById("confirmPopup");
let confirmOrderTitle = document.getElementById("confirmOrderTitle");
let confirmOrderTotalPrice = document.getElementById("confirmOrderTotalPrice");
let confirmOrderList = document.getElementById("confirmOrderList");
let confirmOrderButton = document.getElementById("confirmOrderButton");
let cancelOrderButton = document.getElementById("cancelOrderButton");

let orderDetailsPopup = document.getElementById("orderDetailsPopup");
let orderDetailsTitle = document.getElementById("orderDetailsTitle");
let orderDetailsList = document.getElementById("orderDetailsList");
let orderDetailsButtonClose = document.getElementById("orderDetailsButtonClose");

let dataMenuPopup = document.getElementById("dataMenuPopup");
let mostFrequentCustomersButton = document.getElementById("mostFrequentCustomersButton");
let mostpPopularFlavoursButton = document.getElementById("mostpPopularFlavoursButton");
let closeDataMenuPopupButton = document.getElementById("closeDataMenuPopupButton");

let lastClicked = "flavours";
let selectedFlavourId;
let selectedFlavourName;
let selectedFlavourActive;
let selectedFlavourPurchasePrice;
let selectedFlavourSellingprice;

let selectedSupplierId;
let selectedSupplierName;
let selectedSupplierActive;

let selectedCustomerId;
let selectedCustomerActive;

let icecreamCount = 0;
let totalPrice = 0;
let orderPrice = 0;
let icecreamFlavours = [];
let orderIcecreams = [];

let customer = null;

displayCashBalance().then(balance => {
    displayBalance.innerHTML = "Cash balance: " +  balance.toFixed(2);
});

flavoursLink.addEventListener("click", function(event) {

    event.preventDefault();

    getFlavourByNameInput.placeholder = "Search flavour name...";
    addFlavourButton.innerHTML = "New Flavour...";
    addFlavourButton.style.visibility = "visible";
    getFlavourByNameInput.style.visibility = "visible";
    getAllFlavoursButton.style.visibility = "visible";
    showAllCheckBoxes(true);

    lastClicked ="flavours";

    getAllFlavoursButton.click();
    
});

suppliersLink.addEventListener("click", function(event) {
    event.preventDefault();

    getFlavourByNameInput.placeholder = "Search supplier name...";
    addFlavourButton.innerHTML = "New Supplier...";
    addFlavourButton.style.visibility = "visible";
    getFlavourByNameInput.style.visibility = "visible";
    getAllFlavoursButton.style.visibility = "visible";
    showAllCheckBoxes(true);

    lastClicked = "suppliers";

    getAllFlavoursButton.click();
});

customersLink.addEventListener("click", function(event) {
    event.preventDefault();

    getFlavourByNameInput.placeholder = "Search customer name...";
    addFlavourButton.style.visibility = "hidden";
    getFlavourByNameInput.style.visibility = "visible";
    getAllFlavoursButton.style.visibility = "visible";
     showAllCheckBoxes(true);

    lastClicked = "customers";

    getAllFlavoursButton.click();
});

ordersLink.addEventListener("click", function(event) {
    event.preventDefault();

    getFlavourByNameInput.placeholder = "Search customer name...";
    addFlavourButton.style.visibility = "hidden";
    getFlavourByNameInput.style.visibility = "visible";
    getAllFlavoursButton.style.visibility = "visible";
    showAllCheckBoxes(false);

    lastClicked = "orders";

    getAllFlavoursButton.click();
});

mostFrequentCustomersButton.addEventListener("click", function(event) {
    event.preventDefault();

    getFlavourByNameInput.placeholder = "Search customer name...";
    addFlavourButton.style.visibility = "hidden";
    getFlavourByNameInput.style.visibility = "visible";
    getAllFlavoursButton.style.visibility = "visible";
    showAllCheckBoxes(false);

    lastClicked = "mostFrequentCustomers";

    getAllFlavoursButton.click();

    dataMenuPopup.close();
});

mostpPopularFlavoursButton.addEventListener("click", function(event) {
    event.preventDefault();

    getFlavourByNameInput.placeholder = "Search flavour name...";
    addFlavourButton.style.visibility = "hidden";
    getFlavourByNameInput.style.visibility = "visible";
    getAllFlavoursButton.style.visibility = "visible";
    showAllCheckBoxes(false);

    lastClicked = "mostPopularFlavours";

    getAllFlavoursButton.click();

    dataMenuPopup.close();
});

//COMBINED EVENT LISTENERS

getAllFlavoursButton.addEventListener("click", async function() {

    removeCheckBoxEventListners();
    nameCheckBox.addEventListener("change", function () {getAllFlavoursButton.click()});
    descCheckBox.addEventListener("change", function () {getAllFlavoursButton.click()});
    archiveCheckBox.addEventListener("change", function () {getAllFlavoursButton.click()});

    removeAllChildrenDisplayList();

    let searchedName = getFlavourByNameInput.value;
    let nameSort = nameCheckBox.checked ? "name" : null;
    let descSort = descCheckBox.checked ? "desc" : null;
    let archiveSort = archiveCheckBox.checked ? "true" : "false";

    if (lastClicked == "flavours") {

    fetch(`http://localhost:8080/flavours?name=${searchedName}&sortBy=${nameSort}&desc=${descSort}&active=${archiveSort}`).then(checkError).then(response => response.json()).then(flavours => {
    flavours.forEach(flavour => {

        let flavourDiv = document.createElement("div");

        flavourDiv.innerHTML =
        `<img src = "${flavour.imagePath}">
        <h2>${flavour.name}</h2>
        <p>Stock Level: ${flavour.stockLevel} l</p>
        <p>${flavour.supplier ? flavour.supplier.name : "Ingen supplier"}</p>
        <p>Purchase price/l: ${flavour.purchasePrice}</p>
        <p>Selling price/scoop: ${flavour.sellingPrice}</p>
        `;

        flavourDiv.addEventListener("click", function() {
            selectedFlavourId = flavour.id;
            selectedFlavourName = flavour.name;
            selectedFlavourActive = flavour.active;
            selectedFlavourPurchasePrice = flavour.purchasePrice;
            selectedFlavourSellingprice = flavour.sellingPrice;

            editFlavourPopup.showModal();

            editFlavourTitle.innerHTML = flavour.name;
            editFlavourNameInput.value = flavour.name;
            editFlavourStockLevelInput.value = flavour.stockLevel;
            editFlavourCurrentImage.src = flavour.imagePath;
            editFlavourPurchasePrice.value = selectedFlavourPurchasePrice;
            editFlavourSellingPrice.value= selectedFlavourSellingprice;

            fetch("http://localhost:8080/suppliers").then(checkError).then(response => response.json()).then(
                suppliers => {
                    editFlavourSelectSupplier.innerHTML = `<option value = "">Select supplier</option>`;

                    suppliers.forEach(supplier => {
                        let option = document.createElement("option");

                        option.value = supplier.id;
                        option.textContent = supplier.name;

                        if (supplier.id == flavour.supplier.id) {
                            option.selected = true;
                        }

                        editFlavourSelectSupplier.appendChild(option);
                    });
                }).catch(error => {
                    displayList.innerHTML = `<p>${error.message}</p>`;
                });
        });

        displayList.appendChild(flavourDiv);
    });
    }).catch(error => {
        displayList.innerHTML = 
        `<p>${error.message}</p>`;
    });
}

else if (lastClicked == "suppliers") {

    fetch(`http://localhost:8080/suppliers?name=${searchedName}&sortBy=${nameSort}&desc=${descSort}&active=${archiveSort}`).then(checkError).then(response => response.json()).then(suppliers => {
    suppliers.forEach(supplier => {

        let supplierDiv = document.createElement("div");

        supplierDiv.innerHTML =
        `<h2>${supplier.name}</h2>
        <p>Phone Number: ${supplier.phoneNumber}</p>
        <p>Email: ${supplier.email}</p>`;

        supplierDiv.addEventListener("click", function() {
            selectedSupplierId = supplier.id;
            selectedSupplierName = supplier.name;
            selectedSupplierActive = supplier.active;

            editSupplierPopup.showModal();

            editSupplierTitle.innerHTML = supplier.name;
            editSupplierNameInput.value = supplier.name;
            editSupplierPhoneNumberInput.value = supplier.phoneNumber;
            editSupplierEmailInput.value = supplier.email;
        });

        displayList.appendChild(supplierDiv);
    });
    }).catch(error => {
        displayList.innerHTML = 
        `<p>${error.message}</p>`;
    });
}

else if (lastClicked == "customers") {

    fetch(`http://localhost:8080/customers?name=${searchedName}&sortBy=${nameSort}&desc=${descSort}&active=${archiveSort}`).then(checkError).then(response => response.json()).then(customers => {
    customers.forEach(customer => {

        let customerDiv = document.createElement("div");

        customerDiv.innerHTML =
        `<h2>${customer.name}</h2>
        <p>Phone Number: ${customer.phoneNumber}</p>
        <p>Email: ${customer.email}</p>`;

        customerDiv.addEventListener("click", function() {
            selectedCustomerId = customer.id;
            selectedCustomerActive = customer.active;

            editCustomerPopup.showModal();

            editCustomerTitle.innerHTML = customer.name;
            editCustomerNameInput.value = customer.name;
            editCustomerPhoneNumberInput.value = customer.phoneNumber;
            editCustomerEmailInput.value = customer.email;
        });

        displayList.appendChild(customerDiv);
    });
    }).catch(error => {
        displayList.innerHTML = 
        `<p>${error.message}</p>`;
    });
}

else if (lastClicked == "orders") {


    fetch(`http://localhost:8080/orders?name=${searchedName}`).then(checkError).then(response => response.json()).then(orders => {
        orders.forEach(order => {
    
            let orderDiv = document.createElement("div");

                orderDiv.innerHTML = `
                <h2>Order id: ${order.id}</h2>
                <p>Customer name: ${order.customer.name}</p>
                <p>Order sum: ${order.sum}`;

                orderDiv.addEventListener("click", function() {
                    orderDetailsPopup.showModal();

                    fetch(`http://localhost:8080/icecreams/order/${order.id}`).then(checkError).then(response => response.json()).then(icecreams => {
                        
                    orderDetailsList.innerHTML = `
                    <p>Order id: ${order.id}</p>
                    <p>Customer name: ${order.customer.name}</p>
                    <p>Customer phone number: ${order.customer.phoneNumber}</p>
                    <p>Customer email: ${order.customer.email}</p>
                    <p>Order total sum: ${order.sum}</p>
                    <p>Order time: ${order.orderTime}</p><br>`;
                        
                    let icc = 1;
                    icecreams.forEach(icecream => {
                        orderDetailsList.innerHTML += `
                        <p>Icecream ${icc++}:</p>
                        <p>Price: ${icecream.price}</p>
                        <p>Flavours: `;

                        let flavourString = "";

                    icecream.flavours.forEach(flavour => {
                        flavourString += `${flavour.name}, `
                    })

                    orderDetailsList.innerHTML += flavourString.substring(0, flavourString.length - 2) + "</p><br>";
                    });
                    });
                });

                displayList.appendChild(orderDiv);
        });
    }).catch(error => {
            displayList.innerHTML = `${error.message}`;
        });
}

else if (lastClicked == "mostFrequentCustomers") {

    const response = await fetch(`http://localhost:8080/customers/mostFrequentCustomers?name=${searchedName}`);
    const customers = await response.json();

    for (const customer of customers) {

        const orderSumResponse = await fetch(
            `http://localhost:8080/customers/orderSum/${customer.id}`
        );

        const orderSum = await orderSumResponse.json();

        let customerDiv = document.createElement("div");

        customerDiv.innerHTML =
            `<h2>${customer.name}</h2>
            <p>Order sum: ${orderSum}</p>`;

        displayList.appendChild(customerDiv);
    }
}

    else if (lastClicked == "mostPopularFlavours") {

        const response = await fetch(`http://localhost:8080/flavours/mostPopularFlavours`);
        const flavours = await response.json();

    for (const flavour of flavours) {

        const flavourCountResponse = await fetch(
            `http://localhost:8080/flavours/count/${flavour.id}`
        );

        const flavourCount = await flavourCountResponse.json();

        let flavourDiv = document.createElement("div");

        flavourDiv.innerHTML =
            `<h2>${flavour.name}</h2>
            <p>Number of icecreams containing: ${flavourCount}</p>`;

        displayList.appendChild(flavourDiv);

    }
}
});

getAllFlavoursButton.click();

addFlavourButton.addEventListener("click", function () {

if (lastClicked == "flavours") {
 addFlavourPopup.showModal();

 fetch("http://localhost:8080/suppliers").then(checkError).then(response => response.json())
 .then(suppliers => {

    addFlavourSelectSupplier.innerHTML = `<option value="">Select supplier</option>`;

    suppliers.forEach(supplier => {

        let option = document.createElement("option");

        option.value = supplier.id;
        option.textContent = supplier.name;

        addFlavourSelectSupplier.appendChild(option);
    });
 }).catch(error => {
    displayList.innerHTML = `<p>${error.message}</p>`;
 });

}

    else if (lastClicked == "suppliers") {
        addSupplierPopup.showModal();
    }
});

saveFlavourButton.addEventListener("click", function() {

    let name = addFlavourNameInput.value;
    let stockLevel = Number(addFlavourStockLevelInput.value);
    let supplierId = Number(addFlavourSelectSupplier.value);
    let purchasePrice = Number(addFlavourPurchasePrice.value);
    let sellingPrice = Number(addFlavourSellingPrice.value);
    let imageFile = addFlavourSelectImage.files[0];

    if (!imageFile) {
        throw new Error("Please select an image");
    }

    let formData = new FormData();

    let request = {
        name: name,
        stockLevel: stockLevel,
        supplierId: supplierId,
        purchasePrice: purchasePrice,
        sellingPrice: sellingPrice
    };

    formData.append(
        "request",
        new Blob([JSON.stringify(request)], {
            type: "application/json"
        })
    );

    formData.append("image", imageFile);

    fetch("http://localhost:8080/flavours", {
        method: "POST",
        body: formData
    }).then(checkError).then(response => response.text()).then(message => {
        displayTitle.innerHTML = message;
        closeAddNewFlavourButton.click();
        
        setTimeout(() => {
        getAllFlavoursButton.click();
        displayCashBalance().then(balance => {
    displayBalance.innerHTML = "Cash balance " + balance.toFixed(2);
        });
    }, 200);
    }).catch(error => {
        displayList.innerHTML = `
        <p>${error.message}</p>`;
    });
});

//FLAVOUR EVENT LISTENERS

closeAddNewFlavourButton.addEventListener("click", function() {
addFlavourPopup.close();
});

editFlavourButton.addEventListener("click", function() {
                let name = editFlavourNameInput.value;
                let stockLevel = Number(editFlavourStockLevelInput.value);
                let supplierId = Number(editFlavourSelectSupplier.value);
                let imageFile = editFlavourSelectImage.files[0];
                let active = selectedFlavourActive;
                let purchasePrice = Number(editFlavourPurchasePrice.value);
                let sellingPrice = Number(editFlavourSellingPrice.value);

                let formData = new FormData();

                let request = {
                    name: name,
                    stockLevel: stockLevel,
                    supplierId: supplierId,
                    active: active,
                    purchasePrice: purchasePrice,
                    sellingPrice: sellingPrice
                    
                };

                formData.append("request",
                    new Blob([JSON.stringify(request)], {
                    type: "application/json"
                 }));

                 if (imageFile) {
                 formData.append("image", imageFile);
                 }

                 fetch(`http://localhost:8080/flavours/${selectedFlavourId}`, {
                    method: "PUT",
                    body: formData
                 }).then(checkError).then(response => response.text()).then(message => {
                    displayTitle.innerHTML = message;
                    closeEditFlavourButton.click();
                    getAllFlavoursButton.click();
                      displayCashBalance().then(balance => {
                            displayBalance.innerHTML = "Cash balance: " + balance.toFixed(2);
                        });
                 }).catch(error => {
                    displayList.innerHTML = `<p>${error.message}</p>`;
                 })
            });

 closeEditFlavourButton.addEventListener("click", function() {
                editFlavourPopup.close();
            });

deleteFlavourButton.addEventListener("click", function() {
    deleteFlavourPopup.showModal();

    if (selectedFlavourActive) {
    confirmDeleteFlavourText.innerHTML = "Confirm put flavour in archive: " + selectedFlavourName;
    }

    else {
    confirmDeleteFlavourText.innerHTML = "Confirm list flavour as active: " + selectedFlavourName;
    }
});

deleteFlavourButtonOK.addEventListener("click", function() {
    let name = editFlavourNameInput.value;
    let stockLevel = Number(editFlavourStockLevelInput.value);
    let supplierId = Number(editFlavourSelectSupplier.value);
    let imageFile = editFlavourSelectImage.files[0];
    let active = !selectedFlavourActive;
    let purchasePrice = Number(editFlavourPurchasePrice.value);
    let sellingPrice = Number(editFlavourSellingPrice.value);

    let formData = new FormData();

                let request = {
                    name: name,
                    stockLevel: stockLevel,
                    supplierId: supplierId,
                    active: active,
                    purchasePrice: purchasePrice,
                    sellingPrice: sellingPrice
                };

                 formData.append("request",
                    new Blob([JSON.stringify(request)], {
                    type: "application/json"
                 }));

                 if (imageFile) {
                 formData.append("image", imageFile);
                 }

                 fetch(`http://localhost:8080/flavours/${selectedFlavourId}`, {
                    method: "PUT",
                    body: formData
                 }).then(checkError).then(response => response.text()).then(message => {
                    displayTitle.innerHTML = message;
                    closeEditFlavourButton.click();
                    getAllFlavoursButton.click();
                 }).catch(error => {
                    displayList.innerHTML = `<p>${error.message}</p>`;
                 });

                 deleteFlavourPopup.close();
});

deleteFlavourButtonCancel.addEventListener("click", function() {
    deleteFlavourPopup.close();
});

//SUPPLIER EVENT LISTENERS

saveSupplierButton.addEventListener("click", function() {
    let name = addSupplierNameInput.value;
    let phoneNumber = addSupplierPhoneNumberInput.value;
    let email = addSupplierEmailInput.value;
    
    fetch("http://localhost:8080/suppliers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            name: name,
            phoneNumber: phoneNumber,
            email: email
        })
    }).then(checkError).then(response => response.text()).then(message => {
        displayTitle.innerHTML = message;
        closeAddNewSupplierButton.click();
        getAllFlavoursButton.click();
    }).catch(error => {
        displayList.innerHTML = `<p>${error.message}</p>`;
    });

});

closeAddNewSupplierButton.addEventListener("click", function() {
    addSupplierPopup.close();
});

editSupplierButton.addEventListener("click", function() {
    let name = editSupplierNameInput.value;
    let phoneNumber = editSupplierPhoneNumberInput.value;
    let email = editSupplierEmailInput.value;
    let active = selectedSupplierActive;

    fetch(`http://localhost:8080/suppliers/${selectedSupplierId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            active: active
        })
    }).then(checkError).then(response => response.text()).then(message => {
        displayTitle.innerHTML = message;
        closeEditSupplierButton.click();
        getAllFlavoursButton.click();
    }).catch(error => {
        displayList.innerHTML = `<p>${error.message}</p>`;
    });
});

closeEditSupplierButton.addEventListener("click", function() {
    editSupplierPopup.close();
});

archiveSupplierButton.addEventListener("click", function() {
    archiveSupplierPopup.showModal();

    if (selectedSupplierActive) {
        confirmArchiveSupplierText.innerHTML = "Confirm put supplier in archive: " + selectedSupplierName;
    }

    else {
        confirmArchiveSupplierText.innerHTML = "Confirm list supplier as active: " + selectedSupplierName;
    }
});

archiveSupplierButtonOK.addEventListener("click", function() {
    let name = editSupplierNameInput.value;
    let phoneNumber = editSupplierPhoneNumberInput.value;
    let email = editSupplierEmailInput.value;
    let active = !selectedSupplierActive;

    fetch(`http://localhost:8080/suppliers/${selectedSupplierId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            active: active
        })
    }).then(checkError).then(response => response.text()).then(message => {
        displayTitle.innerHTML = message;
        closeEditSupplierButton.click();
        getAllFlavoursButton.click();
    }).catch(error => {
        displayList.innerHTML = `<p>${error.message}</p>`;
    });

    archiveSupplierPopup.close();
});

archiveSupplierButtonCancel.addEventListener("click", function() {
    archiveSupplierPopup.close();
});

//ORDER EVENT LISTENERS

addOrderButton.addEventListener("click", function() {
    addOrderPopup.showModal();
});

addOrderButtonOK.addEventListener("click", function() {
    addCustomerPopup.showModal();
});

addOrderButtonCancel.addEventListener("click", function() {
    removeAllChildrenConfirmOrderList();
    removeAllChildrenIcecreamsList();
    orderIcecreams = [];
    icecreamCount = 0;
    totalPrice = 0;
    orderPrice = 0;
    totalPriceTitle.innerHTML = "Total price:";
    addOrderPopup.close();
});

addNewIcecreamButton.addEventListener("click", function() {
    addIcecreamPopup.showModal();
});

addIcecreamButtonOK.addEventListener("click", function() {

    icecreamCount++;

    let iceCreamObj = {
        price: 0,
        flavours: []
    };

    let icecreamDiv = document.createElement("div");

    icecreamDiv.innerHTML = `<h2>Icecream ${icecreamCount}:</h2>`;

    icecreamFlavours.forEach(flavour => {

        iceCreamObj.price += flavour.sellingPrice;
        iceCreamObj.flavours.push(flavour);
        

        let flavourDiv = document.createElement("div");

        flavourDiv.innerHTML = 
        `<img src = "${flavour.imagePath}"
         <p>${flavour.name}</p>`;

         icecreamDiv.appendChild(flavourDiv);
    });

    orderIcecreams.push(iceCreamObj);

    icecreamFlavours = [];

    totalPrice += orderPrice;
    orderPrice = 0;
    totalPriceTitle.innerHTML = "Total price: " + totalPrice;
    confirmOrderTotalPrice.innerHTML = "Total price: " + totalPrice;

    displayListIcecreams.appendChild(icecreamDiv);
    confirmOrderList.append(icecreamDiv.cloneNode(true));

    removeAllChildrenDisplayFlavoursOrder();
    addIcecreamPopup.close();
});

addNewFlavourIcecreamButtonClose.addEventListener("click", function() {
    icecreamFlavours = [];
    orderPrice = 0;
    removeAllChildrenDisplayFlavoursOrder();
    addIcecreamPopup.close();
});

addNewFlavourIcecreamButton.addEventListener("click", function() {
    showActiveFlavoursPopup.showModal();

    removeAllChildrenShowFlavoursList();

    fetch(`http://localhost:8080/flavours?active="true"`).then(checkError).then(response => response.json()).then(flavours => {
    flavours.forEach(flavour => {

        let flavourDiv = document.createElement("div");

        flavourDiv.innerHTML =
        `<img src = "${flavour.imagePath}">
        <h2>${flavour.name}</h2>
        <p>Price/scoop: ${flavour.sellingPrice}</p>
        `;

        flavourDiv.addEventListener("click", function() {

            if (flavour.stockLevel - 0.15 < 0) {
                flavourStockLevelTooLowPopup.showModal();
            }

            else {
            icecreamFlavours.push(flavour);

            let flavourOrderDiv = document.createElement("div");

            flavourOrderDiv.innerHTML = `
            <img src = "${flavour.imagePath}">
            <p>${flavour.name}</p>`;

            displayFlavoursOrder.appendChild(flavourOrderDiv);
            showActiveFlavoursPopup.close();

            orderPrice += flavour.sellingPrice;
        }
        });

        showActiveFlavoursList.appendChild(flavourDiv);
    });
}).catch(error => {
    showActiveFlavoursList.innerHTML = `<p>${error.message}</p>`;
});
});

flavourStockLevelTooLowButtonClose.addEventListener("click", function() {
    flavourStockLevelTooLowPopup.close();
});


showActiveFlavoursListButtonClose.addEventListener("click", function() {
    showActiveFlavoursPopup.close();
});

//CUSTOMER EVENT LISTENERS

addCustomerButtonOK.addEventListener("click", function() {
    customer = {
        name: customerNameInput.value,
        phoneNumber: customerPhoneInput.value,
        email: customerEmailInput.value
    }

    addCustomerPopup.close();
    confirmPopup.showModal();
});

addCustomerButtonCancel.addEventListener("click", function() {
    addCustomerPopup.close();
});

editCustomerButton.addEventListener("click", function() {
        let name = editCustomerNameInput.value;
        let phoneNumber = editCustomerPhoneNumberInput.value;
        let email = editCustomerEmailInput.value;

        fetch(`http://localhost:8080/customers/${selectedCustomerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                active: true
            })
        }).then(checkError).then(response => response.text()).then(message => {
            displayTitle.innerHTML = message;
            closeEditCustomerButton.click();
            getAllFlavoursButton.click();
        }).catch(error => {
            displayFlavoursOrder.innerHTML = `${error.message}`;
        });
});

archiveCustomerButton.addEventListener("click", function() {
      let name = editCustomerNameInput.value;
        let phoneNumber = editCustomerPhoneNumberInput.value;
        let email = editCustomerEmailInput.value;
        let active = selectedCustomerActive;

        fetch(`http://localhost:8080/customers/${selectedCustomerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                active: !active
            })
        }).then(checkError).then(response => response.text()).then(message => {
            displayTitle.innerHTML = message;
            closeEditCustomerButton.click();
            getAllFlavoursButton.click();
        }).catch(error => {
            displayFlavoursOrder.innerHTML = `${error.message}`;
        });
});



closeEditCustomerButton.addEventListener("click", function() {
    editCustomerPopup.close();
});

//ORDER EVENT LISTENERS

confirmOrderButton.addEventListener("click", function() {

    let flavoursOrderCost = 0;

    orderIcecreams.forEach(icecream => {
        icecream.flavours.forEach(flavour => {
            flavoursOrderCost += flavour.purchasePrice * 0.15;
        });
    });

    fetch("http://localhost:8080/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: customer.name,
            phoneNumber: customer.phoneNumber,
            email: customer.email
        })
    })
    .then(checkError)
    .then(response => response.text())
    .then(message => {

        displayList.innerHTML = message;

        const customerId =
            Number(message.substring(message.lastIndexOf(" ") + 1));

        return fetch("http://localhost:8080/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                orderTime: new Date().toISOString().slice(0, 19),
                sum: totalPrice,
                cost: flavoursOrderCost,
                customerId: customerId
            })
        });
    })
    .then(checkError)
    .then(response => response.text())
    .then(message => {

       const orderId =
            Number(message.substring(message.lastIndexOf(" ") + 1));

        const requests = orderIcecreams.flatMap(icecream => {

    const flavourIds = icecream.flavours.map(flavour => flavour.id);

    const icecreamRequest = fetch("http://localhost:8080/icecreams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            price: icecream.price,
            orderId: orderId,
            flavourIds: flavourIds
        })
    });

    const flavourRequests = icecream.flavours.map(flavour => {

    const formData = new FormData();

    formData.append("request", new Blob([
        JSON.stringify({
            name: flavour.name,
            stockLevel: Math.round((flavour.stockLevel - 0.15) * 100) / 100,
            supplierId: flavour.supplier.id,
            active: flavour.active,
            purchasePrice: flavour.purchasePrice,
            sellingPrice: flavour.sellingPrice
        })
    ], { type: "application/json" }));

    return fetch(`http://localhost:8080/flavours/${flavour.id}`, {
        method: "PUT",
        body: formData
    });
});

    return [icecreamRequest, ...flavourRequests];
});

return Promise.all(requests);
    })
    .then(responses => Promise.all(
        responses.map(response => {
            checkError(response);
            return response.text();
        })
    ))
    .then(messages => {

        displayList.innerHTML = messages.join("<br>");

        cancelOrderButton.click();
        addOrderButtonCancel.click();
        
        return displayCashBalance();
    }).then(balance => {
        displayBalance.innerHTML = "Cash balance: " + balance.toFixed(2);
    })
    .catch(error => {
        displayList.innerHTML = `<p>${error.message}</p>`;
    });
});

cancelOrderButton.addEventListener("click", function() {
    customer = null;
    confirmPopup.close();
});

orderDetailsButtonClose.addEventListener("click", function() {
    orderDetailsPopup.close();
});

//DATA FUNCTIONS

dataLink.addEventListener("click", function() {
    dataMenuPopup.showModal();
});

closeDataMenuPopupButton.addEventListener("click", function() {
    dataMenuPopup.close();
});


//HELPER FUNCTIONS

function checkError (response) {
    if (!response.ok) {
        return response.json().then(error => {
            throw error;
        });
    }

    return response;
}

function removeAllChildrenDisplayList () {
    
    while (displayList.firstChild) {
        displayList.removeChild(displayList.lastChild);
    }
}

function removeAllChildrenIcecreamsList() {
     while (displayListIcecreams.firstChild) {
        displayListIcecreams.removeChild(displayListIcecreams.lastChild);
    }
}

function removeAllChildrenShowFlavoursList () {
       while (showActiveFlavoursList.firstChild) {
        showActiveFlavoursList.removeChild(showActiveFlavoursList.lastChild);
    }
}

function removeAllChildrenDisplayFlavoursOrder () {
        while (displayFlavoursOrder.firstChild) {
        displayFlavoursOrder.removeChild(displayFlavoursOrder.lastChild);
    }
}

function removeAllChildrenConfirmOrderList() {
       while (confirmOrderList.firstChild) {
        confirmOrderList.removeChild(confirmOrderList.lastChild);
    }
}

function removeCheckBoxEventListners () {
    nameCheckBox.replaceWith(nameCheckBox.cloneNode(true));
    nameCheckBox = document.getElementById("nameCheckBox");
    descCheckBox.replaceWith(descCheckBox.cloneNode(true));
    descCheckBox = document.getElementById("descCheckBox");
    archiveCheckBox.replaceWith(archiveCheckBox.cloneNode(true));
    archiveCheckBox = document.getElementById("archiveCheckBox");
}

function getActiveFlavoursStockCost () {

    let activeCost = 0;

    return fetch("http://localhost:8080/flavours?active=true").then(checkError).then(response => response.json()).then(flavours => {
    flavours.forEach(flavour => {
        activeCost += flavour.purchasePrice * flavour.stockLevel;
    });
      return activeCost;
    }).catch(error => {
        displayList.innerHTML = 
        `<p>${error.message}</p>`;
    });

}

function getArchiveFlavoursStockCost () {

    let archiveCost = 0;

    return fetch("http://localhost:8080/flavours?active=false").then(checkError).then(response => response.json()).then(flavours => {
    flavours.forEach(flavour => {
        archiveCost += flavour.purchasePrice * flavour.stockLevel;
    });

    return archiveCost;
    }).catch(error => {
        displayList.innerHTML = 
        `<p>${error.message}</p>`;
    });   
}

function getOrdersProfit() {
    let ordersProfit = 0;

    return fetch("http://localhost:8080/orders").then(checkError).then(response => response.json()).then(orders => {
        orders.forEach(order => {
            ordersProfit += order.sum - order.cost - order.cost;
        });

        return ordersProfit;
    }).catch(error => {
        displayList.innerHTML = `${error.message}`;
    });
}

function displayCashBalance() {
   return Promise.all([
    getActiveFlavoursStockCost(),
    getArchiveFlavoursStockCost(),
    getOrdersProfit()
]).then(([activeCost, archiveCost, orderProfit]) => {

    return 100000 - (activeCost + archiveCost) + orderProfit;

});
}

function showAllCheckBoxes (show) {

    if (show) {
    nameCheckBox.style.visibility = "visible";
    descCheckBox.style.visibility = "visible";
    archiveCheckBox.style.visibility = "visible";

    nameCheckBoxLabel.style.visibility = "visible";
    descCheckBoxLabel.style.visibility = "visible";
    archiveCheckBoxLabel.style.visibility = "visible";
    }

    else {
    nameCheckBox.style.visibility = "hidden";
    descCheckBox.style.visibility = "hidden";
    archiveCheckBox.style.visibility = "hidden";

    nameCheckBoxLabel.style.visibility = "hidden";
    descCheckBoxLabel.style.visibility = "hidden";
    archiveCheckBoxLabel.style.visibility = "hidden";
    }
}

