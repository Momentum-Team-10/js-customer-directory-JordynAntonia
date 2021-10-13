const root = document.getElementById('root');
const container = document.createElement("div");
root.appendChild(container);
container.classList.add("uk-container-large", "uk-flex", "uk-flex-between");

for (let customer of customers) {
    const customerCard = document.createElement("div");
    customerCard.id = `${customer.id}`;
    container.appendChild(customerCard);
    customerCard.classList.add(
        "uk-card",
        "uk-card-body",
        "uk-card-default",
        "uk-width-medium"

    );

    customerCard.innerHTML = `
<img src=${customer.image}/>
<p> class="uk-card-name">${customer.name}</p>
<p>${customer.email}</p>
<p>${customer.email}
<p>${customer.address}
<p>${customer.DOB}
<p${customer.registration}<p>

}
